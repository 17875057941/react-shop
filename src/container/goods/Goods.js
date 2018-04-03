import React from 'react';
import PoroTypes from 'prop-types';
import { connect } from 'react-redux'
import Goods from '../../components/goods/Goods';
import {delQuantity,loadStorage,initStorage} from '../../actions/actions';
class GoodsContainer extends React.Component{
	constructor(){
		super();
		this.state={
			value:''
		}
	}
	componentWillMount(){
		this.setState({
			value:this.props.value
		})
	}
	ondelQuantity(key){//能够删除
		console.log(key+'-k')
		//const product=this.props;
		localStorage.removeItem(key);
		const newStorage=localStorage
		console.log('newStorage',newStorage)
		this.props.ondelQuantity(newStorage);
	}
	render(){
		console.log('goods',this.props.value)
		return (
			<Goods
				value={this.props.value}//从mapState拿回来的值
				data={this.props.data}//商品数据传下去
				ondelQuantity={this.ondelQuantity.bind(this)}
				onloadStorage={this.props.onloadStorage}
				onSubmit={this.props.onSubmit}/>
		)
	}
}

const mapStateToProps=(state)=>{
	return{
		value:state.product//此处为新的localstorage
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		ondelQuantity:(key)=>{
			dispatch(delQuantity(key));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GoodsContainer);