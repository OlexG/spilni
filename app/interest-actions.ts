"use server";

export type InterestActionState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInterest(
  _previousState: InterestActionState,
  formData: FormData,
): Promise<InterestActionState> {
  const honeypot = formData.get("website");

  // Quietly accept bot-filled submissions without writing them to the database.
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { status: "success", message: "You’re in — we’ll be in touch." };
  }

  const rawEmail = formData.get("email");
  const email = typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "";
  const wantsUpdates = formData.get("wantsUpdates") === "on";
  const wantsStartupMatch = formData.get("wantsStartupMatch") === "on";

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { status: "error", message: "Enter a valid email address." };
  }

  if (!wantsUpdates && !wantsStartupMatch) {
    return { status: "error", message: "Select at least one option." };
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabasePublishableKey) {
    console.error("Supabase interest signup environment variables are missing.");
    return { status: "error", message: "Could not save email. Try again later." };
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/interest_signups`, {
      method: "POST",
      headers: {
        apikey: supabasePublishableKey,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email,
        wants_updates: wantsUpdates,
        wants_startup_match: wantsStartupMatch,
        source: "homepage",
      }),
      cache: "no-store",
    });

    // A duplicate receives the same response so this action cannot be used
    // to discover whether a particular email is already on the list.
    if (response.ok || response.status === 409) {
      return { status: "success", message: "You’re in — we’ll be in touch." };
    }

    console.error("Supabase interest signup failed with status", response.status);
  } catch (error) {
    console.error("Supabase interest signup request failed", error);
  }

  return { status: "error", message: "Could not save email. Try again later." };
}
