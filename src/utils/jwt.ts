import jwt from "jsonwebtoken";

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};
