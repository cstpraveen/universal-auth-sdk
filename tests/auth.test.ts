import { authenticateOAuth } from "../src/providers/oauth";

test("OAuth authentication redirects correctly", () => {
  // Properly mock window.location.href
  Object.defineProperty(window, "location", {
    writable: true,
    value: { href: "" },
  });

  authenticateOAuth("https://provider.com/oauth", "client-id", "http://localhost:3000");

  expect(window.location.href).toContain("https://provider.com/oauth");
});
