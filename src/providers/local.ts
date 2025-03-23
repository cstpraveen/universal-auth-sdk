export const authenticateLocal = async (username: string, password: string) => {
    return { token: "mock-token", user: { username } };
};