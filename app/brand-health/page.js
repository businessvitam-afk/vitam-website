"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, RotateCcw, CheckCircle2 } from "lucide-react";
import { ASSESSMENT_QUESTIONS } from "@/lib/data";

const CATEGORIES = ["Brand Foundation", "Digital Presence", "Consumer Understanding", "Growth Readiness"];

function getGrade(score) {
  if (score >= 80) return { label: "Excellent", color: "#22C55E", message: "Your brand has strong behavioural foundations. You\u2019re ready to scale with precision." };
  if (score >= 60) return { label: "Good", color: "#3B82F6", message: "Your brand has solid fundamentals but there are clear opportunities to deepen your behavioural impact." };
  if (score >= 40) return { label: "Developing", color: "#F59E0B", message: "Your brand has potential but key behavioural pillars need attention before you can scale effectively." };
  return { label: "Needs Work", color: "#EF4444", message: "There are significant gaps in your brand\u2019s behavioural health. The good news: this is fixable with the right methodology." };
}

function getCategoryScore(answers, category) {
  const qs = ASSESSMENT_QUESTIONS.filter(q => q.cat === category);
  const maxScore = qs.length * 4;
  const actual = qs.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
  return Math.round((actual / maxScore) * 100);
}

function getCategoryRec(category, score) {
  if (score >= 75) return "Strong position. Focus on maintaining and iterating.";
  const recs = {
    "Brand Foundation": "Your brand identity needs a structured audit and documented guidelines system.",
    "Digital Presence": "Your digital channels need a cohesive content strategy tied to conversion outcomes.",
    "Consumer Understanding": "You\u2019re making decisions without behavioural data. Consumer research is your next priority.",
    "Growth Readiness": "Focus on establishing measurement infrastructure before scaling your marketing spend.",
  };
  return recs[category];
}

export default function BrandHealthPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [complete, setComplete] = useState(false);

  const question = ASSESSMENT_QUESTIONS[current];
  const progress = ((current) / ASSESSMENT_QUESTIONS.length) * 100;

  function selectOption(score) {
    const updated = { ...answers, [question.id]: score };
    setAnswers(updated);

    if (current < ASSESSMENT_QUESTIONS.length - 1) {
      setTimeout(() => setCurrent(current + 1), 300);
    } else {
      setTimeout(() => setComplete(true), 400);
    }
  }

  function reset() {
    setCurrent(0);
    setAnswers({});
    setComplete(false);
  }

  const totalScore = useMemo(() => {
    if (!complete) return 0;
    const maxScore = ASSESSMENT_QUESTIONS.length * 4;
    const actual = Object.values(answers).reduce((s, v) => s + v, 0);
    return Math.round((actual / maxScore) * 100);
  }, [complete, answers]);

  const grade = getGrade(totalScore);

  // ===== RESULTS VIEW =====
  if (complete) {
    return (
      <div className="min-h-[100dvh] px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                            bg-[var(--bg-surface)] border border-[var(--border)] text-caption text-secondary mb-6">
              <CheckCircle2 size={14} className="text-accent" />
              Assessment Complete
            </div>
            <h1 className="font-display text-heading-1 font-bold text-primary mb-4">
              Your Brand Health Score
            </h1>
          </div>

          {/* Score gauge */}
          <div className="bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] p-10 mb-8 text-center shadow-card">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--border)" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="50" fill="none"
                  stroke={grade.color} strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${totalScore * 3.14} ${314 - totalScore * 3.14}`}
                  style={{ transition: "stroke-dasharray 1.5s ease-out" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-4xl font-bold text-primary">{totalScore}</span>
                <span className="text-caption text-tertiary">/100</span>
              </div>
            </div>
            <div className="text-heading-3 font-display font-bold mb-2" style={{ color: grade.color }}>
              {grade.label}
            </div>
            <p className="text-secondary text-body max-w-md mx-auto">
              {grade.message}
            </p>
          </div>

          {/* Category breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {CATEGORIES.map((cat) => {
              const score = getCategoryScore(answers, cat);
              const catGrade = getGrade(score);
              return (
                <div key={cat} className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-semibold text-primary text-[0.9375rem]">{cat}</h3>
                    <span className="font-mono text-[0.875rem] font-bold" style={{ color: catGrade.color }}>
                      {score}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[var(--bg-elevated)] mb-3">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${score}%`, backgroundColor: catGrade.color }}
                    />
                  </div>
                  <p className="text-secondary text-[0.8125rem]">{getCategoryRec(cat, score)}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-8 text-center">
            <h3 className="font-display text-heading-3 font-bold text-primary mb-2">
              Want the Full Diagnostic?
            </h3>
            <p className="text-secondary text-body mb-6">
              Book a free 30-minute call with our team. We&apos;ll review your score,
              identify the highest-impact opportunities, and show you the exact sprint to get there.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--accent)] text-white
                           font-medium hover:opacity-90 transition-opacity"
              >
                Book a Discovery Call <ArrowRight size={16} />
              </Link>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[var(--border)]
                           text-primary font-medium hover:bg-[var(--overlay)] transition-all"
              >
                <RotateCcw size={14} /> Retake Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===== QUESTION VIEW =====
  return (
    <div className="min-h-[100dvh] px-6 py-24">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-overline uppercase tracking-widest text-accent font-semibold mb-3">
            Brand Health Assessment
          </p>
          <h1 className="font-display text-heading-2 font-bold text-primary">
            3 Minutes to Clarity
          </h1>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-caption text-secondary">
              Question {current + 1} of {ASSESSMENT_QUESTIONS.length}
            </span>
            <span className="text-caption text-tertiary">{question.cat}</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[var(--bg-elevated)]">
            <div
              className="h-full rounded-full bg-[var(--accent)] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-8 shadow-card">
          <h2 className="font-display text-heading-3 font-bold text-primary mb-6">
            {question.q}
          </h2>

          <div className="space-y-3">
            {question.opts.map((opt, i) => (
              <button
                key={i}
                onClick={() => selectOption(opt.s)}
                className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200
                           ${answers[question.id] === opt.s
                             ? "border-[var(--accent)] bg-[var(--accent)]/10"
                             : "border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--overlay)]"
                           }`}
              >
                <span className="text-primary text-[0.9375rem]">{opt.t}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {current > 0 && (
          <button
            onClick={() => setCurrent(current - 1)}
            className="mt-6 inline-flex items-center gap-2 text-secondary text-caption hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} /> Previous question
          </button>
        )}
      </div>
    </div>
  );
}
