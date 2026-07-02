import React from 'react';
import { Link } from '@tanstack/react-router';
function Header() {
  return (
    <header className="header">
      <div className="header-logo">[Osama]</div>
      <div className="header-right-section">
        <nav className="header-nav">
          <Link to="/">HOME</Link>
          <Link to="/blog">BLOG</Link>
          <Link
            to="/"
            hash="contact"
            onClick={() => {
              const contactSection = document.getElementById('contact');

              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
