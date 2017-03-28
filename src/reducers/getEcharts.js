import { handleActions } from 'redux-actions';

const getEcharts = handleActions({
  ['todos/getEcharts'](state, action){
    return { ...state, loading: true };
  },
  ['todos/getEcharts/success'](state, action){
    return { ...state, echartsData: action.payload, loading: false };
  },
  ['todos/getEcharts/failed'](state, action){
    return { ...state, err: action.err, loading: false };
  }
},{
  loading: false,
  echartsData:[],
});

export default getEcharts;