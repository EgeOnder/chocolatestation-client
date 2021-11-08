/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Footer from './partials/Footer';
import Navbar from './partials/Navbar';
import Loading from './partials/Loading';
import FormDialog from './partials/FormDialog';

const Product = ({ slug }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [modal, setModal] = useState('');

	const counter = useRef(0);

	const imageLoaded = () => {
		counter.current += 1;
		if (counter.current >= products.length) {
			setLoading(false);
		}
	};

	useEffect(() => {
		setLoading(true);
		axios
			.get(process.env.REACT_APP_API + '/api/product/' + slug, {
				withCredentials: true,
			})
			.then((res) => {
				setProducts([res.data]);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			{loading && <Loading />}
			<div style={{ display: loading ? 'none' : 'block' }}>
				<FormDialog
					open={modal == 'add'}
					setOpen={setModal}
					modal={modal}
				/>
				<Navbar off />

				<div className="menu">
					<div className="menu-container">
						{products.length != 0 &&
							products[0].map((product) => (
								<div className="menu-item" key={product.id}>
									<img
										src={
											process.env.REACT_APP_API +
											'/public/s3/' +
											product.image
										}
										className="menu-item-img"
										onLoad={imageLoaded}
									/>
									<h3 className="menu-item-title">
										{product.name}
									</h3>
									<p className="menu-item-p">
										{product.description}
									</p>
									<span className="menu-item-price">
										{product.price} ₺
									</span>
								</div>
							))}
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Product;
