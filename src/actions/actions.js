import * as ActionTypes from './actionTypes'

export default function reducer(state,action){//reducer
	if(!state){
		state={product:[1]}
	}
	switch(action.type){
		case 'INIT_STORAGE':
			console.log('初始化storage数据');
			return {product:action.product}
		case 'DEL_QUANTITY'://删除localstorage
			localStorage.removeItem(action.goods);
			console.log(0);
			console.log(action.product);
			return {product:action.product};
		case 'LOAD_STORAGE'://加载localstorage
			return localStorage;
		default:
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