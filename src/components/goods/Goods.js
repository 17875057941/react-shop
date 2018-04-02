//购物车商品
import React from 'react';
require('./Goods.css')
class Goods extends React.Component{
	constructor(props){
		super(props);
		this.state={
			quantity:this.props.data.quantity,
			totalPrice:this.props.data.totalPrice,
			check:true,
			checkStyle:"checknox-btn item-check-btn check"
		}
	}
	add(quantity,price){
		quantity=this.state.quantity;
		price=this.props.data.unitPrice;
		quantity++;
		this.setState({
			quantity:quantity,
			totalPrice:'￥'+price*quantity
		})
	}

	sub(quantity,price){
		quantity=this.state.quantity;
		price=this.props.data.unitPrice;
		quantity--;
		if(quantity<0){
			quantity=0;
		}
		this.setState({
			quantity:quantity,
			totalPrice:'￥'+price*quantity
		})
	}
	handleDelete(e){
		localStorage.removeItem(e.target.id);
	}
	changeStyle(){
		let flag=this.state.check;
		this.setState({
			check:!flag
		})
		if(this.state.check){
			this.setState({checkStyle:'checknox-btn item-check-btn check'})
		}else{
			this.setState({checkStyle:'checknox-btn item-check-btn check-icon'})
		}
		console.log('check')
	}
	render(){
		return (
			<li>
				<div className="car-tab-1">
					<div className="car-item-check">
						<a className={this.state.checkStyle} onClick={this.changeStyle.bind(this)}></a>
					</div>
					<div className="car-item-pic">
						<img alt={this.props.data.title} src={this.props.data.pic} lazy="loaded"/>
					</div>
					<div className="car-item-title">
						<div className="item-name">{this.props.data.title}</div>
					</div>
				</div>
				<div className="car-tab-2">
					<div className="item-price">{this.props.data.unitPrice}</div>
				</div>
				<div className="car-tab-3">
					<div className="item-quantity">
						<div className="select-self select-self-open">
							<div className="select-self-area">
								<a className="input-sub" onClick={this.sub.bind(this)}>-</a>
								<span className="select-ipt">{this.state.quantity}</span>
								<a className="input-add" onClick={this.add.bind(this)}>+</a>
							</div>
						</div>
					</div>
				</div>
				<div className="car-tab-4">
					<div className="item-price-total">{this.state.totalPrice}</div>
				</div>
				<div className="car-tab-5">
					<div className="cart-item-opration">
						<a className="item-edit-btn" id={this.props.data.dataId} onClick={this.handleDelete.bind(this)}>
							删除
						</a>
					</div>
				</div>
			</li>
		)
	}
}

export default Goods;