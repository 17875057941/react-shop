//往购物车里面增加商品,smart
import React from 'react';
import ProTypes from 'prop-types';
import {connect} from 'react-redux';

import SingleGoods from '../../components/singleGoods/SingleGoods';

import {addGoods} from '../../reducers/Car';//引入添加action

//import {imgData} from '../../components/imageData/imagedata'//获取处理过后的商品数据
//const actionTypes={type:'ADD_GOODS'}//添加

class SingleGoodsContainer extends React.Component{
	static proTypes={
		data:ProTypes.array,
		addGoods:ProTypes.func
	}
	handleAdd(data){
		//console.log("aa"+data.productId);
		this.props.onAdd(data);
	}

	render(){
		return(
			<SingleGoods 
			onAdd={this.handleAdd.bind(this)}
			data={this.props.data}/>
		)
	}
}
const mapStateToProps=(state)=>{
	return{
		data:state
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		onAdd:(data)=>{
			dispatch(addGoods(data));
		}
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SingleGoodsContainer)
//返回新的SingleGoods组件