import React from 'react';
import {Route} from 'react-router-dom';

import Home from '../homepage/Home';
//import Car from '../car/Car';
import Car from '../../container/car/Car'



class Router extends React.Component{
	render(){
		return (
			<main>
				<Route path="/" exact component={Home}></Route>
				<Route path="/car" component={Car}></Route>
			</main>
		)
	}
}

export default Router;