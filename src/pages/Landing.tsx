import { Link } from "react-router-dom";
import { ArrowRight, Brain, Zap, CheckCircle2, Sparkles } from "lucide-react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import UrgencyBadge from "../components/UrgencyBadge";

export default function Landing() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Background />

      {/* Nav */}
      <header className="px-6 py-5 sm:px-10 flex items-center justify-between relative z-10">
        <Logo />
        <Link to="/dashboard" className="btn-ghost text-sm">
          Skip to Dashboard
        </Link>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 py-12 relative">
        {/* Floating decorative orbs */}
        <div className="absolute top-20 left-[10%] h-2 w-2 rounded-full bg-cyan-400 blur-[1px] animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-32 right-[15%] h-1.5 w-1.5 rounded-full bg-accent-400 blur-[1px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-40 left-[20%] h-1 w-1 rounded-full bg-brand-400 blur-[1px] animate-float" style={{ animationDelay: "4s" }} />

        <div className="max-w-3xl mx-auto text-center animate-fade-up relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-200 mb-8 backdrop-blur-md">
            <Sparkles size={14} className="text-accent-400" />
            AI-powered campus information assistant
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6">
            Your campus, without the
            <br />
            <span className="gradient-text">information overload.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-100/50 leading-relaxed max-w-2xl mx-auto mb-10">
            CampusPulse turns scattered campus announcements, notices, and emails into clear,
            relevant, and actionable information — so you always know what matters to you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/profile" className="btn-primary text-base">
              Get Started
              <ArrowRight size={18} />
            </Link>
            <Link to="/dashboard" className="btn-ghost text-base">
              Explore Demo
            </Link>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl w-full animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          {[
            { Icon: Brain, title: "AI-Summarized", desc: "Every announcement gets a clear, plain-language summary tailored to you.", color: "from-brand-500/20 to-brand-700/10", iconColor: "text-brand-300" },
            { Icon: Zap, title: "Priority-First", desc: "See what's urgent today — deadlines and actions surface to the top.", color: "from-accent-500/20 to-accent-600/10", iconColor: "text-accent-400" },
            { Icon: CheckCircle2, title: "Relevance Scored", desc: "A relevance percentage tells you why an announcement matters to you.", color: "from-cyan-500/20 to-cyan-600/10", iconColor: "text-cyan-300" },
          ].map((f) => (
            <div key={f.title} className="glass-card-hover p-6 text-left">
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${f.color} grid place-items-center mb-4 border border-white/[0.06]`}>
                <f.Icon size={22} className={f.iconColor} />
              </div>
              <h3 className="font-display font-semibold text-white mb-1.5">{f.title}</h3>
              <p className="text-sm text-brand-100/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Dashboard preview mock */}
        <div className="mt-16 max-w-2xl w-full animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="relative">
            {/* Glow behind preview */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-600/20 via-accent-500/15 to-cyan-500/15 blur-2xl rounded-3xl" />
            <div className="relative glass-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand-500/30 to-accent-500/20 grid place-items-center">
                  <Sparkles size={14} className="text-brand-200" />
                </div>
                <p className="text-xs font-semibold text-brand-200 tracking-wide">WHAT DO I NEED TO KNOW TODAY?</p>
              </div>
              <div className="space-y-3">
                <PreviewRow urgency="high" title="HackVerse 2026 registration closes in 4 days" relevance="94%" />
                <PreviewRow urgency="high" title="Mid-semester exam schedule released" relevance="88%" />
                <PreviewRow urgency="medium" title="Library extended hours during exam season" relevance="72%" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="px-6 py-8 text-center text-sm text-brand-100/30 relative z-10">
        CampusPulse — Built for first-year students, by students.
      </footer>
    </div>
  );
}

function PreviewRow({ urgency, title, relevance }: { urgency: "high" | "medium" | "low"; title: string; relevance: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.02] border border-white/[0.04] px-4 py-3">
      <div className="flex items-center gap-3 min-w-0">
        <UrgencyBadge urgency={urgency} />
        <p className="text-sm text-white/90 truncate">{title}</p>
      </div>
      <span
        className="text-xs font-bold shrink-0"
        style={{ color: urgency === "high" ? "#4ade80" : "#a78bfa", textShadow: "0 0 8px rgba(74,222,128,0.3)" }}
      >
        {relevance}
      </span>
    </div>
  );
}
