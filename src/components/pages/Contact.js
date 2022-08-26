import React, { useState } from 'react';


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    } else if (!name) {
      setErrorMessage('Please enter your name.');
      return;
    } else if (!message) {
      setErrorMessage('Looks like you forgot to type a message ;)');
      return;
    } else {
      alert(`Terribly sorry ${name}, but the form isn't working. Please feel free to send me an email using the address on my resume.`);
    }

    setName('');
    setMessage('');
    setEmail('');

  };

  return (
    <>
      <h1>Contact</h1>
      <p>
        This form is in development.<br />Please send me an email using the address at the top of my resume.
      </p>
      <form className="contactForm">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="errormsg">{errorMessage}</p>
        </div>
      )}
    </>
  );
}