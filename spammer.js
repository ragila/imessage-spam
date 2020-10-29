const { exec } = require('child_process');

const timeout = 9999999;

function sendMessage(recipient) {
	return message => {
		return new Promise(resolve => {
			exec(`osascript -e 'tell application \"Messages\" to send "${message}" to buddy "${recipient}"'`,
				{ timeout },
				() => resolve());
		});
	};
}

async function spam(recipient, message) {
	const send = sendMessage(recipient);
	const messages = message.split('\n').filter(x => x);

	for (let i = 0; i < messages.length; i++) {
		await send(messages[i]);
	}
}

module.exports = spam;
