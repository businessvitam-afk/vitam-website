"use client";
import { useState } from "react";
import Link from "next/link";
import { Send, Phone, Mail, ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { SITE } from "@/lib/data";

export default function ContactPage() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Connect to form backend (Formspree, Netlify Forms, or custom API)
    setSubmitted(true);
  }

  return (
    <div ref={ref}>
      <section className="section-pad px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="reveal text-overline uppercase tracking-widest text-accent font-semibold mb-3">
              Contact
            </p>
            <h1 className="reveal reveal-delay-1 font-display text-heading-1 font-bold text-primary">
              Let&apos;s Engineer Your Next Moment
            </h1>
            <p className="reveal reveal-delay-2 mt-4 text-secondary text-body-lg max-w-2xl mx-auto">
              Whether you&apos;re launching a new brand, repositioning an existing one,
              or building a content ecosystem that actually converts &mdash;
              we&apos;re ready when you are.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <div className="reveal bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-8 shadow-card">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-6">
                      <Send size={24} className="text-accent" />
                    </div>
                    <h3 className="font-display text-heading-3 font-bold text-primary mb-2">
                      Message Sent
                    </h3>
                    <p className="text-secondary text-body">
                      We&apos;ll get back to you within 24 hours. In the meantime,
                      you might enjoy our{" "}
                      <Link href="/brand-health" className="text-accent hover:underline">
                        Brand Health Assessment
                      </Link>.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-heading-3 font-bold text-primary mb-6">
                      Send Us a Message
                    </h2>
                    <div className="space-y-5" role="form">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-caption text-secondary font-medium mb-1.5">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)]
                                       text-primary text-body focus:outline-none focus:border-[var(--accent)]
                                       transition-colors placeholder:text-tertiary"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-caption text-secondary font-medium mb-1.5">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)]
                                       text-primary text-body focus:outline-none focus:border-[var(--accent)]
                                       transition-colors placeholder:text-tertiary"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-caption text-secondary font-medium mb-1.5">
                            Company
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)]
                                       text-primary text-body focus:outline-none focus:border-[var(--accent)]
                                       transition-colors placeholder:text-tertiary"
                            placeholder="Company name"
                          />
                        </div>
                        <div>
                          <label className="block text-caption text-secondary font-medium mb-1.5">
                            Budget Range
                          </label>
                          <select
                            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)]
                                       text-primary text-body focus:outline-none focus:border-[var(--accent)]
                                       transition-colors"
                          >
                            <option value="">Select range</option>
                            <option value="under-2l">Under ₹2L</option>
                            <option value="2l-5l">₹2L – ₹5L</option>
                            <option value="5l-10l">₹5L – ₹10L</option>
                            <option value="above-10l">Above ₹10L</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-caption text-secondary font-medium mb-1.5">
                          Tell Us About Your Project
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)]
                                     text-primary text-body focus:outline-none focus:border-[var(--accent)]
                                     transition-colors resize-none placeholder:text-tertiary"
                          placeholder="What are you looking to achieve? What's the timeline?"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5
                                   rounded-xl bg-[var(--accent)] text-white font-medium
                                   hover:opacity-90 transition-opacity"
                      >
                        Send Message <Send size={16} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Direct contact */}
              <div className="reveal reveal-delay-1 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-7">
                <h3 className="font-display font-bold text-primary mb-5">Direct Contact</h3>
                <div className="space-y-4">
                  <a href={`mailto:${SITE.email}`}
                     className="flex items-center gap-3 text-secondary hover:text-accent transition-colors">
                    <Mail size={16} className="shrink-0" />
                    <span className="text-[0.875rem]">{SITE.email}</span>
                  </a>
                  {SITE.founders.map((f) => (
                    <a key={f.name} href={`tel:${f.phone.replace(/\s/g, "")}`}
                       className="flex items-center gap-3 text-secondary hover:text-accent transition-colors">
                      <Phone size={16} className="shrink-0" />
                      <span className="text-[0.875rem]">{f.name}: {f.phone}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* What happens next */}
              <div className="reveal reveal-delay-2 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-7">
                <h3 className="font-display font-bold text-primary mb-5">What Happens Next?</h3>
                <div className="space-y-5">
                  {[
                    {
                      step: "01",
                      title: "Discovery Call",
                      desc: "A free 30-minute video call to understand your brand, goals, and challenges.",
                    },
                    {
                      step: "02",
                      title: "Proposal",
                      desc: "We\u2019ll send a tailored proposal within 48 hours with scope, timeline, and pricing.",
                    },
                    {
                      step: "03",
                      title: "Kickoff",
                      desc: "Sign off, and we start the sprint. You\u2019ll have a dedicated contact from day one.",
                    },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="text-overline font-mono text-accent mt-0.5">{s.step}</div>
                      <div>
                        <h4 className="font-display font-semibold text-primary text-[0.9375rem]">
                          {s.title}
                        </h4>
                        <p className="text-secondary text-[0.8125rem] mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assessment CTA */}
              <div className="reveal reveal-delay-3 bg-[var(--accent)]/5 rounded-2xl border border-[var(--accent)]/20 p-7 text-center">
                <p className="text-primary font-display font-semibold mb-2">
                  Not sure where to start?
                </p>
                <p className="text-secondary text-[0.875rem] mb-4">
                  Our free Brand Health Assessment gives you clarity in 3 minutes.
                </p>
                <Link
                  href="/brand-health"
                  className="inline-flex items-center gap-2 text-accent font-medium text-[0.875rem] hover:underline"
                >
                  Take the Assessment <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
