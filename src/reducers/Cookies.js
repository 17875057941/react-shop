//cookies
export function cookie(state,action){
	if(!state){
		state={ cookie:null }
	}
	switch(action.type){
		case 'INIT_COOKIES'://初始化用户cookies

		console.log('初始化cookies');
		//return {cookie:action.cookie}
		return null;
		case 'GET_COOKIES'://获取用户cookies
		console.log('获取用户cookies');
		//return {cookie:action.cookie}
		return null;
		default:
		return state;
	}
}