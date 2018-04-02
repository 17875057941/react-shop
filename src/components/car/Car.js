//商品编辑
import React from 'react';
import Header from '../header/CookieHeader';
import Goods from '../goods/Goods';
import Pay from '../pay/Pay'
require('./Car.css');
class Car extends React.Component{
	//要解决的问题：如何获取对应商品
	constructor(props){
		super(props);
		this.goods=[];
	}
	componentWillMount(){
		this._loadData();
	}
	_loadData(){
		var data;
		for(var key in localStorage){
			console.log('key'+key);
			if(key==='length'){
				return;
			}else{
				console.log('key'+key);
				data=JSON.parse(localStorage.getItem(key));
				this.goods.push({
					pic:require('../../static/'+data.productImage),//加载图片路径
					dataId:key,
					title:data.productName,
					unitPrice:data.salePrice,
					quantity:0,
					totalPrice:0
				});
			}
		}
	}
	render(){
		const totalGoods=[];
		for(let i in this.goods){
			totalGoods.push(
				<Goods data={this.goods[i]} key={i}/>
			)
		}
		return (
			<div id="car">
				<Header/>
				<section className="home-nav">
					<nav><span>主页</span>/<span style={{color:'red'}}>购物车</span></nav>
				</section>

				<div id="container">
					<div className="car-center">
						<div className="car-title"><h2>我的购物车</h2></div>
						<div className="item-list">
							<div className="item-nav">
								<ul>
									<li>商品</li>
									<li>单价</li>
									<li>数量</li>
									<li>小计</li>
									<li>操作</li>
								</ul>
							</div>

							<ul className="item-goods">
								{totalGoods}
							</ul>
						</div>
						<Pay/>
					</div>
				</div>
			</div>
		)
	}
}
export default Car;