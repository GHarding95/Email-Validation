# Email Validation

Email validation tool created with React JS, used to test for valid email addresses. 

Splits email into local and domain parts then performs the following checks:

Check if the local and domain names are non-empty
Check the local name does not start with a '+' character
Check if the email is too long (max 100 chars)
Check if the domain ends with one of the allowed suffixes: .com / .co.uk / .org / .mail / .gov
Check if the domain has at least one character before the suffix

If all checks pass, set the result to "Valid email!"

# Getting Started

npm install

# To Run

npm start
