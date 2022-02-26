import React from 'react';

// eslint-disable-next-line react/prop-types
const MenuImage = ({ id }) => {
	return (
		<img
			src={`${process.env.REACT_APP_API}/public/images/menu/${id}.jpg`}
			className="menu-old-item"
		/>
	);
};

export default MenuImage;
