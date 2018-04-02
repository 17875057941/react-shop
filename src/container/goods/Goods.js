import React from 'react';
import PoroTypes from 'prop-types';
import { connect } from 'react-redux'
import Goods from '../../components/goods/Goods';
import {delQuantity,loadStorage,initStorage} from '../../actions/actions';
class GoodsContainer extends React.Component{

	onDeleteStorage(key){
		console.log(key+'k')
		const product=this.props;
		console.log(product)
			this.props.onDeleteStorage(key);
	}
	render(){
		console.log(this.props)
		return (
			<Goods
				value={this.props.value}//从mapState拿回来的值
				data={this.props.data}//传下去
				onDeleteStorage={this.onDeleteStorage.bind(this)}
				onloadStorage={this.props.onloadStorage}
				onSubmit={this.props.onSubmit}/>
		)
	}
}

const mapStateToProps=(state)=>{
	return{
		value:state.product
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		onDeleteStorage:(key)=>{
			dispatch(delQuantity(key));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GoodsContainer);