export default function(state,action){

	if(!state){
		state={
			data:[]
		}
	}
	switch(action.type){
		case 'ADD_GOODS':
			return {...state,...action.data}
		case 'DEL_GOODS':
			return action.type
		case 'GET_GOODS':
			return state;
		default:
			return state;
	}
}

export const addGoods=(data)=>{
	return {type:'ADD_GOODS',data}
}

export const getGoods=()=>{
	return {type:'GET_GOODS'}
}

export const delGoods=()=>{
	return {type:'DEL_GOODS'}
}