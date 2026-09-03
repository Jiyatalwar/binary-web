// Helper to get cached or default CMS data
export function getCMSData<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  const saved = localStorage.getItem(`cms_${key}`);
  return saved ? JSON.parse(saved) : fallback;
}

// Helper to update CMS data and emit a real-time update event
export function saveCMSData<T>(key: string, data: T): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`cms_${key}`, JSON.stringify(data));
  window.dispatchEvent(new CustomEvent('cms_update', { detail: { key, data } }));
}