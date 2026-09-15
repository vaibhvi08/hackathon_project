export type Urgency = "high" | "medium" | "low";

export interface Announcement {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  audience: string[];
  category: string;
  summary: string;
  aiSummary: string;
  actionRequired: string;
  deadline: string | null;
  relevance: number;
  relevanceReasons: string[];
  urgency: Urgency;
  isPriority?: boolean;
  isEvent?: boolean;
  eventDate?: string;
}

export interface Profile {
  year: string;
  branch: string;
  interests: string[];
  campus: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
}
