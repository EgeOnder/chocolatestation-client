/* eslint-disable indent */
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Fade } from 'react-reveal';

// eslint-disable-next-line react/prop-types
const Navbar = ({ off }) => {
	const history = useHistory();

	const [navbarActive, setNavbarActive] = useState();
	const [hamburger, setHamburger] = useState(false);

	const navRef = useRef();
	navRef.current = navbarActive;

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 100;

			if (show) setNavbarActive(true);
			else setNavbarActive(false);
		};

		document.addEventListener('scroll', handleScroll);

		return () => document.removeEventListener('scroll', handleScroll);
	}, []);

	const hamburgerToggle = () => {
		if (hamburger) {
			const show = window.scrollY > 100;
			setHamburger(false);
			if (!show) setNavbarActive(false);
		} else {
			setHamburger(true);
			setNavbarActive(true);
		}
	};

	return (
		<Fade down>
			<nav
				className="navbar"
				style={{
					backgroundColor: off
						? 'black'
						: navbarActive
						? 'black'
						: 'transparent',
				}}
			>
				<div className="navbar-container">
					<img
						src={`${process.env.REACT_APP_API}/public/logo/logowithtextwhite.svg`}
						alt="logo"
						className="navbar-image"
						onClick={() => history.push('/')}
					/>
					<div className="navbar-buttons">
						<div className="navbar-buttons hidden-on-mobile">
							<button
								className="btn-text"
								style={{ marginRight: 24 }}
								onClick={() => history.push('/menu')}
							>
								MENÜ
							</button>
							<button
								className="btn-text"
								style={{ marginRight: 24 }}
								onClick={() => history.push('/galeri')}
							>
								GALERİ
							</button>
							<button
								className="btn-text"
								style={{ marginRight: 16 }}
								onClick={() => history.push('/iletisim')}
							>
								İLETİŞİM
							</button>
							<div className="divider-vertical"></div>
							<button
								className="btn-icon"
								onClick={() =>
									window.open(
										'https://facebook.com/ChocolateStationCafe'
									)
								}
							>
								<i className="fab fa-facebook"></i>
							</button>
							<button
								className="btn-icon"
								onClick={() =>
									window.open(
										'https://instagram.com/istasyoncikolata'
									)
								}
							>
								<i className="fab fa-instagram"></i>
							</button>
						</div>
						<div
							className="navbar-hamburger btn-icon"
							onClick={hamburgerToggle}
						>
							<i className="fas fa-bars"></i>
						</div>
					</div>
				</div>
				<div
					className={
						hamburger
							? 'hamburger-container hamburger-active'
							: 'hamburger-container'
					}
				>
					<ul className="hamburger-list">
						<li
							className="hamburger-li"
							onClick={() => history.push('/menu')}
						>
							MENÜ
						</li>
						<li
							className="hamburger-li"
							onClick={() => history.push('/galeri')}
						>
							GALERİ
						</li>
						<li
							className="hamburger-li"
							onClick={() => history.push('/iletisim')}
						>
							İLETİŞİM
						</li>
					</ul>
				</div>
			</nav>
		</Fade>
	);
};

export default Navbar;
