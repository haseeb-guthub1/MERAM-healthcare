// src/api/auth.ts
import client from "./client";
import { getCSRFToken } from "../utils/csrf";

interface LoginResponse {
  access: string;   // ✅ not token
  refresh: string;
}

const csrfToken = getCSRFToken();
export const register = async (data: {
  username:string
  name: string;
  email: string;
  password: string;
  role: "patient" | "doctor";
  phone: string;
  dateOfBirth: string;
}) => {
  
  return client("/accounts/register/", {
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken || "",
    },
    method: "POST",
    body: data,
  
  });
};
export const login = async (data: { username: string; password: string }) => {
  return client("/auth/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCSRFToken() || "",
    },
    body: data,
    csrf: true,
  }) as Promise<LoginResponse>;
};

export const getUserById = async (id: string) => {
  return client(`/accounts/${id}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default login;register;getUserById