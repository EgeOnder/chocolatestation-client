import React from 'react';
import { useHistory } from 'react-router-dom';

import Footer from './partials/Footer';
import Navbar from './partials/Navbar';

const Gallery = () => {
	const history = useHistory();

	return (
		<>
			<Navbar />

			<header className="header">
				<div className="notfound-container">
					<h1 style={{ marginBottom: '2rem' }}>
						Sayfa şu anda yapım aşamasında!
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

export default Gallery;
