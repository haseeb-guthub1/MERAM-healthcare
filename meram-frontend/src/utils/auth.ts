import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  user_id: string;
  username?: string; // only if added to JWT payload
  exp: number;
}

export const getUserFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode<DecodedToken>(token);
    // return decoded;
    return decoded.user_id;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
