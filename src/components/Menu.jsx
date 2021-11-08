import React, { useState, useRef } from 'react';

import Footer from './partials/Footer';
import Navbar from './partials/Navbar';
import Loading from './partials/Loading';

const Menu = () => {
	const [loading, setLoading] = useState(true);

	const counter = useRef(0);

	const imageLoaded = () => {
		counter.current += 1;
		if (counter.current >= 5) {
			setLoading(false);
		}
	};

	return (
		<>
			{loading && <Loading />}
			<div style={{ display: loading ? 'none' : 'block' }}>
				<Navbar off />

				<div className="menu-old">
					<img
						src={`${process.env.REACT_APP_API}/public/images/menu/1.jpg`}
						onLoad={imageLoaded}
						className="menu-old-item"
					/>
					<img
						src={`${process.env.REACT_APP_API}/public/images/menu/2.jpg`}
						onLoad={imageLoaded}
						className="menu-old-item"
					/>
					<img
						src={`${process.env.REACT_APP_API}/public/images/menu/3.jpg`}
						onLoad={imageLoaded}
						className="menu-old-item"
					/>
					<img
						src={`${process.env.REACT_APP_API}/public/images/menu/4.jpg`}
						onLoad={imageLoaded}
						className="menu-old-item"
					/>
					<img
						src={`${process.env.REACT_APP_API}/public/images/menu/5.jpg`}
						onLoad={imageLoaded}
						className="menu-old-item"
					/>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Menu;
