export default function Footer() {
  return (
    <footer className="text-center container-fluid border-top">
      <div className="text-center mt-5">
        <img
          src="./images/website_logo.png"
          alt="RS Logo"
          className="footer-logo"
        />
      </div>
      <div className="social-media d-flex justify-content-center gap-3 align-items-center">
        <a
          className="link-hover"
          target="_blank"
          href="https://www.linkedin.com/in/rehab-sabry-08a864275/"
        >
          <i className="fa-brands fa-linkedin fa-lg me-2"></i>
          LinkedIn
        </a>
        <a
          className="link-hover"
          target="_blank"
          href="https://github.com/RehabSabryy"
        >
          <i className="fa-brands fa-github fa-lg me-2"></i>
          GitHub
        </a>
        <a
          className="link-hover"
          target="_blank"
          href="https://www.behance.net/rehabsabryy"
        >
          <i className="fa-brands fa-behance fa-lg me-2"></i>
          Behance
        </a>
      </div>
      <div className="text-center p-4">
        <p className="text-reset">©2025 Rehab Sabry. All rights reserved.</p>
      </div>
    </footer>
  );
}
