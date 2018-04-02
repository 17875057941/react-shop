//支付结算
import React from 'react';
class Pay extends React.Component{
	constructor(){
		super();
		this.state={
			check:true,
			checkStyle:"checknox-btn item-check-btn check"
		}
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
		console.log('check');
	}
	render(){
		return(
			<div className="car-footer">
				<div className="car-foot-inner">
					<div className="car-foot-l">
						<div className="item-all-check">
							<a>
								<span className={this.state.checkStyle} onClick={this.changeStyle.bind(this)}></span>
								<span>全选</span>	
							</a>
						</div>
					</div>

					<div className="cart-foot-r">
						<div className="item-total">
  							总价: <span className="total-price">￥{this.props.amount}</span>
  						</div> <div className="btn-wrap">
  							<a className="btn btn--red">去结算</a>
  						</div>
  					</div>
				</div>
			</div>
		)
	}
}

export default Pay;