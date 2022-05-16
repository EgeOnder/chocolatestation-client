import React from 'react';
import { useHistory } from 'react-router-dom';

const Footer = () => {
	const history = useHistory();

	return (
		<footer>
			<div className="footer-container">
				<img
					src={`${process.env.REACT_APP_API}/public/logo/logowhite.svg`}
					alt="logo"
					className="footer-logo"
				/>
				<div className="footer-lists">
					<ul className="footer-ul">
						<span className="footer-ul-title">Navigasyon</span>
						<li
							className="footer-li"
							onClick={() => history.push('/menu')}
						>
							Menü
						</li>
						{/* <li
							className="footer-li"
							onClick={() => history.push('/galeri')}
						>
							Galeri
						</li> */}
						<li
							className="footer-li"
							onClick={() => history.push('/iletisim')}
						>
							İletişim
						</li>
					</ul>
					<ul className="footer-ul">
						<span className="footer-ul-title">Bize Ulaşın</span>
						<li
							className="footer-li"
							onClick={() => {
								window.open('tel:02826503050');
							}}
						>
							+90 (282) 650 30 50
						</li>
						{/* <li
							className="footer-li"
							onClick={() => {
								window.open(
									'mailto:bilgi@istasyoncikolata.com'
								);
							}}
						>
							bilgi@istasyoncikolata.com
						</li> */}
						<li
							className="footer-li"
							onClick={() => {
								window.open(
									'https://www.google.com/maps/place/Chocolate+Station/@41.1551059,27.840676,15z/data=!4m5!3m4!1s0x0:0x34d7dcc075cf0d5f!8m2!3d41.1551059!4d27.840676'
								);
							}}
						>
							Esentepe Mah. Adnan Doğu Cd. Kervancı Süit No:10
						</li>
					</ul>
				</div>
			</div>
			<div className="copy-container">
				<span className="copy-text">
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
				</span>
				<div className="copy-social">
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
								'https://instagram.com/chocolatestationcorlu'
							)
						}
					>
						<i className="fab fa-instagram"></i>
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
