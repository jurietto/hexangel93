
import { renderFeed } from './feed.js';
import { renderForum } from './forum.js';
import { renderSearch } from './search.js';
import { renderHome } from './home.js';
import { renderAbout } from './about.js';

export const posts = [];

window.addEventListener("DOMContentLoaded", () => {
  const interval = setInterval(async () => {
    if (window.Clerk) {
      clearInterval(interval);

      await window.Clerk.load();
      const user = window.Clerk.user;

      if (user) {
        renderFeed(user);
      } else {
        renderHome();
      }

      document.body.addEventListener("submit", (e) => {
        if (e.target.matches("#post-form")) {
          e.preventDefault();
          const textarea = document.querySelector("#post-text");
          const content = textarea.value.trim();
          if (content) {
            posts.unshift({
              content,
              time: new Date().toLocaleString(),
            });
            textarea.value = "";
            renderFeed(user);
          }
        }
      });
    }
  }, 50);
});
