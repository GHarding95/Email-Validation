import React, { useState } from 'react'

function ValidationForm() {

  const [email, setEmail] = useState('')
  const [result, setResult] = useState('')

  // Updates the email state variable with the current value of the input field
  function handleChange(event) {
    setEmail(event.target.value)
  }

  // Prevents the default refresh behavior of the form submission and calls the email validation function
  function handleSubmit(event) {
    event.preventDefault()

    // Split the email into its local and domain parts
    const parts = email.split('@')
    if (parts.length !== 2) {
      setResult("Invalid email: must contain exactly one '@' character.")
      return
    }
    const local = parts[0]
    const domain = parts[1]

    // Check if the local and domain names are non-empty
    if (local.length === 0 || domain.length === 0) {
      setResult("Invalid email: local and domain names must be non-empty.")
      return
    }

    // Check the local name does not start with a '+' character
    if (local[0] === '+') {
      setResult("Invalid email: cannot start with a '+' character.")
      return
    }

    // Check if the email is too long
    if (email.length > 100) {
      setResult("Invalid email: cannot be longer than 100 characters.")
      return
    }

    // Check if the domain ends with one of the allowed suffixes
    if (
      !domain.endsWith('.com') &&
      !domain.endsWith('.co.uk') &&
      !domain.endsWith('.org') &&
      !domain.endsWith('.mail') &&
      !domain.endsWith('.gov')
    ) {
      setResult("Invalid email: domain must end with .com, .co.uk, .org, .mail, or .gov")
      return
    }

  // Check if the domain has at least one character before the suffix
  let domainWithoutSuffix = domain
  if (domain.endsWith('.com')) {
    domainWithoutSuffix = domain.slice(0, -4)
  } else if (domain.endsWith('.co.uk')) {
    domainWithoutSuffix = domain.slice(0, -6)
  } else if (domain.endsWith('.org')) {
    domainWithoutSuffix = domain.slice(0, -4)
  } else if (domain.endsWith('.mail')) {
    domainWithoutSuffix = domain.slice(0, -5)
  } else if (domain.endsWith('.gov')) {
    domainWithoutSuffix = domain.slice(0, -4)
  } else {
    domainWithoutSuffix = domain
  }
  if (domainWithoutSuffix.length === 0) {
    setResult("Invalid email: domain must have at least one character before the suffix.")
    return
  }
  
  // If all checks pass, set the result to "Valid email!"
  setResult("Valid email!")
  console.log(`Valid email: ${email}`)

  }

  return (
    <div>
      <h1>Email Validation</h1>
      <p>Enter an email address:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input id='email' type="text" value={email} onChange={handleChange} />
          </label>
          <button type="submit">Validate</button>
          <div id="result">{result}</div>
        </form>
    </div>
  )
}

export default ValidationForm