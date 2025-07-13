import { Clerk } from '@clerk/clerk-js';

const clerk = new Clerk(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY, {
  // Uncomment and set this if using custom frontend API domain
  // frontendApi: 'your-frontend-api.clerk.accounts.dev',
});

window.addEventListener('DOMContentLoaded', async () => {
  try {
    await clerk.load();

    if (!clerk.user) {
      await clerk.redirectToSignIn();
      return;
    }

    const userInfoContainer = document.getElementById('user-info');
    if (userInfoContainer) {
      clerk.mountUserButton(userInfoContainer);
    } else {
      console.warn('User container not found');
    }

    // Show protected content
    document.getElementById('auth-content').style.display = 'none';
    document.getElementById('feed-content').style.display = 'block';

  } catch (error) {
    console.error('Clerk failed to initialize:', error);
    document.body.innerHTML = `<p style="color:white;text-align:center;">Authentication error. Please refresh.</p>`;
  } finally {
    // Ensure visibility to prevent black screen
    document.body.style.visibility = 'visible';
  }
});


