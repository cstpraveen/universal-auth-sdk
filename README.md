# Universal Auth SDK

A universal authentication SDK for React applications that simplifies OAuth, OpenID, SAML, and other authentication strategies.

## Feature Requests
Have a feature request? I'm listening! Please open an issue on GitHub using the following link, and I'll do my best to implement it within a day.

[Raise a Feature Request](https://github.com/cstpraveen/universal-auth-sdk/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=Feature+Request:+)


## Installation

You can install the package using npm:

```sh
npm install universal-auth-sdk
```

Or using yarn:

```sh
yarn add universal-auth-sdk
```

## Usage

### **1. Wrap Your App with `AuthProvider`**

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "universal-auth-sdk";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
```

### **2. Login and Logout Buttons**

Use `LoginButton` and `LogoutButton` to trigger authentication actions.

```tsx
import React from "react";
import { LoginButton, LogoutButton } from "universal-auth-sdk";

const AuthButtons = () => {
  return (
    <div>
      <LoginButton provider="google" />
      <LogoutButton />
    </div>
  );
};

export default AuthButtons;
```

### **3. Access Authentication Data with `useAuth` Hook**

```tsx
import React from "react";
import { useAuth } from "universal-auth-sdk";

const UserProfile = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login("google")}>Login with Google</button>
      )}
    </div>
  );
};

export default UserProfile;
```

## **Available Authentication Providers**

- Google
- Facebook
- GitHub
- Twitter
- Custom OAuth2

## **Configuration**

You can configure your authentication providers by adding environment variables:

```sh
REACT_APP_AUTH_GOOGLE_CLIENT_ID=your-google-client-id
REACT_APP_AUTH_GITHUB_CLIENT_ID=your-github-client-id
REACT_APP_AUTH_CALLBACK_URL=http://localhost:3000/auth/callback
```

## **Contributing**

1. Fork the repo
2. Create a new branch (`feature/new-auth-method`)
3. Commit your changes
4. Push to your branch and submit a pull request

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
