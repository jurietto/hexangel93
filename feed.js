
import { posts } from './main.js';

function renderFeed(user) {
  document.body.innerHTML = `
    <nav>
      <a href="#" onclick="renderHome()">Home</a> |
      <a href="#" onclick="renderSearch()">Search</a> |
      <a href="#" onclick="renderForum()">Forum</a> |
      <a href="#" onclick="renderAbout()">About</a> |
      <span id="user-button"></span>
    </nav>
    <main>
      <h2>post something...</h2>
      <form id="post-form">
        <textarea id="post-text" placeholder="write here..."></textarea>
        <div>
          <button type="submit">Post</button>
        </div>
      </form>
      <section id="feed"></section>
    </main>
    <footer>site created July 2025</footer>
  `;

  if (window.Clerk) {
    Clerk.mountUserButton(document.getElementById("user-button"));
  }

  const feed = document.getElementById("feed");
  posts.forEach(({ content, time }) => {
    const post = document.createElement("div");
    post.innerHTML = `<p>${content}</p><small>Posted at ${time}</small><hr>`;
    feed.appendChild(post);
  });
}

export { renderFeed };
