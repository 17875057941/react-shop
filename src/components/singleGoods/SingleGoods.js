//单个商品-->主页 dumb
import React from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies'
import {imgData} from '../imageData/imagedata'//获取处理过后的商品数据
require('./SingleGoods.css')

class SingleGoods extends React.Component{
	constructor(props){
		super(props);
		this.state={
			showCar:'hidden'
		}
		this.addGoods=this.addGoods.bind(this);
		this.hideCar=this.hideCar.bind(this);
	}
	addGoods(e){
		let data=imgData[e.target.id];
		if(cookie.load('admin')){
			this._saveDatatoStorage(e.target.id,data);
			this.setState({showCar:'visible'});	
		}else{
			return alert('请先登录！用户名：admin 密码：123456')
		}
	}

	_saveDatatoStorage(target,data){//设置localstorage
		localStorage.setItem(target,JSON.stringify(data));
	}
	hideCar(e){
		this.setState({showCar:'hidden'})
	}
	//增加商品
	render(){
		const list=[];
			for(let i in imgData){
				list.push(
					<li key={imgData[i].productId}>
						<div className="picture"><img src={imgData[i].imgUrl} alt={imgData[i].productName}/></div>
						<div className="main">
							<div className="name">{imgData[i].productName}</div>
							<div className="price" style={{color:'red'}}>￥{imgData[i].salePrice}</div>
							<div className="btn-car">
								<a onClick={this.addGoods} id={i}>加入购物车</a>
							</div>
						</div>

						<div className="bg" style={{visibility:this.state.showCar}} onClick={this.hideCar}></div>
						<div className="add-success" style={{visibility:this.state.showCar}}>
							<div className="add-success-inner">
								<div className="add-success-text">加入购物车成功</div>
								<div className="add-success-con">
									<Link to="/" className="add-success-link" >继续购物</Link>
								</div>
								<div className="add-success-check">
									<Link to="/car" className="add-success-link">查看购物车</Link>
								</div>
							</div>
						</div>
					</li>
				)
			}
		return(
			<ul>{list}</ul>
		)
	}
}
export default SingleGoods;