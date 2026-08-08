"use client";

import { useActionState } from "react";
import {
  submitInterest,
  type InterestActionState,
} from "@/app/interest-actions";

const initialInterestActionState: InterestActionState = {
  status: "idle",
  message: "",
};

export default function InterestSignup() {
  const [state, formAction, isPending] = useActionState(
    submitInterest,
    initialInterestActionState,
  );

  return (
    <section className="hero-signup" id="updates" aria-labelledby="interest-title">
      <div className="signup-heading">
        <h2 id="interest-title">Get updates and startup introductions.</h2>
      </div>

      <form className="signup-form" action={formAction}>
        <label className="sr-only" htmlFor="interest-email">Email address</label>
        <div className="signup-control">
          <input
            id="interest-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={254}
            placeholder="you@company.com"
            required
          />
          <button type="submit" disabled={isPending}>
            {isPending ? "Joining…" : "Join"}
          </button>
        </div>

        <div className="signup-options" aria-label="Choose what you want to receive">
          <label className="signup-choice">
            <input name="wantsUpdates" type="checkbox" defaultChecked />
            <span><i aria-hidden="true">✓</i> Updates</span>
          </label>
          <label className="signup-choice">
            <input name="wantsStartupMatch" type="checkbox" />
            <span><i aria-hidden="true">✓</i> Startup intros</span>
          </label>
        </div>

        <div className="signup-honeypot" aria-hidden="true">
          <label htmlFor="interest-website">Website</label>
          <input id="interest-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <p className="signup-privacy">No spam. Unsubscribe anytime.</p>
        <p className={`signup-message ${state.status}`} role="status" aria-live="polite">
          {state.message}
        </p>
      </form>
    </section>
  );
}
