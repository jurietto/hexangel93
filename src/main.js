import { Clerk } from '@clerk/clerk-js';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const clerk = new Clerk(clerkPubKey);

await clerk.load();

if (clerk.user) {
  document.getElementById('app').innerHTML = `<div id="user-button"></div>`;
  clerk.mountUserButton(document.getElementById('user-button'));
} else {
  document.getElementById('app').innerHTML = `<div id="sign-in"></div>`;
  clerk.mountSignIn(document.getElementById('sign-in'));
}
