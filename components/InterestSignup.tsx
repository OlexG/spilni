"use client";

import { useActionState } from "react";
import {
  initialInterestActionState,
  submitInterest,
} from "@/app/interest-actions";

export default function InterestSignup() {
  const [state, formAction, isPending] = useActionState(
    submitInterest,
    initialInterestActionState,
  );

  return (
    <section className="interest-section" id="updates" aria-labelledby="interest-title">
      <div className="interest-copy">
        <span>Email</span>
        <h2 id="interest-title">Updates and startup introductions.</h2>
        <p>Select what you want to receive.</p>
      </div>

      <form className="interest-form" action={formAction}>
        <label htmlFor="interest-email">Email address</label>
        <div className="interest-email-row">
          <input
            id="interest-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={254}
            placeholder="you@example.com"
            required
          />
          <button type="submit" disabled={isPending}>
            {isPending ? "Submitting…" : "Submit"}
          </button>
        </div>

        <div className="interest-options">
          <label>
            <input name="wantsUpdates" type="checkbox" defaultChecked />
            <span>Spilni updates</span>
          </label>
          <label>
            <input name="wantsStartupMatch" type="checkbox" />
            <span>Startup introductions</span>
          </label>
        </div>

        <div className="interest-honeypot" aria-hidden="true">
          <label htmlFor="interest-website">Website</label>
          <input id="interest-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <p className="interest-privacy">
          Email is used only for the selected options. Unsubscribe at any time.
        </p>
        <p className={`interest-message ${state.status}`} role="status" aria-live="polite">
          {state.message}
        </p>
      </form>
    </section>
  );
}
