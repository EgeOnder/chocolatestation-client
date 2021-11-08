/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PersonIcon from '@mui/icons-material/Person';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const FormDialog = ({
	open,
	setOpen,
	title,
	text,
	label,
	button,
	request,
	user,
	marker,
}) => {
	const { register, handleSubmit } = useForm();
	const [loading, setLoading] = useState();

	const onSubmit = (data) => {
		setLoading(true);
		axios
			.post(process.env.REACT_APP_API + request, data, {
				withCredentials: true,
			})
			.then((res) => {
				if (res.data.error) {
					setLoading(false);
					setOpen(false);
					toast.error(res.data.error);
				}
				if (res.data.success) {
					setLoading(false);
					setOpen(false);
					toast.success(res.data.message);
				}
			})
			.catch((err) => {
				setOpen(false);
				setLoading(false);
				toast.error(err.message);
			});
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					<DialogContentText>{text}</DialogContentText>
					{!marker ? (
						<TextField
							autoFocus
							maxRows={8}
							multiline
							margin="dense"
							label={label}
							type="text"
							fullWidth
							variant="standard"
							{...register('message')}
						/>
					) : (
						<div style={{ marginTop: '1rem' }}>
							<Button
								variant="outlined"
								color="inherit"
								startIcon={<PersonIcon />}
								fullWidth
								onClick={() => {
									window
										.open(user.profile_link, '_blank')
										.focus();
								}}
							>
								PROFİLİ Gör
							</Button>
						</div>
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} disabled={loading}>
						Vazgeç
					</Button>
					<LoadingButton loading={loading} type="submit">
						{button}
					</LoadingButton>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default FormDialog;
