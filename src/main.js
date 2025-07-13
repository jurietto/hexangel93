import { Clerk } from '@clerk/clerk-js';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const clerk = new Clerk(clerkPubKey);

await clerk.load();

// Redirect logic
if (clerk.user) {
  window.location.href = "/feed";
} else {
  await clerk.redirectToSignIn({ redirectUrl: "/feed" });
}
