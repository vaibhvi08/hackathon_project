import { DEFAULT_PROFILE } from "./data";
import type { Profile } from "./types";

const KEY = "campuspulse_profile";

export function loadProfile(): Profile | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Profile;
  } catch {
    return null;
  }
}

export function saveProfile(profile: Profile): void {
  localStorage.setItem(KEY, JSON.stringify(profile));
}

export function clearProfile(): void {
  localStorage.removeItem(KEY);
}

export function hasProfile(): boolean {
  return loadProfile() !== null;
}

export function getEffectiveProfile(): Profile {
  return loadProfile() ?? DEFAULT_PROFILE;
}
