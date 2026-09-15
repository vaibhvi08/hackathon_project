import type { Announcement, Profile } from "./types";

export const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

export const BRANCHES = [
  "Computer Science & Engineering",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Information Technology",
  "Biotechnology",
  "Architecture",
];

export const INTERESTS = [
  "Hackathons & Coding",
  "Cultural Clubs",
  "Sports",
  "Robotics",
  "Entrepreneurship",
  "Research & Papers",
  "Music & Performing Arts",
  "Social Impact",
  "Photography",
  "Debate & Literature",
];

export const CAMPUSES = [
  "Main Campus — North Gate",
  "Tech Campus — Innovation Block",
  "South Campus — Lakeside",
  "City Campus — Downtown",
];

export const SAMPLE_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "a1",
    title: "HackVerse 2026 — 36-Hour National Hackathon Registration Now Open",
    date: "Sep 20, 2026",
    time: "09:00 AM",
    location: "Innovation Block, Tech Campus",
    audience: ["All Years", "Computer Science & Engineering", "Information Technology", "Electronics & Communication"],
    category: "Hackathons & Coding",
    summary:
      "HackVerse 2026 is the flagship inter-college hackathon hosted by the Coding Club. Form teams of 2–4, pick a problem statement, and build over 36 hours. Prizes worth ₹2,00,000 plus internship interviews with sponsoring companies.",
    aiSummary:
      "This is a high-priority hackathon that matches your interest in coding competitions. Registration closes in 4 days and your branch is eligible. Past participants from your branch have a 68% selection rate for sponsor interviews.",
    actionRequired: "Register your team of 2–4 on the HackVerse portal and submit a problem statement preference.",
    deadline: "Sep 19, 2026",
    relevance: 94,
    relevanceReasons: [
      "Matches your interest in Hackathons & Coding",
      "Open to your branch (Computer Science & Engineering)",
      "Registration deadline is in 4 days",
      "Past participants from your branch had strong outcomes",
    ],
    urgency: "high",
    isPriority: true,
    isEvent: true,
    eventDate: "Sep 20–21, 2026",
  },
  {
    id: "a2",
    title: "Mid-Semester Examination Schedule Released — Check Your Dates",
    date: "Sep 25, 2026",
    time: "All Day",
    location: "Examination Hall, Main Campus",
    audience: ["All Years", "All Branches"],
    category: "Academics",
    summary:
      "The mid-semester examination schedule for Autumn 2026 has been published. Exams begin October 2 and run through October 10. Seating arrangements will be uploaded 48 hours before each exam. Download your personalized timetable from the student portal.",
    aiSummary:
      "Your mid-semester exams begin in 17 days. Your first exam, Data Structures, is scheduled for October 3. No clashes detected with your other subjects. Start preparing now — the recommended study window is 10–14 days.",
    actionRequired: "Download your timetable from the student portal and verify your seating arrangement.",
    deadline: "Oct 2, 2026",
    relevance: 88,
    relevanceReasons: [
      "Mandatory for all students including you",
      "Your first exam is in 17 days",
      "No exam clashes detected for your subjects",
    ],
    urgency: "high",
    isPriority: true,
  },
  {
    id: "a3",
    title: "Library Extended Hours During Exam Season — 24/7 Access",
    date: "Sep 26, 2026",
    time: "12:00 AM",
    location: "Central Library, Main Campus",
    audience: ["All Years", "All Branches"],
    category: "Facilities",
    summary:
      "Starting September 26, the Central Library will be open 24/7 until October 12 to support exam preparation. Entry after 10 PM requires a valid student ID. Group study rooms can be booked via the library app.",
    aiSummary:
      "Useful for your exam prep — the library is now open overnight. You can book a group study room through the library app. Late-night entry needs your student ID, so carry it.",
    actionRequired: "Carry your student ID for late-night entry. Book group study rooms via the library app.",
    deadline: null,
    relevance: 72,
    relevanceReasons: [
      "Supports your exam preparation starting October 2",
      "Available on your campus (Main Campus)",
    ],
    urgency: "medium",
    isPriority: true,
  },
  {
    id: "a4",
    title: "Robotics Club — Intro Workshop for First-Year Students",
    date: "Sep 22, 2026",
    time: "04:30 PM",
    location: "Robotics Lab, Tech Campus",
    audience: ["1st Year", "All Branches"],
    category: "Robotics",
    summary:
      "The Robotics Club is running a hands-on intro workshop for first-year students. No prior experience needed — you'll build and program a line-following robot. Free kit included for the first 50 registrations.",
    aiSummary:
      "This workshop is designed specifically for first-year students and matches your interest in Robotics. A free kit is included, and no experience is needed. Great way to join the club early.",
    actionRequired: "Register on the Robotics Club page to reserve your free kit.",
    deadline: "Sep 21, 2026",
    relevance: 86,
    relevanceReasons: [
      "Matches your interest in Robotics",
      "Designed specifically for 1st-year students",
      "Free kit for first 50 registrations",
    ],
    urgency: "medium",
    isEvent: true,
    eventDate: "Sep 22, 2026",
  },
  {
    id: "a5",
    title: "Cultural Night — Auditions Open for Performers",
    date: "Sep 28, 2026",
    time: "06:00 PM",
    location: "Open-Air Auditorium, South Campus",
    audience: ["All Years", "All Branches"],
    category: "Music & Performing Arts",
    summary:
      "Auditions for the annual Cultural Night are now open. Solo and group performances welcome — music, dance, drama, and stand-up. The main event is scheduled for October 15.",
    aiSummary:
      "This matches your interest in Music & Performing Arts. Auditions are open to all years and branches. The main event is October 15, giving you time to prepare.",
    actionRequired: "Sign up for an audition slot on the Cultural Committee notice board.",
    deadline: "Sep 24, 2026",
    relevance: 68,
    relevanceReasons: [
      "Matches your interest in Music & Performing Arts",
      "Open to all years and branches",
    ],
    urgency: "low",
    isEvent: true,
    eventDate: "Oct 15, 2026",
  },
  {
    id: "a6",
    title: "Scholarship Applications Open — Merit-Cum-Means 2026",
    date: "Oct 1, 2026",
    time: "All Day",
    location: "Scholarship Office, Admin Block",
    audience: ["All Years", "All Branches"],
    category: "Financial Aid",
    summary:
      "Applications for the Merit-Cum-Means scholarship are open. Eligibility requires a CGPA of 7.5+ and family income below ₹4.5 lakh/year. Submit income certificate, mark sheets, and a signed application form.",
    aiSummary:
      "If your CGPA is above 7.5 and family income is below the threshold, you're eligible. The deadline is tight — collect your income certificate now if you don't have one.",
    actionRequired: "Submit income certificate, mark sheets, and application form to the Scholarship Office.",
    deadline: "Oct 10, 2026",
    relevance: 64,
    relevanceReasons: [
      "Available to all years and branches",
      "Deadline in 25 days — start gathering documents",
    ],
    urgency: "medium",
  },
  {
    id: "a7",
    title: "Campus Photography Contest — Theme: 'My First Semester'",
    date: "Oct 5, 2026",
    time: "11:59 PM",
    location: "Online Submission",
    audience: ["1st Year", "All Branches"],
    category: "Photography",
    summary:
      "Submit up to 3 photos capturing your first-semester experience. Top entries will be featured in the campus magazine and the annual exhibition. Winner gets a DSLR camera.",
    aiSummary:
      "This matches your interest in Photography and is exclusive to first-year students. You have 20 days to submit. A great low-effort way to get featured in the campus magazine.",
    actionRequired: "Submit up to 3 photos via the contest portal.",
    deadline: "Oct 5, 2026",
    relevance: 58,
    relevanceReasons: [
      "Matches your interest in Photography",
      "Exclusive to 1st-year students",
    ],
    urgency: "low",
    isEvent: true,
    eventDate: "Oct 5, 2026",
  },
  {
    id: "a8",
    title: "Hostel Room Allotment — Second List Out for First-Year Students",
    date: "Sep 18, 2026",
    time: "10:00 AM",
    location: "Hostel Office, Main Campus",
    audience: ["1st Year", "All Branches"],
    category: "Hostel & Accommodation",
    summary:
      "The second allotment list for first-year hostel rooms has been published. Check your status on the hostel portal. Allotted students must confirm by paying the caution deposit within 3 days.",
    aiSummary:
      "If you applied for hostel accommodation, check the second list now. You have 3 days to confirm by paying the caution deposit, or your allotment will be cancelled.",
    actionRequired: "Check your status on the hostel portal and pay the caution deposit if allotted.",
    deadline: "Sep 21, 2026",
    relevance: 60,
    relevanceReasons: [
      "Relevant if you applied for hostel accommodation",
      "Confirmation deadline in 3 days",
    ],
    urgency: "high",
  },
];

export const DEFAULT_PROFILE: Profile = {
  year: "1st Year",
  branch: "Computer Science & Engineering",
  interests: ["Hackathons & Coding", "Robotics", "Photography"],
  campus: "Tech Campus — Innovation Block",
};

export function getMockAssistantResponse(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("need to know") || q.includes("today")) {
    return "Here's what matters for you today:\n\n• HackVerse 2026 registration closes in 4 days — your branch is eligible and it matches your interest in coding. Register your team now.\n• Mid-semester exam timetable is out. Your first exam (Data Structures) is on October 3 — start preparing.\n• Robotics Club intro workshop is on Sep 22. Register by Sep 21 to get a free kit.\n\nWould you like details on any of these?";
  }

  if (q.includes("deadline")) {
    return "Your upcoming deadlines, sorted by urgency:\n\n1. HackVerse registration — Sep 19 (4 days left)\n2. Robotics Club workshop — Sep 21 (6 days left)\n3. Hostel room confirmation — Sep 21 (6 days left)\n4. Cultural Night auditions — Sep 24 (9 days left)\n5. Scholarship application — Oct 10 (25 days left)\n\nThe first two are high priority for you. Want me to break any of them down?";
  }

  if (q.includes("relevant") || q.includes("me")) {
    return "Based on your profile (1st Year, CSE, interested in Hackathons, Robotics, and Photography), the most relevant items right now are:\n\n• HackVerse 2026 — 94% relevant. Matches your coding interest and your branch is eligible.\n• Robotics Club Workshop — 86% relevant. Designed for first-years, free kit included.\n• Photography Contest — 58% relevant. Exclusive to first-years and matches your interest.\n\nI filtered out announcements for senior years and unrelated branches. Want full details on any of these?";
  }

  return "I can help with that. Try asking me:\n\n• \"What do I need to know today?\"\n• \"What deadlines do I have?\"\n• \"What's relevant to me?\"\n\nI'll pull the most important campus information tailored to your profile.";
}
