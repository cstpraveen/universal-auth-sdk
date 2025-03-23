export const authenticateOAuth = async (provider: string, clientId: string, redirectUri: string) => {
    const authUrl = `${provider}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;
    window.location.href = authUrl;
};