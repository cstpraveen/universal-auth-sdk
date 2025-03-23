export const authenticateSAML = async (ssoUrl: string) => {
    window.location.href = ssoUrl;
};