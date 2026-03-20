"use client";

export interface ScanItem {
  id: string;
  data: string;
  type: string;
  timestamp: number;
  productInfo?: {
    name: string;
    summary: string;
    price?: string;
  };
}

const STORAGE_KEY = "scanpro_history";

export function getScanHistory(): ScanItem[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    return [];
  }
}

export function saveScan(scan: ScanItem) {
  const history = getScanHistory();
  const updated = [scan, ...history].slice(0, 500); // Limit to 500 items
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function deleteScan(id: string) {
  const history = getScanHistory();
  const updated = history.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
}