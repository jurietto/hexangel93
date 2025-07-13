import { Clerk } from '@clerk/clerk-js';

const clerk = new Clerk(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

await clerk.load();

if (!clerk.user) {
  // Redirect to sign in if not logged in
  window.location.href = '/';
} else {
  const container = document.getElementById('user-info');
  clerk.mountUserButton(container);
}
