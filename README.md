# iMessage Spammer

Spam a contact from any MacOS device using the Messages app.

Note: this is a NodeJS app and will not run in the browser (it requires `child_process` to run).

### How it works
Spammer will take a string of text, break it into individual messages (one message per break line (`\n`) in the string).

Spammer takes care to maximise annoyance to the contact you wish to prank by ensuring the messages are sent consecutively and that each message is delivered. As such, a long piece of text, such as the script for Lord of the Rings: Return of the King, resulted in just under 5000 messages sent over approximately 15 minutes.

### Usage
1. Open `Messages` in mac os apps
2. Ensure the contact is in the list of previous messages on the left (if not, send a new message to the contact you wish to spam)
3. Create a new JS file
4. Find a long piece of text, preferably a movie script as it contains lots of text on different lines
5. Call `spammer` with the first argument being the contact you wish to spam and the second being the text to spam them with
6. Run your script from the command line
