import { Activity } from "lucide-react";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dims = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-16 w-16" }[size];
  const text = { sm: "text-lg", md: "text-xl", lg: "text-4xl" }[size];
  const icon = { sm: 16, md: 20, lg: 32 }[size];

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${dims} rounded-xl bg-gradient-to-br from-brand-500 via-accent-500 to-cyan-500 grid place-items-center shadow-lg shadow-brand-500/40 relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
        <Activity size={icon} className="text-white relative z-10" strokeWidth={2.5} />
      </div>
      <span className={`${text} font-display font-bold tracking-tight text-white`}>
        Campus<span className="gradient-text">Pulse</span>
      </span>
    </div>
  );
}
