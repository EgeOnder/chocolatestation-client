import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useHistory, Redirect } from 'react-router-dom';

import {
	TextField,
	InputAdornment,
	Typography,
	FormControl,
	Paper,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKey from '@mui/icons-material/VpnKey';

// eslint-disable-next-line react/prop-types
const Home = ({ user }) => {
	const { register, handleSubmit } = useForm();
	const [loading, setLoading] = useState();

	const history = useHistory();

	const onSubmit = (data) => {
		setLoading(true);
		axios
			.post(process.env.REACT_APP_API + '/auth/login', data, {
				withCredentials: true,
			})
			.then((res) => {
				if (res.data.error) {
					setLoading(false);
					toast.error(res.data.error);
				}
				if (res.data.success) {
					setLoading(false);
					toast.success(res.data.message);
					history.push('/', {
						success: true,
						message: res.data.message,
					});
				}
			})
			.catch((err) => {
				setLoading(false);
				toast.error(err.message);
			});
	};

	if (Object.values(user).length == 0)
		return (
			<div className="container">
				<img
					src={process.env.REACT_APP_API + '/public/logo/logo.svg'}
					alt="logo"
					style={{ width: 100, marginBottom: '2rem' }}
				/>
				<Paper elevation={4} className="paper">
					<Typography variant="h4" style={{ marginBottom: '2rem' }}>
						Admin Giriş
					</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormControl variant="standard">
							<TextField
								label="Kullanıcı Adı"
								style={{ marginBottom: '2rem' }}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									),
								}}
								variant="outlined"
								{...register('username')}
							/>
							<TextField
								label="Şifre"
								style={{ marginBottom: '2rem' }}
								type="password"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<VpnKey />
										</InputAdornment>
									),
								}}
								variant="outlined"
								{...register('password')}
							/>
							<LoadingButton
								loading={loading}
								variant="contained"
								type="submit"
							>
								GİRİŞ YAP
							</LoadingButton>
						</FormControl>
					</form>
				</Paper>
				<p style={{ marginTop: '2rem', fontSize: 10 }}>
					Copyright &copy;{' '}
					<span
						className="clickable"
						onClick={() =>
							window.open('https://github.com/EgeOnder')
						}
					>
						Ege Önder
					</span>
					. All rights reserved.
				</p>
			</div>
		);
	else
		return (
			<Redirect
				to={{
					pathname: '/',
					state: { user: user },
				}}
			/>
		);
};

export default Home;
