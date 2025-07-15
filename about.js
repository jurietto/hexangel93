
export function renderAbout() {
  document.body.innerHTML = `
    <nav>
      <a href="#" onclick="renderHome()">Home</a> |
      <a href="#" onclick="renderSearch()">Search</a> |
      <a href="#" onclick="renderForum()">Forum</a> |
      <a href="#" onclick="renderAbout()">About</a> |
      <span id="user-button"></span>
    </nav>
    <main>
      <h1>About hexangel93</h1>
      <p>This site was created as a social platform for vampires and creatures of the night.</p>
      <p>Built with love and blood in July 2025.</p>
    </main>
    <footer>site created July 2025</footer>
  `;

  if (window.Clerk) {
    Clerk.mountUserButton(document.getElementById("user-button"));
  }
}
