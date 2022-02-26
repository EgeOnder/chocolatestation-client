import React, { lazy, Suspense } from 'react';

import Footer from './partials/Footer';
import Navbar from './partials/Navbar';
import Loading from './partials/Loading';

const MenuImage = lazy(() => import('./MenuImage'));

// eslint-disable-next-line react/prop-types
const Menu = ({ user }) => {
	return (
		<>
			<Navbar off />

			<div className="menu-old">
				<img
					src={`${process.env.REACT_APP_API}/public/images/menu/1.jpg`}
					className="menu-old-item"
				/>
				<Suspense fallback={<Loading />}>
					<MenuImage id={'2'} />
					<MenuImage id={'3'} />
					<MenuImage id={'4'} />
					<MenuImage id={'5'} />
				</Suspense>
			</div>

			{Object.values(user).length != 0 && (
				<>
					<div className="menu-edit">
						<div className="edit-button">
							<i className="fas fa-edit"></i> <span>Düzenle</span>
						</div>
					</div>
				</>
			)}

			<Footer />
		</>
	);
};

export default Menu;
