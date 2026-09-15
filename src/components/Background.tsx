export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink-950 bg-aurora">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Colorful glows */}
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-brand-600/25 blur-[130px] animate-pulse-glow" />
      <div
        className="absolute top-1/4 -right-40 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-[130px] animate-pulse-glow"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute -bottom-32 left-1/4 h-[460px] w-[460px] rounded-full bg-cyan-500/12 blur-[140px] animate-pulse-glow"
        style={{ animationDelay: "5s" }}
      />

      {/* Subtle top vignette */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950 to-transparent" />
    </div>
  );
}
