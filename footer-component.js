class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="py-5 mt-5 footer-dark">
        <div class="container text-center text-light">
          <h5 class="fw-bold mb-2 footer-title">keshpianomusic</h5>
          <p class="mb-4">kesh@keshpianomusic.com</p>
          <div class="mb-2">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <div class="small text-secondary">Copyright &copy; <span id="copyright-year"></span> keshpianomusic. All rights reserved.</div>
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