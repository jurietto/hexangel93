
import { renderHome } from './home.js';
import { renderForum } from './forum.js';
import { renderAbout } from './about.js';

function renderSearch() {
  document.body.innerHTML = `
    <nav>
      <a href="#" onclick="renderHome()">Home</a> |
      <a href="#" onclick="renderSearch()">Search</a> |
      <a href="#" onclick="renderForum()">Forum</a> |
      <a href="#" onclick="renderAbout()">About</a> |
    </nav>
    <main>
      <h2>Search (coming soon)</h2>
    </main>
  `;
}

export { renderSearch };
