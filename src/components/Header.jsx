import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">[Osama]</div>
      <div className="header-right-section">
        <nav className="header-nav">
          <a href="#Home">HOME</a>
          <a href="#projects">BLOG</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
