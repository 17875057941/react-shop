//支付

export function payment(state,action){//支付结算
	if(!state){
		state={ amount:0 }
	}
	switch(action.type){
		case 'inscrease'://增加

		return {amount:state.amount+action.amount};

		case 'descrease':

		return {amount:state.amount-action.amount};

		default:
			console.log('没有总额')
			return state;
	}
}
