//商品编辑
import React from 'react';
import Header from '../header/CookieHeader';
//import Goods from '../goods/Goods';
import Goods from '../../container/goods/Goods'
import Pay from '../pay/Pay'
require('./Car.css');
class Car extends React.Component{
	constructor(props){
		super(props);
		this.state={
			goods:'',
			data:'',
			amount:0
		}
		this.goods=[];
	}
	componentWillMount(){
		this._loadData();
		this.setState({
			goods:this.goods,
			data:this.props.data
		});
		console.log('应该重新渲染',this.props.data);//没有传进来改变state
	}
	_loadData(){
		var data;
		for(var key in this.props.data){
			if(key==='length'){
				return;
			}else{
				data=JSON.parse(this.props.data.getItem(key));
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
	handleSubmitMoney(amount){
		this.setState({
			amount:amount
		})
	}

	render(){
		const totalGoods=[];
		for(let i in this.state.goods){
			totalGoods.push(
				<Goods data={this.state.goods[i]} key={i}
					onSubmit={this.handleSubmitMoney.bind(this)}/>
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
						<Pay amount={this.state.amount}/>
					</div>
				</div>
			</div>
		)
	}
}
export default Car;