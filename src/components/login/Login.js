//登陆验证 
import React from 'react';
import PropTypes from 'prop-types';
require('./Login.css');
class Login extends React.Component{

	constructor(){
		super();
		this.handleClick=this.handleClick.bind(this);
		this.state={
			username:PropTypes.any.isRequired,
			password:PropTypes.any.isRequired
		}
	}

	handleClick(e){
		//this.props.showLogin=null;
	}
	handleSubmit(e){
		e.preventDefault();
		if(!this.state.username) return alert('用户名不能为空');
		if(!this.state.psw) return alert('密码不能为空');
		this._saveCooke();
		this.name=this.state.username;
		console.log(this.name);
		if(this.props.onSubmit){
			const name=this.state.username;
			this.props.onSubmit(name);
		}
	}
	
	userName(e){
		this.setState({
			username:e.target.value
		})
		console.log(e.target.value)
	}

	psw(e){
		this.setState({
			psw:e.target.value
		})
	}
	_saveCooke(){
		localStorage.setItem(this.state.username,this.state.psw);
		console.log('kk')
	}
	render(){
		return (				
				<div id="form" action='http://localhost:3000/' method="post">
					<form className="form" method="get" action="/" onSubmit={this.handleSubmit.bind(this)}>
						<label>账号：</label>
						<input type="text" className="header-input" onChange={this.userName.bind(this)}></input><br/>
						<label>密码：</label>
						<input type="password" className="header-input" onChange={this.psw.bind(this)}></input><br/>
						<input type="submit" value="登陆" className="header-btn"></input><br/>
					</form>
				</div>
		)
	}

}
export default Login;