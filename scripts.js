function testEmail() {
    const email = document.getElementById("email").value;
    
    // Split the email into its local and domain parts
    const parts = email.split('@');
    if (parts.length !== 2) {
      document.getElementById("result").innerHTML = "Invalid email: must contain exactly one '@' character.";
      return;
    }
    const local = parts[0];
    const domain = parts[1];

    // Check if the local and domain names are non-empty
    if (local.length === 0 || domain.length === 0) {
      document.getElementById("result").innerHTML = "Invalid email: local and domain names must be non-empty.";
      return;
    }

    // Check the local name does not start with a '+' character
    if (local[0] === '+') {
      document.getElementById("result").innerHTML = "Invalid email: cannot start with a '+' character.";
      return;
    }

    // Check if the email is not too long
    if (email.length > 100) {
      document.getElementById("result").innerHTML = "Invalid email: cannot be longer than 100 characters.";
      return;
    }
    
    // Check if the domain ends with one of the allowed suffixes
    if (!domain.endsWith('.com') && !domain.endsWith('.co.uk') && !domain.endsWith('.org') && !domain.endsWith('.mail') && !domain.endsWith('.gov')) {
      document.getElementById("result").innerHTML = "Invalid email: domain must end with .com, .co.uk, .org, .mail, or .gov";
      return;
    }

    // Check if the domain has at least one character before the suffix
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
      document.getElementById("result").innerHTML = "Invalid email: domain must have at least one character before the suffix.";
      return;
    }
    
    document.getElementById("result").innerHTML = "Valid email!";

    console.log(JSON.stringify({ email: email }));
  }