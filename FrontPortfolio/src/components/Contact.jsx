import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
