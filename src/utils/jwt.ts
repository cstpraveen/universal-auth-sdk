import jwtDecode from "jsonwebtoken";

export const decodeToken = (token) => {
  return jwtDecode(token);
};
