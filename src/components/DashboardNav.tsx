import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, MessageSquare, LogOut, User } from "lucide-react";
import Logo from "./Logo";
import { clearProfile } from "../store";
import type { Profile } from "../types";

export default function DashboardNav({ profile }: { profile: Profile }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleReset = () => {
    clearProfile();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/dashboard" className="shrink-0">
          <Logo size="sm" />
        </Link>

        <nav className="hidden sm:flex items-center gap-1.5">
          <NavLink to="/dashboard" active={isActive("/dashboard")} Icon={LayoutDashboard} label="Dashboard" />
          <NavLink to="/assistant" active={isActive("/assistant")} Icon={MessageSquare} label="AI Assistant" />
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 py-1.5">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center shadow-md shadow-brand-500/30">
              <User size={14} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-white leading-tight">{profile.year}</p>
              <p className="text-[10px] text-brand-100/40 leading-tight">{profile.branch.split(" ")[0]}</p>
            </div>
          </div>
          <button onClick={handleReset} className="btn-ghost text-sm !px-3 !py-2" title="Reset profile">
            <LogOut size={16} />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="sm:hidden flex items-center justify-center gap-1.5 pb-2">
        <NavLink to="/dashboard" active={isActive("/dashboard")} Icon={LayoutDashboard} label="Dashboard" />
        <NavLink to="/assistant" active={isActive("/assistant")} Icon={MessageSquare} label="AI Assistant" />
      </nav>
    </header>
  );
}

function NavLink({
  to,
  active,
  Icon,
  label,
}: {
  to: string;
  active: boolean;
  Icon: typeof LayoutDashboard;
  label: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-gradient-to-r from-brand-500/20 to-accent-500/20 text-white border border-brand-400/20"
          : "text-brand-100/50 hover:text-white hover:bg-white/[0.04]"
      }`}
    >
      <Icon size={16} className={active ? "text-brand-300" : ""} />
      {label}
    </Link>
  );
}
