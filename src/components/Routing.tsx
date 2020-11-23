import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Backside from './Backside';
import Hidden from './Hidden';
import Sheet from './Sheet';

const Routing = () =>
{
	return (
		<Router>
			<Switch>
				<Route
					path={'/:deck/:type/backside'}
					component={Backside}
				/>
				<Route
					path={'/:deck/:type/hidden'}
					component={Hidden}
				/>

				<Route
					path={'/:deck/:type/sheet/:n'}
					component={Sheet}
				/>

			</Switch>
		</Router>
	);
};

export default Routing;