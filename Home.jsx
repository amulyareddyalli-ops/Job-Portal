import "../../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">
  💼 HIRE HUB
</h1>

        <div className="auth">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="overlay">
          <h1>Let's Find Your Future Job!</h1>
          <p>Connecting Job Seekers & Employers</p>

          <div className="search">
            <input placeholder="Location, City" />
            <input placeholder="Expected Salary" />
            <label className="file-input">
  <span>Upload Resume</span>
  <input 
    type="file" 
    accept=".pdf,.doc,.docx"
    onChange={(e) => console.log(e.target.files[0])}
  />
</label>
            <button>Find Job</button>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Job Categories</h2>

        <div className="grid">
          <div className="card">Accounting</div>
          <div className="card">Game Development</div>
          <div className="card">Marketing</div>
          <div className="card">IT Support</div>
          <div className="card">Software Development</div>
          <div className="card">Web Development</div>
          <div className="card">Data Analytics</div>
          <div className="card">UI/UX Design</div>
        </div>
      </section>

      <section className="features">
        <h2>Platform Features</h2>

        <div className="grid">
          <div className="card">
            <h3>Job Seekers</h3>
            <p>Create profile & apply for jobs online.</p>
          </div>

          <div className="card">
            <h3>Employers</h3>
            <p>Post jobs and manage applicants.</p>
          </div>

          <div className="card">
            <h3>Resume Upload</h3>
            <p>Upload resumes easily.</p>
          </div>

          <div className="card">
            <h3>Admin Control</h3>
            <p>Monitor job listings.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>

        <div className="contact-box">
          <input placeholder="Enter your email" />
          <button>Request</button>
        </div>

        <p>support@hirehub.com</p>
        <p>+91 6304141919</p>
      </section>

      <footer className="footer">
        <h3>HIRE HUB Inc.</h3>
        <p>© 2026 Hire Hub</p>
      </footer>
    </div>
  );
}

export default Home;
