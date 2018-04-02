//登陆验证 
import React from 'react';
import PropTypes,{instanceOf} from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';
require('./Login.css');
class Login extends React.Component{
	constructor(){
		super();
		this.state={
			username:'',
			password:''
		}
	}
	static propTypes={
		cookies:instanceOf (Cookies).isRequired
	}

	handleSubmit(e){//传值给父组件
		//e.preventDefault();
		if(!this.state.username) return alert('用户名不能为空');
		if(!this.state.password) return alert('密码不能为空');
		this._saveCookie(this.state.username,this.state.password);
		this.name=this.state.username;
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
	password(e){
		this.setState({
			password:e.target.value
		})
	}
	_saveCookie(name,password){//设置cookies
		const {cookies}=this.props;
		cookies.set(name,password,{path:'/'});
	}
	render(){
		return (				
				<div id="form">
					<form className="form" method="get" action="http://localhost:3000/" onSubmit={this.handleSubmit.bind(this)}>
						<label>账号：</label>
						<input type="text" className="header-input" onChange={this.userName.bind(this)}></input><br/>
						<label>密码：</label>
						<input type="password" className="header-input" onChange={this.password.bind(this)}></input><br/>
						<input type="submit" value="登陆" className="header-btn" ></input><br/>
					</form>
				</div>
		)
	}
}
export default withCookies(Login);