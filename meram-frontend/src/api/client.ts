// src/api/client.ts
const BASE_URL = "http://localhost:8000/api"; // your backend

// helper to read CSRF cookie from document
function getCookie(name: string): string | null {
  if (!document.cookie) return null;
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));
  return csrfToken ? decodeURIComponent(csrfToken.split("=")[1]) : null;
}

interface RequestOptions extends RequestInit {
  body?: any;
  csrf?: boolean; // enable csrf protection when needed
}

const client = async (endpoint: string, options: RequestOptions = {}) => {
  const { body, headers, csrf = false, ...customConfig } = options;

  const config: RequestInit = {
    method: body ? "POST" : "GET",
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json",
      ...(csrf ? { "X-CSRFToken": getCookie("csrftoken") || "" } : {}),
      ...(headers || {}),
    },
    credentials: "include", // ensure cookies (like csrftoken) are sent
    ...customConfig,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Something went wrong");
  }

  return response.json();
};

export default client;
