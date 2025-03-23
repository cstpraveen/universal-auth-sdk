export const authenticateOpenID = async (issuer: string, clientId: string, redirectUri: string) => {
    const authUrl = `${issuer}/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
    window.location.href = authUrl;
};
  