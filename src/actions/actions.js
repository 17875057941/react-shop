import * as ActionTypes from './actionTypes'
/*
*初始化加载localstorage
*/
var product=localStorage
export function storage(state,action){//localStorage
	if(!state){
		state={product:product}
	}
	switch(action.type){
		case 'DEL_QUANTITY'://删除localstorage
		return {product:action.goods};

		case 'LOAD_STORAGE'://加载localstorage
			return localStorage;
		default:
			//console.log('没有任何其他操作',state);
			return state;
	}
}

export function payment(state,action){//支付结算

	if(!state){
		state={ amount:0 }
	}
	switch(action.type){
		case 'inscrease'://增加
		//console.log('增加',state.amount+action.amount)
		console.log(action)
		console.log('增加总金额',state.amount+action.amount)
		return {amount:state.amount+action.amount};

		case 'descrease':
		console.log('减少',state.amount,action.amount)
		//console.log('减少',state.amount-action.amount)
		return {amount:state.amount-action.amount};

		default:
			console.log('没有总额')
			return state;
	}
}
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
	//localstorage.removeItem(key);
	//console.log('删除localstroage成功');
}

export function extens(data){//小计,data包含数量跟单价
	return{
		type:ActionTypes.SINGLE_AMOUNT,
		data
	}
}

export function totalamount(data){//data里面包含每个商品的小计
	return{
		type:ActionTypes.TOTAL_AMOUNT,
		data
	}
}

export function saveCookes(user){//user包含用户名和密码
	return{
		type:ActionTypes.SET_COOKIES,
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