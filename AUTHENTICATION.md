# Firebase Authentication Setup

This project uses Firebase Authentication (client-side) with the following features:

- Email/password sign up and sign in
- Google sign-in

Files added/updated:

- `src/services/firebaseAuth.ts` — helper functions for Firebase auth operations.
- `src/context/AuthContext.tsx` — React context exposing `user`, `claims`, `loading`, and auth methods (`signUp`, `signIn`, `signInWithGoogle`, `signOut`, `sendPasswordReset`).
- `src/components/ProtectedRoute.tsx` — now uses `AuthContext` to protect routes.
- `src/pages/auth/Login.tsx` and `src/pages/auth/Register.tsx` — simple UI pages demonstrating sign-in and sign-up flows.

Quick setup

1. Create a Firebase project at https://console.firebase.google.com
2. In your project, enable **Authentication** > **Sign-in method** for **Email/Password** and **Google**.
3. Add a Web app in Firebase and copy the config values.
4. Create a `.env` or `.env.local` file at the project root and add the following variables:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
```

5. Restart the dev server (Vite) if already running.

Notes

- `AuthContext` listens to Firebase auth state changes and keeps `user` and token `claims` up to date.
- The provided `Login` and `Register` pages are minimal; integrate them into your routing (for example: `/auth/login`, `/auth/register`).
- If your backend requires verifying Firebase ID tokens, call `getIdToken()` from the client or send the ID token to your server and verify it using the Firebase Admin SDK.

Next steps (optional)

- Add account management pages (profile, change password).
- Link user creation to your backend (create a user document in Firestore when a user signs up).
- Add proper UI feedback and loading states for better UX.
