import React from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from './partials/Navbar';
import Footer from './partials/Footer';

const selected = [
	{
		image: 'header.png',
		title: 'Serpme Kahvaltı',
		description:
			'Peynir ve zeytin çeşitleri, tereyağı, bal, reçel, sigara böreği, domates, salatalık, mevsim yeşillikleri, haşlanmış yumurta ve sınırsız çay.',
		path: '/menu/kahvaltilar/serpme-kahvalti',
	},
	{
		image: 'header.png',
		title: 'Hamburger Menü',
		description: 'Hamburger, patates, kola veya ayran.',
		path: '/menu/burgerler/hamburger-menu',
	},
	{
		image: 'header.png',
		title: 'Kahvaltı Tabağı',
		description:
			'Peynir ve zeytin çeşitleri, tereyağı, bal, reçel, sigara böreği, domates, salatalık, mevsim yeşillikleri, sahanda veya haşlanmış yumurta, patates kızartması, sucuk ve sınırsız çay.',
		path: '/menu/kahvaltilar/kahvalti-tabagi',
	},
	{
		image: 'header.png',
		title: 'Spagetti Bolognese',
		description:
			'Baharatlandırılmış domates sosu, dana kıyma, fesleğen, parmesan peyniri.',
		path: '/menu/makarnalar/spagetti-bolognese',
	},
];

// const comments = [
// 	{
// 		image: 'avatar.png',
// 		comment:
// 			'The best value for money in Çorlu for breakfast. Breakfast is complete, abundant and of good quality. We sit on a terrace and the atmosphere is calm. The servers are fast and attentive.',
// 		name: 'Pablo',
// 	},
// 	{
// 		image: 'avatar.png',
// 		comment:
// 			'The best value for money in Çorlu for breakfast. Breakfast is complete, abundant and of good quality. We sit on a terrace and the atmosphere is calm. The servers are fast and attentive.',
// 		name: 'Pablo2',
// 	},
// ];

const Home = () => {
	const history = useHistory();

	return (
		<>
			<Navbar />

			<div className="header">
				<div className="header-container">
					<div className="header-left">
						<h1 className="header-title">
							Sade Yaşama İlham Veren
							<span className="highlight"> Mutfak</span> Anlayışı.
						</h1>
						<p className="header-subtitle">
							Taze ve güncel menümüze ulaşmak için tıklayın.
							Sağlıklı günlerde görüşmek dileğiyle.
						</p>
						<div className="header-buttons">
							<button
								className="btn"
								onClick={() => history.push('/menu')}
							>
								MENÜYÜ İNCELE
							</button>
						</div>
					</div>
					<div className="header-right hidden-on-mobile">
						<img
							src={`${process.env.REACT_APP_API}/public/images/header.png`}
							alt="header"
						/>
					</div>
				</div>
			</div>

			<div className="special">
				<div className="special-title">
					<h2>Seçtiklerimiz</h2>
				</div>
				<div className="special-container">
					{selected.map((food) => (
						<div className="special-cart" key={food.path}>
							<img
								src={`${process.env.REACT_APP_API}/public/images/${food.image}`}
								alt="cart"
								className="cart-img"
							/>
							<h4 className="cart-title">{food.title}</h4>
							<p className="cart-subtitle">{food.description}</p>
							<button
								className="btn"
								style={{ marginBottom: '2rem' }}
								// onClick={() => history.push(food.path)}
							>
								Daha Fazla
							</button>
						</div>
					))}
				</div>
			</div>

			{/* <div className="comments">
				<div className="comments-wrapper">
					<h2 className="comments-title">Müşteri Yorumları</h2>
					<div className="comments-cards">
						{comments.map((comment) => (
							<div
								className="comments-card-item"
								key={comment.name}
							>
								<div className="comments-card-img-wrapper">
									<img
										src={`${process.env.REACT_APP_API}/public/images/${comment.image}`}
										className="comments-card-img"
									/>
								</div>

								<span className="comments-card-comment">
									&quot;{comment.comment}&quot;
								</span>
								<span className="comments-card-name">
									- {comment.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</div> */}

			<Footer />
		</>
	);
};

export default Home;
