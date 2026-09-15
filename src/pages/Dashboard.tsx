import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sparkles, CalendarDays, Bell, MessageSquare, ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import Background from "../components/Background";
import DashboardNav from "../components/DashboardNav";
import AnnouncementCard from "../components/AnnouncementCard";
import { getEffectiveProfile } from "../store";
import type { Announcement, Profile } from "../types";

export default function Dashboard() {
  const profile = getEffectiveProfile();

const [announcements, setAnnouncements] = useState<Announcement[]>([]);

useEffect(() => {
  async function fetchAnnouncements() {
    try {
      const response = await fetch("/api/announcements");

      if (!response.ok) {
        throw new Error("Failed to fetch announcements");
      }

      const data = await response.json();
      alert(JSON.stringify(data));

      const formattedAnnouncements: Announcement[] = data.map((a: any) => ({
        id: a.id,
        title: a.title,
        date: a.date || "Not specified",
        time: a.time || "Not specified",
        location: a.location || "Not specified",
        audience: a.target_audience
          ? [a.target_audience]
          : ["All Students"],
        category: "College Announcement",
        summary: a.summary || a.content,
        aiSummary: a.summary || a.content,
        actionRequired:
          a.action_required || "No specific action mentioned.",
        deadline: a.deadline || null,
        relevance: 100,
        relevanceReasons: [],
        urgency:
          a.importance === "high" || a.importance === "low"
            ? a.importance
            : "medium",
        isPriority: a.importance === "high",
        isEvent: !!a.date,
        eventDate: a.date || undefined,
      }));

      setAnnouncements(formattedAnnouncements);
    } catch (error) {
  alert("FETCH ERROR: " + error);
}
  }

  fetchAnnouncements();
}, []);

const priority = announcements.filter((a) => a.isPriority);
const events = announcements.filter((a) => a.isEvent);
const recent = announcements
  .filter((a) => !a.isPriority)
  .slice(0, 4);

  const greeting = getGreeting();
  const firstName = "there";

  return (
    <div className="relative min-h-screen">
      <Background />
      <DashboardNav profile={profile as Profile} />

      <main className="px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto">
        {/* Greeting */}
        <div className="animate-fade-up">
          <p className="text-sm text-brand-100/40 mb-1">{greeting}</p>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
            Welcome back, {firstName}.
          </h1>
          <p className="text-brand-100/50">Here's what's happening on your campus today.</p>
        </div>

        {/* Profile summary */}
        <div className="mt-5 glass-card p-4 sm:p-5 flex flex-wrap items-center gap-3 sm:gap-5 animate-fade-up" style={{ animationDelay: "0.05s", opacity: 0 }}>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500 via-accent-500 to-cyan-500 grid place-items-center shrink-0 shadow-lg shadow-brand-500/30">
              <span className="text-white font-display font-bold text-lg">{(profile as Profile).year[0]}</span>
            </div>
            <div>
              <p className="text-xs text-brand-100/40">Your Profile</p>
              <p className="text-sm font-semibold text-white">{(profile as Profile).year} · {(profile as Profile).branch}</p>
            </div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/[0.08]" />
          <div className="flex flex-wrap gap-2">
            {(profile as Profile).interests.map((i) => (
              <span key={i} className="inline-flex items-center rounded-full bg-brand-500/10 border border-brand-400/20 px-3 py-1 text-xs font-medium text-brand-200">
                {i}
              </span>
            ))}
          </div>
          <Link to="/profile" className="ml-auto btn-ghost text-xs !py-2 !px-3">
            Edit Profile
          </Link>
        </div>

        {/* Featured: What do I need to know today? */}
        <section className="mt-8 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500/25 to-accent-500/20 grid place-items-center border border-brand-400/20">
              <Sparkles size={18} className="text-brand-200" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white">What do I need to know today?</h2>
              <p className="text-xs text-brand-100/40">Priority announcements sorted by relevance to you</p>
            </div>
          </div>

          {/* Glow behind the featured section */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-600/15 via-accent-500/10 to-cyan-500/10 blur-2xl rounded-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4">
              {priority.map((a) => (
                <AnnouncementCard key={a.id} a={a} />
              ))}
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
          <Link to="/assistant" className="glass-card-hover p-5 flex items-center gap-4 group">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500/25 to-accent-500/20 grid place-items-center shrink-0 border border-brand-400/15">
              <MessageSquare size={22} className="text-brand-200" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-white">Ask the AI Assistant</h3>
              <p className="text-sm text-brand-100/40">Get instant answers about deadlines, events, and what matters to you.</p>
            </div>
            <ArrowRight size={18} className="text-brand-100/20 group-hover:translate-x-1 group-hover:text-brand-300 transition-all" />
          </Link>

          <div className="glass-card p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-warning-500/15 grid place-items-center shrink-0 border border-warning-500/20">
              <AlertTriangle size={22} className="text-warning-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-white">2 deadlines this week</h3>
              <p className="text-sm text-brand-100/40">HackVerse registration & Robotics workshop sign-up</p>
            </div>
            <CheckCircle2 size={18} className="text-success-400/50" />
          </div>
        </section>

        {/* Upcoming events */}
        <section className="mt-8 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <div className="flex items-center gap-2.5 mb-4">
            <CalendarDays size={20} className="text-cyan-400" />
            <h2 className="font-display text-xl font-bold text-white">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((a) => (
              <AnnouncementCard key={a.id} a={a} compact />
            ))}
          </div>
        </section>

        {/* Recent announcements */}
        <section className="mt-8 mb-12 animate-fade-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
          <div className="flex items-center gap-2.5 mb-4">
            <Bell size={20} className="text-accent-400" />
            <h2 className="font-display text-xl font-bold text-white">Recent Announcements</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recent.map((a) => (
              <AnnouncementCard key={a.id} a={a} compact />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}
