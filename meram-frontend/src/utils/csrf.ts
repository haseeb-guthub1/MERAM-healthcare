// src/utils/csrf.ts
export const getCSRFToken = (): string | null => {
  const match = document.cookie.match(/(^|;) ?csrftoken=([^;]*)(;|$)/);
  return match ? decodeURIComponent(match[2]) : null;
};
