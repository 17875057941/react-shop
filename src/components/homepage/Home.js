//主页
import React from 'react';

//import Header from '../header/CookieHeader';
import Header from '../../container/header/Header'
import SingleGoods from '../../container/singleGoods/SingleGoods'//new
//import SingleGoods from '../../components/singleGoods/SingleGoods'
//import {Link} from 'react-router-dom'
//import {imgData} from '../imageData/imagedata'//获取处理过后的商品数据
require('./Home.css');
//主页
class Home extends React.Component{
	render(){
		return (
			<div id="home">
				<Header/>
				<section className="home-nav">
					<nav><span>主页</span>/<span style={{color:'red'}}>商品列表</span></nav>
				</section>
				<div className="price-goods-page">
					<div className="price-left">
						<dl>
							<dt style={{fontWeight:"bold"}}>价格区间</dt>
							<dd style={{color:"orange"}}>选择价格：</dd>
							<dd>0.00-100.00元</dd>
							<dd>100.00-500.00元</dd>
							<dd>500.00-1000.00元</dd>
							<dd>1000.00-2000.00元</dd>
							<dd>2000.00-3000.00元</dd>
							<dd>3000.00-6000.00元</dd>
						</dl>
					</div>
					<div className="goods-right">
						<SingleGoods/>
					</div>
				</div>
			</div>
		)
	}
}
export default Home;
