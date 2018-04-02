//头部，包括登陆按钮等
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes,{instanceOf} from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';
import Login from '../login/CookieApp';
require('./Header.css');
class Header extends React.Component{
	constructor(){
			super();
			this.state={
				showLogin:"hidden",
				name:''
			}
			this.handleClick=this.handleClick.bind(this);
			this.hideLogin=this.hideLogin.bind(this);
		}
		static propTypes={
			cookies:instanceOf(Cookies).isRequired
		}
		componentWillMount(){
			const {cookies}=this.props;
			if(cookies.get('admin')){
				this.setState({
					name:'admin'
				})
			}
		}
		componentDidMount(){
			//console.log(localStorage.getItem('admin'));
			if(localStorage.getItem('admin')){
				this.setState({
					name:'admin'
				})
			}
		}
		handleClick(e){
			this.setState({showLogin:'visible'})
			e.preventDefault();
			e.stopPropagation()
		}

		hideLogin(e){
			this.setState({showLogin:'hidden'})
		}

		handleSubmitName(name){
			this.setState({name:name})
			console.log(name+'props');
		}

	render(){
		return (
			<header className="header">
				<h1>My Shopping Car</h1>
				<div className="header-login">
					<span>{this.state.name}</span>
					<span className="" onClick={this.handleClick}><Link to="/" className="link">登陆</Link></span>
					<span><Link to="/car" className="link"><img src="/img/购物车.png" alt="购物车"/></Link></span>
				</div>
				<div style={{visibility:this.state.showLogin}}>
					<Login onSubmit={this.handleSubmitName.bind(this)}/>
				</div>
				<div className="bg" style={{visibility:this.state.showLogin}} onClick={this.hideLogin}></div>
			</header>

		)
	}
}

export default withCookies(Header);