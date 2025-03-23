export const setToken = (token: string): void => {
  localStorage.setItem("auth-token", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("auth-token");
};

export const removeToken = (): void => {
  localStorage.removeItem("auth-token");
};
