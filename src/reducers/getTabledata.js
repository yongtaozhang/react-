import { handleActions } from 'redux-actions';



const getTabledata =handleActions({
	['todos/tableOnelist'](state, action){
		return {...state, tableOnedata: action.payload, loading:false}
	},
},{
	loading:false,
	tableOnedata:{},
});

export default getTabledata;