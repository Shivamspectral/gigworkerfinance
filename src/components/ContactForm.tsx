"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setStatus("success");
      setFeedback(data.message || "Thanks — we received your note.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-navy-100 bg-white p-6 shadow-sm md:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-800">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-xl border border-navy-200 px-4 py-3 outline-none ring-forest-500 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-xl border border-navy-200 px-4 py-3 outline-none ring-forest-500 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full rounded-xl border border-navy-200 px-4 py-3 outline-none ring-forest-500 focus:ring-2"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-navy-950 px-5 py-3 text-sm font-semibold text-white hover:bg-navy-800 disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
      {feedback ? (
        <p className={`text-sm ${status === "error" ? "text-red-700" : "text-forest-700"}`} role="status">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
