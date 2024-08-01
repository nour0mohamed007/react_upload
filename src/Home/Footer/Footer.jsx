import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Styles from "../Footer/Footer.module.css";

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage , setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_ncy1z2p', 
      'template_wednj04', 
      {
        email, 
        message, 
      },
      'UzmMuRcaVBGTwjo8v' 
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccessMessage('Subscription successful!');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setSuccessMessage('An error occurred. Please try again.');
    });
  };

  return (
    <>
      <div className={Styles.footer} id="Contact">
        <div className={Styles.footerHeading}>
          <h2>Subscribe To Our Newsletter</h2>
        </div>
        <div className={Styles.container}>
          <div className={Styles.footerContent}>
          {successMessage && <p className={Styles.successMessage}>{successMessage}</p>}
            <input
              className={Styles.inp}
              type="text"
              placeholder="Enter Your Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className={Styles.inp}
              placeholder="Enter Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className={Styles.btn} onClick={handleSubmit}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className={Styles.secondFooterContent}>
        <p>Made With ❤️ By Nour</p>
      </div>
    </>
  );
}

export default Footer;
