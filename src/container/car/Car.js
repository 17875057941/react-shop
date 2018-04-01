import React from 'react';
//import ProTypes from 'prop-types';
import {connect} from 'react-redux';
import Car from '../../components/car/Car';

import {getGoods} from '../../reducers/Car';//引入添加action

//import {imgData} from '../../components/imageData/imagedata'//获取处理过后的商品数据
//const actionTypes={type:'ADD_GOODS'}//添加

class CarContainer extends React.Component{
	render(){
		return(
			<Car data={this.props.data}/>
		)
	}
}
const mapStateToProps=(state)=>{
	return{
		data:state.data
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		onGet:(data)=>{
			dispatch(getGoods(data));
		}
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CarContainer)
//返回新的SingleGoods组件