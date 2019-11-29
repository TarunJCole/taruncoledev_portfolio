const nodemailer = require("nodemailer");

const source = require("./source");

const transporter = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		type: "OAuth2",
		user: source.user,
		refreshToken: source.refreshToken,
		accessToken: source.accessToken,
		clientId: source.clientId,
		clientSecret: source.clientSecret
	}
});

const send = ({ email, name, text }) => {
	const from = name && email ? `${name} <${email}>` : `${name || email}`;
	text = `<${email}>: ${text}`;
	const mail = {
		from,
		to: "TarunJCole@gmail.com",
		subject: "CONTACT FORM MESSAGE",
		text,
		replyTo: from
	};

	return new Promise((resolve, reject) => {
		transporter.sendMail(mail, (error, info) => {
			error ? reject(error) : resolve(info);
		});
	});
};

module.exports = send;
