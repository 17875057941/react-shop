import React from 'react';
import ProTypes from 'prop-types';
import {connect} from 'react-redux';
import Car from '../../components/car/Car';

import {addQuantity,delQuantity,initStorage} from '../../actions/actions';//加载localstorage
class CarContainer extends React.Component{
	constructor(props){
		super();
		this.state={
			value:props.value
		}
	}
	static propTypes={
		product:ProTypes.array,
		initStorage:ProTypes.func
	}
	// componentWillMount(){
	// 	this._loadStorage();//初始化localstorage
	// }
	// _loadStorage(){
	// 	var storage=localStorage;
	// 	this.props.initStorage(storage);//更新到state中
	// }
	handelDelStorage(key){
		const {product}=this.props
	}
	render(){
		console.log('应该自动更新',this.props.value)//应该自动更新
		return(
			<Car data={this.props.value}
			delQuantity={this.handelDelStorage.bind(this)}/>
		)
	}
}
//获取商品数据
const mapStateToProps=(state)=>{
	return{
		value:state.storage.product
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		initStorage:(storage)=>{
			dispatch(initStorage(storage))
		}
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CarContainer)

//返回新的SingleGoods组件