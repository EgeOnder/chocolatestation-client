/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

import Contact from './components/Contact';
import Menu from './components/Menu';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Product from './components/Product';
import Login from './components/Login';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const App = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_API + '/auth/user', {
				withCredentials: true,
			})
			.then((res) => {
				if (!res.data.error) setUser(res.data);
			});
	}, []);

	return (
		<>
			<Toaster position="bottom-center" reverseOrder={false} />
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/iletisim" component={Contact} />
					<Route exact path="/menu" component={Menu} />
					<Route
						exact
						path="/admin"
						render={() => <Login user={user} />}
					/>
					<Route
						path="/menu/:slug"
						render={(props) => (
							<Product
								{...props}
								slug={props.match.params.slug}
							/>
						)}
					/>
					<Route component={NotFound} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
