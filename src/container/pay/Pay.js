import React from 'react';
//import PoroTypes from 'prop-types';
import { connect } from 'react-redux'
import Pay from '../../components/pay/Pay';
import {increase,decrease} from '../../actions/actions';


class PayContainer extends React.Component{

	render(){
		console.log(this.props.amount)
		return(
			<Pay
			amount={this.props.amount}
			onIncrease={this.props.onIncrease}
			onDecrease={this.props.onDecrease}/>
		)
	}

}

const mapStateToProps=(state)=>{
	return{
		value:state.storage.product,//此处为新的localstorage
		amount:state.payment.amount
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		onIncrease:()=>{
			dispatch(increase());
		},
		onDecrease:()=>{
			dispatch(decrease());
		}
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PayContainer);