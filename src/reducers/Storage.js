//设置localstorage
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
			return state;
	}
}