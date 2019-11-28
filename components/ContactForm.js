import React, { Component } from "react";
import "isomorphic-fetch";

import theme from "../theme/theme";

export default class ContactForm extends Component {
	state = {
		submitted: false,
		name: "",
		email: "",
		message: ""
	};

	onInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitForm = data => {
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
					<h2>Contact Me</h2>
					<form
						id="contact-form"
						onSubmit={e => {
							e.preventDefault();
							this.submitForm({
								name: this.state.name,
								email: this.state.email,
								message: this.state.message
							});
						}}
					>
						<input
							onChange={this.onInputChange}
							value={this.state.name}
							className="form-field"
							type="text"
							name="name"
							placeholder="What is your name?"
						/>
						<input
							onChange={this.onInputChange}
							value={this.state.email}
							className="form-field"
							type="email"
							name="email"
							placeholder="What is your email address?"
						/>
						<textarea
							onChange={this.onInputChange}
							value={this.state.message}
							className="form-field"
							name="message"
							cols="30"
							rows="10"
							placeholder="What would you like to talk about?"
						></textarea>
						<input className="submit-btn" type="submit" value="Send" />
					</form>
				</div>
				<style jsx>
					{`
						h2 {
							margin: 4rem 0;
							font-size: 2.5rem;
							text-align: center;
						}

						.page {
							max-width: 100vw;
							min-height: 100vh;
							background: ${theme.colors.background};
							margin: 15% 0;
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
							border-bottom: 3px solid ${theme.colors.primary.dark};
							background: inherit;
							outline: none;
						}

						#contact-form textarea.form-field {
							border-bottom: none;
							background: #b2dfdb;
						}

						#contact-form .submit-btn {
							padding: 2rem;
							max-width: 33%;
							margin-top: 1rem;
							font-size: 1.2rem;
							background: ${theme.colors.secondary.light};
							border: none;
							cursor: pointer;
							transition: background 0.2s ease-in-out;
							border-radius: 50px;
						}

						#contact-form .submit-btn:hover {
							background: ${theme.colors.secondary.main};
						}
					`}
				</style>
			</section>
		);
	}
}
