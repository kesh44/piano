class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="py-5 footer-dark">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-4">
              <h5 class="fw-bold mb-1 footer-title">keshpianomusic</h5>
              <p class="mb-0 text-secondary">kesh@keshpianomusic.com</p>
            </div>
            <div class="col-md-4 text-center">
              <div class="footer-links">
                <a href="#" class="text-decoration-none link-light me-3">Privacy Policy</a>
                <a href="#" class="text-decoration-none link-light">Terms of Use</a>
              </div>
            </div>
            <div class="col-md-4 text-end">
              <div class="small text-secondary">
                Copyright &copy; <span id="copyright-year"></span> keshpianomusic.<br>
                All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
    
    // Set the copyright year after the component is rendered
    const copyrightElement = this.querySelector('#copyright-year');
    if (copyrightElement) {
      copyrightElement.textContent = new Date().getFullYear();
    }
  }
}

// Register the custom element
customElements.define('footer-component', FooterComponent); 