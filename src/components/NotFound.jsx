import React from 'react';
import { useHistory } from 'react-router-dom';

import Footer from './partials/Footer';
import Navbar from './partials/Navbar';

const NotFound = () => {
	const history = useHistory();

	return (
		<>
			<Navbar />

			<header className="header">
				<div className="notfound-container">
					<h1 style={{ marginBottom: '2rem' }}>
						Aradığın sayfayı bulamadık!
					</h1>
					<button className="btn" onClick={() => history.push('/')}>
						Ana Sayfaya Dön
					</button>
				</div>
			</header>

			<Footer />
		</>
	);
};

export default NotFound;
