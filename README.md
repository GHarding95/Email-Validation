# Email-Validation
Test for valid email addresses using set constraints below, made with HTML, CSS & Vanilla JS.

Email is split into its local and domain parts to perform the following checks:

// Check if the local and domain names are non-empty
// Check the local name does not start with a '+' character
// Check if the email is not too long (< 100)
// Check if the domain ends with one of the allowed suffixes (.com, .co.uk, .org, .mail & .gov
// Check if the domain has at least one character before the suffix (this means there must be at least one text character after the @ symbol and before any of the allowed suffixes so that example@.com is not validated)

Valid email addresses are confirmed with a pop up message and are then logged in the console as a JSON object