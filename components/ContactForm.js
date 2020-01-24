import React, { Component } from "react";
import "isomorphic-fetch";

import theme from "../theme/theme";

export default class ContactForm extends Component {
	state = {
		submitted: false,
		name: "",
		email: "",
		message: "",
		subject: ""
	};

	onInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitForm = data => {
		if (this.state.subject) {
			this.setState({ name: "", email: "", message: "", subject: "" });
			return;
		}
		fetch("/api/contact", {
			method: "post",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => {
			res.status === 200 ? this.setState({ submitted: true }) : "";
		});
	};

	render() {
		return (
			<section id="contact" className="page">
				<div className="container">
					<h2>CONTACT</h2>
					<form
						id="contact-form"
						onSubmit={e => {
							e.preventDefault();
							this.onSubmitForm({
								name: this.state.name,
								email: this.state.email,
								message: this.state.message
							});
							this.setState({ name: "", email: "", message: "", subject: "" });
						}}
					>
						<input
							onChange={this.onInputChange}
							value={this.state.name}
							className="form-field"
							type="text"
							name="name"
							placeholder="What is your name?"
							required
						/>
						<input
							onChange={this.onInputChange}
							value={this.state.email}
							className="form-field"
							type="email"
							name="email"
							placeholder="What is your email address?"
							required
						/>
						<input
							onChange={this.onInputChange}
							value={this.state.subject}
							type="text"
							name="subject"
							placeholder="Subject"
							className="sub"
							autoComplete="off"
						/>
						<textarea
							onChange={this.onInputChange}
							value={this.state.message}
							className="form-field"
							name="message"
							cols="30"
							rows="10"
							placeholder="What would you like to talk about?"
							required
						></textarea>
						<input className="submit-btn" type="submit" value="Send" />
					</form>
				</div>
				<style jsx>
					{`
						h2 {
							margin: 4rem 0 6rem 0;
							font-size: 5rem;
						}

						.page {
							max-width: 100vw;
							min-height: 100vh;
							background: ${theme.colors.background};
							margin: 15% 0;
						}

						.sub {
							opacity: 0;
							position: absolute;
							top: 0;
							left: 0;
							height: 0;
							width: 0;
							z-index: -100;
						}

						#contact .container {
							display: flex;
							flex-direction: column;
							height: 100%;
						}

						#contact-form {
							align-self: center;
							display: flex;
							flex-direction: column;
							margin-top: auto;
						}

						#contact-form .form-field {
							min-width: 800px;
							margin: 1.5rem 0;
							padding-bottom: 0.5rem;
							font-size: 1.2rem;
							border: none;
							border-bottom: 3px solid ${theme.colors.light};
							background: inherit;
							outline: none;
							color: ${theme.colors.light};
						}

						#contact-form .form-field:focus {
							border-bottom: 3px solid ${theme.colors.primary.light};
						}

						#contact-form textarea.form-field {
							background: ${theme.colors.light};
							color: ${theme.colors.dark};
						}

						#contact-form .submit-btn {
							padding: 1.5rem;
							max-width: 33%;
							margin-top: 1rem;
							font-size: 1.2rem;
							background: ${theme.colors.light};
							border: none;
							cursor: pointer;
							transition: background 0.2s ease-in-out;
							border-radius: 50px;
						}

						#contact-form .submit-btn:hover {
							background: ${theme.colors.primary.light};
						}
					`}
				</style>
			</section>
		);
	}
}
