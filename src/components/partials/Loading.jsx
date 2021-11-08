import React from 'react';

import Loader from 'react-loader-spinner';

const Loading = () => {
	return (
		<div className="loader-bg">
			<Loader type="ThreeDots" color="#fff" height={100} width={100} />
		</div>
	);
};

export default Loading;
