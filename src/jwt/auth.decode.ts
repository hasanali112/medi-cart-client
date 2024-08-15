import { jwtDecode } from "jwt-decode";

export const decodeAccessToken = (token: string) => {
  return jwtDecode(token);
};
