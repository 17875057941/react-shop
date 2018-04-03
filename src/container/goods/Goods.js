import React from 'react';
import PoroTypes from 'prop-types';
import { connect } from 'react-redux'
import Goods from '../../components/goods/Goods';
import {delQuantity,initStorage,increase,decrease} from '../../actions/actions';
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
		localStorage.removeItem(key);
		const newStorage=localStorage
		console.log('newStorage',newStorage)
		this.props.ondelQuantity(newStorage);
		return alert('删除功能尚未完成，请谅解。请重新刷新页面')
	}
	render(){
		console.log('goods',this.props.value)
		return (
			<Goods
				value={this.props.value}//从mapState拿回来的值
				data={this.props.data}//商品数据传下去
				ondelQuantity={this.ondelQuantity.bind(this)}
				onSubmit={this.props.onSubmit}
				onIncrease={this.props.onIncrease}//增加
				onDecrease={this.props.onDecrease}/>
		)
	}
}
const mapStateToProps=(state)=>{
	return{
		value:state.storage.product//此处为新的localstorage
		//amount:state.payment.amount
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		ondelQuantity:(key)=>{
			dispatch(delQuantity(key));
		},
		onIncrease:(price)=>{
			dispatch(increase(price));
		},
		onDecrease:(price)=>{
			dispatch(decrease(price));
		}
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GoodsContainer);