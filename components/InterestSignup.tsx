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
    <section className="hero-signup" id="updates" aria-labelledby="interest-title">
      <div className="signup-heading">
        <span className="signup-kicker"><i /> Join the network</span>
        <h2 id="interest-title">Updates &amp; startup intros.</h2>
        <p>One email. You choose what reaches your inbox.</p>
      </div>

      <form className="signup-form" action={formAction}>
        <label className="sr-only" htmlFor="interest-email">Email address</label>
        <div className="signup-control">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M4 6.75h16v10.5H4z" />
            <path d="m5 8 7 5 7-5" />
          </svg>
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
            <span>{isPending ? "Joining…" : "Join"}</span>
            <svg aria-hidden="true" viewBox="0 0 20 20">
              <path d="M4 10h11M11 6l4 4-4 4" />
            </svg>
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
