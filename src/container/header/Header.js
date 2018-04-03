import React from 'react';
import PoroTypes from 'prop-types';
import { connect } from 'react-redux'
import Header from '../../components/header/Header';
import {initCookes} from '../../actions/actions';

class HeaderContainer extends React.Component{

	render(){
		return(
			<Header
		onInitCookies={this.props.onInitCookies}/>
		)
	}
}

const mapStateToProps=(state)=>{
	return{
		//cookie:state.cookie.cookie//此处为新的localstorage
		//amount:state.payment.amount
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		onInitCookies:(cookie)=>{
			dispatch(initCookes(cookie))
		}
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderContainer);