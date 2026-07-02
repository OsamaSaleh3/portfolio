import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">CONTACT_ME</h2>
      <h4 style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>
        osamasaadeh170@gmail.com
      </h4>
    </section>

    // <section id="contact" className="contact-section">
    //   <h2 className="section-title">CONTACT_ME</h2>

    //   <div className="contact-container">
    //     <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
    //       <div className="form-group">
    //         <label htmlFor="name">[ Name ]</label>
    //         <input
    //           type="text"
    //           id="name"
    //           placeholder="ENTER YOUR NAME..."
    //           required
    //         />
    //       </div>

    //       <div className="form-group">
    //         <label htmlFor="email">[ Email ]</label>
    //         <input
    //           type="email"
    //           id="email"
    //           placeholder="ENTER YOUR EMAIL..."
    //           required
    //         />
    //       </div>

    //       <div className="form-group">
    //         <label htmlFor="message">[ Message ]</label>
    //         <textarea
    //           id="message"
    //           rows="5"
    //           placeholder="TYPE YOUR MESSAGE HERE..."
    //           required
    //         ></textarea>
    //       </div>

    //       <button type="submit" className="submit-btn">
    //         SEND_MESSAGE()
    //       </button>
    //     </form>
    //   </div>
    // </section>
  );
}

export default Contact;
