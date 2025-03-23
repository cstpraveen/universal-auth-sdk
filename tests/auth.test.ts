import { authenticateOAuth } from "../src/providers/oauth";

test("OAuth authentication redirects correctly", () => {
  global.window = { location: { href: "" } };
  authenticateOAuth("https://provider.com/oauth", "client-id", "http://localhost:3000");
  expect(global.window.location.href).toContain("https://provider.com/oauth");
});