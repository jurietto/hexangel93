
import { renderSearch } from './search.js';
import { renderForum } from './forum.js';
import { renderAbout } from './about.js';

function renderHome() {
  document.body.innerHTML = `
    <nav>
      <a href="#" onclick="renderSearch()">Search</a> |
      <a href="#">Recent Activity</a> |
      <a href="#" onclick="renderForum()">Forum</a> |
      <a href="#" onclick="renderAbout()">About</a> |
      <a href="#" onclick="window.Clerk.redirectToSignUp({ redirectUrl: '/' })">Sign Up</a>
    </nav>
    <main>
      <h1>Welcome to hexangel93.com</h1>
      <img src="./ghost.gif" alt="ghost" />
      <div>
        <button id="login">Log in</button>
      </div>
    </main>
  `;

  document.getElementById("login").addEventListener("click", () => {
    window.Clerk.redirectToSignIn({ redirectUrl: "/" });
  });
}

export { renderHome };
