import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {} from 'react-router';

import Home from './Home';
import Details from './Details';

export const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path='details/:id' exact element={<Details />} />
			<Route path='/' element={<Home />} />
		</Routes>
	</BrowserRouter>
);