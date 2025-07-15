
function renderForum() {
  document.body.innerHTML = `
    <nav>
      <a href="#" onclick="renderHome()">Home</a> |
      <a href="#" onclick="renderSearch()">Search</a> |
      <a href="#" onclick="renderForum()">Forum</a> |
      <a href="#" onclick="renderAbout()">About</a> |
      <span id="user-button"></span>
    </nav>
    <main>
      <h2>Forum (coming soon)</h2>
    </main>
    <footer>site created July 2025</footer>
  `;

  if (window.Clerk) {
    Clerk.mountUserButton(document.getElementById("user-button"));
  }
}

export { renderForum };
