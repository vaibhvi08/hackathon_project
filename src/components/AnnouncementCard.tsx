import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import type { Announcement } from "../types";
import UrgencyBadge from "./UrgencyBadge";

const urgencyGlow: Record<string, string> = {
  high: "hover:shadow-danger-500/10",
  medium: "hover:shadow-warning-500/10",
  low: "hover:shadow-cyan-500/10",
};

export default function AnnouncementCard({ a, compact = false }: { a: Announcement; compact?: boolean }) {
  return (
    <Link
      to={`/announcement/${a.id}`}
      className={`group block glass-card-hover p-5 ${urgencyGlow[a.urgency]}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <UrgencyBadge urgency={a.urgency} />
          <span className="chip border-white/[0.08] bg-white/[0.03] text-brand-100/50">
            {a.category}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="text-right">
            <span
              className="text-xs font-bold"
              style={{
                color: a.relevance >= 85 ? "#4ade80" : a.relevance >= 65 ? "#a78bfa" : "#fbbf24",
                textShadow: `0 0 10px ${a.relevance >= 85 ? "rgba(74,222,128,0.4)" : a.relevance >= 65 ? "rgba(167,139,250,0.4)" : "rgba(251,191,36,0.4)"}`,
              }}
            >
              {a.relevance}%
            </span>
            <p className="text-[10px] text-brand-100/30">relevant</p>
          </div>
          <ChevronRight size={18} className="text-brand-100/20 group-hover:text-brand-300 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>

      <h3 className={`font-display font-semibold text-white mb-2 leading-snug ${compact ? "text-base" : "text-lg"}`}>
        {a.title}
      </h3>

      {!compact && <p className="text-sm text-brand-100/50 leading-relaxed mb-3 line-clamp-2">{a.summary}</p>}

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-brand-100/40">
        <span className="inline-flex items-center gap-1.5">
          <Calendar size={13} className="text-brand-400/60" />
          {a.date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock size={13} className="text-cyan-400/60" />
          {a.time}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={13} className="text-accent-400/60" />
          {a.location}
        </span>
      </div>
    </Link>
  );
}
