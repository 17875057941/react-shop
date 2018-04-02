import React from 'react';
import ProTypes from 'prop-types';
import {connect} from 'react-redux';
import Car from '../../components/car/Car';

import {addQuantity,delQuantity,initStorage} from '../../actions/actions';//加载localstorage

class CarContainer extends React.Component{

	static propTypes={
		product:ProTypes.array,
		initStorage:ProTypes.func
	}
	componentWillMount(){
		this._loadStorage();//初始化localstorage到state中
	}
	componentDidMount(){
		//console.log(this.props);
	}

	_loadStorage(){
		var product=[];
		for(var key in localStorage){
			if(key==='length') break;
			var temp=JSON.parse(localStorage.getItem(key))
			product.push(temp)
		}
		this.props.initStorage(product);
		//console.log(product);
	}

	handelDelStorage(key){
		const {product}=this.props
	}
	render(){
		console.log(this.props)
		return(
			<Car data={this.props.value}
			delQuantity={this.handelDelStorage.bind(this)}/>
		)
	}
}
const mapStateToProps=(state)=>{//获取商品数据
	return{
		value:state.product
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		initStorage:(product)=>{
			dispatch(initStorage(product));
		},
		delQuantity:(key)=>{//删除商品
			dispatch(addQuantity(key));
		}
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CarContainer)
//返回新的SingleGoods组件