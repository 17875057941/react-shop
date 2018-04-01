//支付结算
import React from 'react';
class Pay extends React.Component{
	render(){
		return(
			<div className="car-footer">
				<div className="car-foot-inner">
					<div className="car-foot-l">
						<div className="item-all-check">
							<a>
								<span className="checknox-btn item-check-btn check"></span>
								<span>全选</span>	
							</a>
						</div>
					</div>

					<div className="cart-foot-r">
						<div className="item-total">
  							总价: <span className="total-price">￥338.00</span>
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