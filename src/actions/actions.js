import * as ActionTypes from './actionTypes'

export function loadStorage(){//加载localstorage
	return {
		type:ActionTypes.LOAD_STORAGE
	}
}
export function delLocastorage(key){//删除localstorage
	return {
		type:ActionTypes.DEL_QUANTITY,
		key
	}
}

export function addQuantity(goods){//增加商品=>添加localstroage
	return {
		type:ActionTypes.ADD_QUANTITY,
		goods
	}
}

export function delQuantity(goods){//减少商品=>删除localstroage,gooss包含key
	return {
		type:ActionTypes.DEL_QUANTITY,
		goods
	}
}


export function saveCookes(user){//user包含用户名和密码
	return{
		type:ActionTypes.SET_COOKIES,
		user
	}
}

export function initCookes(user){//user包含用户名和密码
	return{
		type:ActionTypes.INIT_COOKIES,
		user
	}
}

export function getCookies(username){//根据用户名获取cookies信息

	return {
		type:ActionTypes.GET_COOKIES,
		username
	}
}
export function initStorage(product){
	console.log('初始化操作')
	return { type:ActionTypes.INIT_STORAGE,product }
}


export function increase(amount){
	console.log('增加操作')
	return {
		type:ActionTypes.inscrease,
		amount
	}
}

export function decrease(amount){
	console.log('减少操作')
	return {
		type:ActionTypes.descrease,
		amount
	}
}