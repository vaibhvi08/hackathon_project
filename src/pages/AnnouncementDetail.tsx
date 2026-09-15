import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Sparkles, AlertCircle, Flag, Target } from "lucide-react";
import Background from "../components/Background";
import DashboardNav from "../components/DashboardNav";
import UrgencyBadge from "../components/UrgencyBadge";
import RelevanceRing from "../components/RelevanceRing";
import { SAMPLE_ANNOUNCEMENTS } from "../data";
import { getEffectiveProfile } from "../store";

export default function AnnouncementDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = getEffectiveProfile();
  const announcement = SAMPLE_ANNOUNCEMENTS.find((a) => a.id === id);

  if (!announcement) {
    return (
      <div className="relative min-h-screen">
        <Background />
        <DashboardNav profile={profile} />
        <main className="px-6 py-20 text-center max-w-md mx-auto">
          <h1 className="font-display text-2xl font-bold text-white mb-2">Announcement not found</h1>
          <p className="text-brand-100/40 mb-6">This announcement may have been removed.</p>
          <Link to="/dashboard" className="btn-primary">Back to Dashboard</Link>
        </main>
      </div>
    );
  }

  const a = announcement;

  return (
    <div className="relative min-h-screen">
      <Background />
      <DashboardNav profile={profile} />

      <main className="px-4 sm:px-6 lg:px-8 py-6 max-w-3xl mx-auto">
        <button onClick={() => navigate(-1)} className="btn-ghost text-sm mb-5">
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Header card */}
        <div className="relative animate-fade-up">
          <div className="absolute -inset-2 bg-gradient-to-r from-brand-600/15 via-accent-500/10 to-cyan-500/10 blur-2xl rounded-3xl pointer-events-none" />
          <div className="relative glass-card p-6 sm:p-8">
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <UrgencyBadge urgency={a.urgency} />
              <span className="chip border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
                {a.category}
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mb-5">
              {a.title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoRow Icon={Calendar} label="Date" value={a.date} color="text-brand-400/60" />
              <InfoRow Icon={Clock} label="Time" value={a.time} color="text-cyan-400/60" />
              <InfoRow Icon={MapPin} label="Location" value={a.location} color="text-accent-400/60" />
              <InfoRow Icon={Users} label="Target Audience" value={a.audience.join(", ")} color="text-success-400/60" />
            </div>
          </div>
        </div>

        {/* AI Summary + Relevance */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: "0.05s", opacity: 0 }}>
          {/* AI Summary */}
          <div className="lg:col-span-2 glass-card p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500/25 to-accent-500/20 grid place-items-center border border-brand-400/15">
                <Sparkles size={16} className="text-brand-200" />
              </div>
              <h2 className="font-display font-semibold text-white">AI Summary</h2>
            </div>
            <p className="text-brand-100/70 leading-relaxed">{a.aiSummary}</p>
          </div>

          {/* Relevance */}
          <div className="glass-card p-6 flex flex-col items-center justify-center text-center glow-border">
            <h2 className="font-display font-semibold text-white text-sm mb-3">Relevance to You</h2>
            <RelevanceRing value={a.relevance} size={88} />
            <p className="mt-3 text-sm font-semibold text-white">{a.relevance}% relevant to you</p>
            <p className="text-xs text-brand-100/30 mt-1">Based on your profile</p>
          </div>
        </div>

        {/* Why is this relevant? */}
        <div className="mt-4 glass-card p-6 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <div className="flex items-center gap-2.5 mb-4">
            <Target size={18} className="text-cyan-400" />
            <h2 className="font-display font-semibold text-white">Why is this relevant to you?</h2>
          </div>
          <ul className="space-y-2.5">
            {a.relevanceReasons.map((r, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-brand-100/70">
                <div className="h-5 w-5 rounded-full bg-success-500/15 border border-success-500/20 grid place-items-center shrink-0 mt-0.5">
                  <span className="text-success-400 text-xs font-bold">✓</span>
                </div>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Summary */}
        <div className="mt-4 glass-card p-6 animate-fade-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
          <h2 className="font-display font-semibold text-white mb-3">Full Summary</h2>
          <p className="text-brand-100/60 leading-relaxed">{a.summary}</p>
        </div>

        {/* Action Required + Deadline */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <div className="glass-card p-6 border-l-2 border-l-warning-500/60">
            <div className="flex items-center gap-2.5 mb-3">
              <AlertCircle size={18} className="text-warning-400" />
              <h2 className="font-display font-semibold text-white">Action Required</h2>
            </div>
            <p className="text-sm text-brand-100/70 leading-relaxed">{a.actionRequired}</p>
          </div>

          <div className="glass-card p-6 border-l-2 border-l-danger-500/60">
            <div className="flex items-center gap-2.5 mb-3">
              <Flag size={18} className="text-danger-400" />
              <h2 className="font-display font-semibold text-white">Deadline</h2>
            </div>
            {a.deadline ? (
              <p className="text-sm text-brand-100/70 leading-relaxed">
                <span className="font-semibold text-white">{a.deadline}</span>
              </p>
            ) : (
              <p className="text-sm text-brand-100/30">No deadline specified.</p>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 mb-12 flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
          <Link to="/assistant" className="btn-primary flex-1">
            <Sparkles size={18} />
            Ask AI about this
          </Link>
          <Link to="/dashboard" className="btn-ghost flex-1">
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}

function InfoRow({ Icon, label, value, color }: { Icon: typeof Calendar; label: string; value: string; color: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-white/[0.02] border border-white/[0.05] px-4 py-3">
      <Icon size={16} className={`${color} mt-0.5 shrink-0`} />
      <div>
        <p className="text-xs text-brand-100/30">{label}</p>
        <p className="text-sm text-white font-medium">{value}</p>
      </div>
    </div>
  );
}
