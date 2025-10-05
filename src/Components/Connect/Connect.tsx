export default function Connect() {
  return (
    <div id="contact" className="container mb-5 text-start mt-4">
      {/* First Part: Contact Information */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h3 className="mb-4">Contact Information</h3>
          <p>
            If you'd like to collaborate, have any inquiries, or just want to say
            hello, feel free to reach out to me!
          </p>
          <p>
            📩 Email me at:{" "}
            <a href="mailto:rehab-sabry@outlook.com" className="secondary-color fw-bold">
              rehab-sabry@outlook.com
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/rehab-sabry/" target="_blank" className="secondary-color fw-bold">
              LinkedIn Profile
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a href="https://github.com/rehab-sabry" target="_blank" className="secondary-color fw-bold">
              GitHub Profile
            </a>
          </p>
          
      <div>
        <button className="btn yellow-second-btn" onClick={() => window.open("https://drive.google.com/file/d/1IWAF5FYTGxqFyAq5jWg-WUaX5eoDHJRn/view?usp=sharing")}>
          View CV
        </button>
      </div>
        </div>

        {/* Second Part: Contact Form */}
        <div className="col-md-6">
          <h3 className="mb-4">Contact Form</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows={4} placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn yellow-second-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
