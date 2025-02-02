import React, { useState } from 'react';

function ValidationForm() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const parts = email.split('@');
    if (parts.length !== 2) {
      setResult("Invalid email: must contain exactly one '@' character.");
      return;
    }
    const local = parts[0];
    const domain = parts[1];

    if (local.length === 0 || domain.length === 0) {
      setResult("Invalid email: local and domain names must be non-empty.");
      return;
    }

    if (local[0] === '+') {
      setResult("Invalid email: cannot start with a '+' character.");
      return;
    }

    if (email.length > 100) {
      setResult("Invalid email: cannot be longer than 100 characters.");
      return;
    }

    if (
      !domain.endsWith('.com') &&
      !domain.endsWith('.co.uk') &&
      !domain.endsWith('.org') &&
      !domain.endsWith('.mail') &&
      !domain.endsWith('.gov')
    ) {
      setResult("Invalid email: domain must end with .com, .co.uk, .org, .mail, or .gov");
      return;
    }

    let domainWithoutSuffix = domain;
    if (domain.endsWith('.com')) {
      domainWithoutSuffix = domain.slice(0, -4);
    } else if (domain.endsWith('.co.uk')) {
      domainWithoutSuffix = domain.slice(0, -6);
    } else if (domain.endsWith('.org')) {
      domainWithoutSuffix = domain.slice(0, -4);
    } else if (domain.endsWith('.mail')) {
      domainWithoutSuffix = domain.slice(0, -5);
    } else if (domain.endsWith('.gov')) {
      domainWithoutSuffix = domain.slice(0, -4);
    } else {
      domainWithoutSuffix = domain;
    }
    if (domainWithoutSuffix.length === 0) {
      setResult("Invalid email: domain must have at least one character before the suffix.");
      return;
    }

    setResult("Valid email!");
    setIsModalOpen(true); // Open the modal for valid email
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="container">
      <h1>Email Validation</h1>
      <p>Enter an email address to validate:</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleChange}
            placeholder="example@domain.com"
          />
        </div>
        <button type="submit">Validate</button>
      </form>
      {result.startsWith("Invalid") && (
        <div id="result" className="invalid">
          {result}
        </div>
      )}

      {/* Modal for valid email */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>✅ Valid Email!</h2>
            <p>The email address <strong>{email}</strong> is valid.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ValidationForm;