"use client";

import { FormEvent, useState } from "react";

type NewsletterSignupProps = {
  compact?: boolean;
};

export default function NewsletterSignup({ compact = false }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to subscribe right now.");
      }

      setStatus("success");
      setMessage(data.message || "You’re on the list. Watch your inbox for tax-season reminders.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section className={`rounded-3xl bg-navy-950 text-white ${compact ? "p-6" : "p-7 md:p-10"}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-300">Free gig-driver newsletter</p>
      <h2 className={`mt-2 font-serif font-bold ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>Get money reminders before tax day sneaks up.</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy-200 md:text-base">
        Short, practical notes on quarterly taxes, deductions, and take-home pay. Written for Uber, Lyft, DoorDash, Instacart, and Grubhub drivers — not corporate finance bros.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@email.com"
          className="w-full rounded-xl border border-navy-700 bg-navy-900 px-4 py-3 text-white outline-none ring-forest-400 placeholder:text-navy-400 focus:ring-2"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-forest-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Joining..." : "Send me tips"}
        </button>
      </form>
      {message ? (
        <p className={`mt-3 text-sm ${status === "error" ? "text-red-300" : "text-forest-200"}`} role="status">
          {message}
        </p>
      ) : (
        <p className="mt-3 text-xs text-navy-400">No spam. Unsubscribe anytime. We never sell your email.</p>
      )}
    </section>
  );
}
