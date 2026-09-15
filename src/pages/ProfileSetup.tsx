import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, GraduationCap, MapPin, Sparkles } from "lucide-react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import { YEARS, BRANCHES, INTERESTS, CAMPUSES } from "../data";
import { saveProfile } from "../store";
import type { Profile } from "../types";

const stepIcons = [GraduationCap, GraduationCap, Sparkles, MapPin];
const stepColors = [
  "from-brand-500 to-brand-700",
  "from-brand-500 to-accent-500",
  "from-accent-500 to-cyan-500",
  "from-cyan-500 to-brand-500",
];

export default function ProfileSetup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [campus, setCampus] = useState("");

  const steps = ["Year", "Branch", "Interests", "Campus"];
  const canAdvance = [year, branch, interests.length > 0, campus][step];

  const toggleInterest = (i: string) => {
    setInterests((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  };

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      const profile: Profile = { year, branch, interests, campus };
      saveProfile(profile);
      navigate("/dashboard");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Background />

      <header className="px-6 py-5 sm:px-10 flex items-center justify-between relative z-10">
        <button onClick={() => (step === 0 ? navigate("/") : setStep(step - 1))} className="btn-ghost text-sm">
          <ArrowLeft size={16} />
          Back
        </button>
        <Logo size="sm" />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 py-8 relative z-10">
        <div className="w-full max-w-2xl">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex-1">
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i <= step
                      ? `bg-gradient-to-r ${stepColors[i]} shadow-lg`
                      : "bg-white/[0.06]"
                  }`}
                  style={i <= step ? { boxShadow: "0 0 12px rgba(139,92,246,0.4)" } : {}}
                />
                <p className={`mt-2 text-xs font-medium transition-colors ${i <= step ? "text-brand-200" : "text-white/20"}`}>{s}</p>
              </div>
            ))}
          </div>

          <div key={step} className="animate-scale-in">
            {step === 0 && (
              <StepCard step={step} title="What year are you in?" subtitle="We'll tailor announcements to your academic stage.">
                <div className="grid grid-cols-2 gap-3">
                  {YEARS.map((y) => (
                    <SelectCard key={y} label={y} selected={year === y} onClick={() => setYear(y)} step={step} />
                  ))}
                </div>
              </StepCard>
            )}

            {step === 1 && (
              <StepCard step={step} title="Which branch are you in?" subtitle="Announcements are filtered by your field of study.">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BRANCHES.map((b) => (
                    <SelectCard key={b} label={b} selected={branch === b} onClick={() => setBranch(b)} step={step} />
                  ))}
                </div>
              </StepCard>
            )}

            {step === 2 && (
              <StepCard step={step} title="What are you interested in?" subtitle="Pick a few — we'll prioritize announcements that match. Choose as many as you like.">
                <div className="flex flex-wrap gap-2.5">
                  {INTERESTS.map((i) => {
                    const selected = interests.includes(i);
                    return (
                      <button
                        key={i}
                        onClick={() => toggleInterest(i)}
                        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium border transition-all duration-200 ${
                          selected
                            ? "bg-gradient-to-r from-brand-500/25 to-accent-500/25 border-brand-400/50 text-white shadow-md shadow-brand-500/20"
                            : "bg-white/[0.03] border-white/[0.06] text-brand-100/60 hover:border-white/15 hover:bg-white/[0.05]"
                        }`}
                      >
                        {selected && <Check size={14} className="text-brand-300" />}
                        {i}
                      </button>
                    );
                  })}
                </div>
              </StepCard>
            )}

            {step === 3 && (
              <StepCard step={step} title="Which campus are you on?" subtitle="So we only show announcements relevant to your location.">
                <div className="grid grid-cols-1 gap-3">
                  {CAMPUSES.map((c) => (
                    <SelectCard key={c} label={c} selected={campus === c} onClick={() => setCampus(c)} step={step} />
                  ))}
                </div>
              </StepCard>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-brand-100/30">
              Step {step + 1} of {steps.length}
            </p>
            <button
              onClick={handleContinue}
              disabled={!canAdvance}
              className="btn-primary text-base disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none"
            >
              {step === 3 ? "Continue to Dashboard" : "Continue"}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function StepCard({
  step,
  title,
  subtitle,
  children,
}: {
  step: number;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const Icon = stepIcons[step];
  return (
    <div className="glass-card p-6 sm:p-8 glow-border">
      <div className="flex items-center gap-3 mb-2">
        <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${stepColors[step]} grid place-items-center shadow-lg shadow-brand-500/20`}>
          <Icon size={20} className="text-white" />
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white">{title}</h2>
      </div>
      <p className="text-brand-100/40 text-sm mb-6 ml-13">{subtitle}</p>
      {children}
    </div>
  );
}

function SelectCard({ label, selected, onClick, step }: { label: string; selected: boolean; onClick: () => void; step: number }) {
  return (
    <button
      onClick={onClick}
      className={`text-left rounded-xl px-4 py-3.5 border transition-all duration-200 ${
        selected
          ? `bg-gradient-to-br ${stepColors[step]} bg-opacity-10 border-transparent shadow-lg`
          : "bg-white/[0.03] border-white/[0.06] hover:border-white/15 hover:bg-white/[0.05]"
      }`}
      style={selected ? { boxShadow: "0 0 20px -4px rgba(139,92,246,0.3)" } : {}}
    >
      <div className="flex items-center justify-between">
        <span className={`text-sm font-medium ${selected ? "text-white" : "text-brand-100/60"}`}>{label}</span>
        {selected && (
          <div className="h-5 w-5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 grid place-items-center shadow-md shadow-brand-500/40">
            <Check size={12} className="text-white" strokeWidth={3} />
          </div>
        )}
      </div>
    </button>
  );
}
