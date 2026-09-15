import { Flame, Clock, Info } from "lucide-react";
import type { Urgency } from "../types";

const config: Record<Urgency, { label: string; cls: string; Icon: typeof Flame }> = {
  high: { label: "Urgent", cls: "bg-danger-500/15 text-danger-400 border-danger-500/30", Icon: Flame },
  medium: { label: "Important", cls: "bg-warning-500/15 text-warning-400 border-warning-500/30", Icon: Clock },
  low: { label: "FYI", cls: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30", Icon: Info },
};

export default function UrgencyBadge({ urgency }: { urgency: Urgency }) {
  const { label, cls, Icon } = config[urgency];
  return (
    <span className={`chip ${cls}`}>
      <Icon size={12} strokeWidth={2.5} />
      {label}
    </span>
  );
}
