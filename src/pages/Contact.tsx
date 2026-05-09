import { useState } from 'react'
import type { FormEvent } from 'react'

export function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h1 className="text-center font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)] sm:text-4xl">
        Contact
      </h1>
      <p className="mx-auto mt-3 max-w-lg text-center text-[var(--color-ink-muted)]">
        Share your date, location, and the kind of shoot you have in mind. I typically reply within one
        business day.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6 rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8"
        noValidate
      >
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-ink)]">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-xl border border-black/15 bg-[var(--color-paper)] px-4 py-3 text-[var(--color-ink)] outline-none ring-[var(--color-accent)] transition placeholder:text-black/35 focus:border-[var(--color-accent)] focus:ring-2"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-ink)]">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border border-black/15 bg-[var(--color-paper)] px-4 py-3 text-[var(--color-ink)] outline-none ring-[var(--color-accent)] transition placeholder:text-black/35 focus:border-[var(--color-accent)] focus:ring-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-ink)]">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 w-full resize-y rounded-xl border border-black/15 bg-[var(--color-paper)] px-4 py-3 text-[var(--color-ink)] outline-none ring-[var(--color-accent)] transition placeholder:text-black/35 focus:border-[var(--color-accent)] focus:ring-2"
            placeholder="Tell me about your event, preferred dates, and any inspiration links."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[var(--color-ink)] px-4 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          Send message
        </button>

        {sent ? (
          <p className="text-center text-sm text-[var(--color-ink-muted)]" role="status">
            Thanks — your message is ready to send. Connect this form to your email service or backend to
            deliver it.
          </p>
        ) : null}
      </form>
    </div>
  )
}
