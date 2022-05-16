import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from './partials/Footer';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Fade } from 'react-reveal';

import Navbar from './partials/Navbar';

const Contact = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		axios
			.post(`${process.env.REACT_APP_API}/contact`, data, {
				withCredentials: true,
			})
			.then((res) => {
				if (res.data.error) toast.error(res.data.error);
				if (res.data.success) toast.success(res.data.message);
			})
			.catch((err) => toast.error(err.message));
	};

	return (
		<>
			<Navbar off />

			<Fade down>
				<div className="contact">
					<div className="contact-container">
						<div className="contact-left">
							<h1 className="contact-title">İletişim</h1>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-input-flex">
									<input
										type="text"
										placeholder="Ad"
										className="form-input"
										{...register('name')}
									/>
									<input
										type="text"
										placeholder="Soyad"
										className="form-input"
										{...register('lastName')}
									/>
								</div>
								<div className="form-input-flex">
									<input
										type="email"
										placeholder="E-posta"
										className="form-input"
										{...register('email')}
									/>
								</div>
								<div className="form-input-flex">
									<textarea
										type="text"
										placeholder="Mesajınız"
										className="form-textarea"
										rows="4"
										{...register('message')}
									></textarea>
								</div>
								<button className="btn" type="submit">
									Gönder
								</button>
							</form>
						</div>
					</div>
				</div>
			</Fade>

			<Footer />
		</>
	);
};

export default Contact;
