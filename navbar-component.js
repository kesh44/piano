class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-sm navbar-light px-3">
        <a class="navbar-brand d-flex align-items-center" href="/">
          <img src="pp.jpg" alt="Logo" width="40" height="40" class="rounded-circle me-3">
          <span class="kpm">keshpianomusic</span>
        </a>
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span>
            <i class="bi bi-list navbar-toggle-icon"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav ms-auto flex-row flex-lg-row align-items-center">
            <li class="nav-item mx-2 d-flex align-items-center"><a class="nav-link" href="midi">MIDI</a></li>
            <li class="nav-item mx-2 d-flex align-items-center"><a class="nav-link" href="learn">Learn</a></li>
            <li class="nav-item mx-2 d-flex align-items-center">
              <a class="nav-link mt-1" href="https://youtube.com/@keshpianomusic" target="_blank" title="YouTube">
                <i class="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

// Register the custom element
customElements.define('navbar-component', NavbarComponent); 