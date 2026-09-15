import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, User, Zap } from "lucide-react";
import Background from "../components/Background";
import DashboardNav from "../components/DashboardNav";
import { getEffectiveProfile } from "../store";
import { getMockAssistantResponse } from "../data";
import type { ChatMessage } from "../types";

const SUGGESTED = [
  "What do I need to know today?",
  "What deadlines do I have?",
  "What's relevant to me?",
];

const suggestedIcons = [Sparkles, Zap, Target];

import { Target } from "lucide-react";

export default function Assistant() {
  const profile = getEffectiveProfile();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      text: `Hi! I'm your CampusPulse assistant. I've analyzed your profile — ${profile.year}, ${profile.branch}, interested in ${profile.interests.join(", ")}. Ask me anything about your campus announcements, deadlines, or events.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = { id: `u-${Date.now()}`, role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getMockAssistantResponse(text);
      const aiMsg: ChatMessage = { id: `a-${Date.now()}`, role: "assistant", text: response };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Background />
      <DashboardNav profile={profile} />

      <main className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-4 sm:px-6">
        {/* Header with glow */}
        <div className="py-5 text-center relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-64 bg-brand-600/15 blur-3xl rounded-full pointer-events-none" />
          <div className="relative inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-200 mb-2 backdrop-blur-md">
            <Sparkles size={14} className="text-accent-400" />
            AI Assistant
          </div>
          <h1 className="relative font-display text-xl font-bold text-white">Ask about your campus</h1>
        </div>

        {/* Chat area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 pb-4 min-h-[300px]">
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}

          {isTyping && (
            <div className="flex items-start gap-3 animate-fade-in">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 via-accent-500 to-cyan-500 grid place-items-center shrink-0 shadow-md shadow-brand-500/30">
                <Sparkles size={16} className="text-white" />
              </div>
              <div className="glass-card px-4 py-3 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="h-2 w-2 rounded-full bg-accent-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
        </div>

        {/* Suggested questions */}
        {messages.length <= 1 && (
          <div className="pb-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xs text-brand-100/30 mb-2 px-1">Suggested questions</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED.map((q, i) => {
                const Icon = suggestedIcons[i];
                return (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-2.5 text-sm text-brand-100/70 hover:border-brand-400/30 hover:bg-brand-500/10 hover:text-white transition-all duration-200"
                  >
                    <Icon size={13} className="text-brand-400" />
                    {q}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="pb-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about deadlines, events, announcements..."
              className="flex-1 rounded-xl bg-ink-800/60 border border-white/[0.08] px-4 py-3 text-sm text-white placeholder:text-brand-100/25 focus:outline-none focus:border-brand-400/40 focus:bg-ink-750/60 transition-all backdrop-blur-md"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="h-11 w-11 rounded-xl bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500 bg-[length:200%_100%] grid place-items-center shadow-lg shadow-brand-500/30 transition-all hover:scale-105 hover:bg-[position:100%_0] active:scale-95 disabled:opacity-30 disabled:hover:scale-100"
            >
              <Send size={18} className="text-white" />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex items-start gap-3 animate-fade-up ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`h-8 w-8 rounded-lg grid place-items-center shrink-0 ${
          isUser
            ? "bg-white/[0.06] border border-white/[0.08]"
            : "bg-gradient-to-br from-brand-500 via-accent-500 to-cyan-500 shadow-md shadow-brand-500/30"
        }`}
      >
        {isUser ? <User size={16} className="text-brand-100/70" /> : <Sparkles size={16} className="text-white" />}
      </div>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-gradient-to-br from-brand-500/15 to-accent-500/15 border border-brand-400/20"
            : "glass-card"
        }`}
      >
        <p className="text-sm text-white/90 leading-relaxed whitespace-pre-line">{message.text}</p>
      </div>
    </div>
  );
}
