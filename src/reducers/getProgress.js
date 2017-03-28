import { handleActions } from 'redux-actions';

const getProgress = handleActions({
  ['todos/getProgress'](state, action){
    return { ...state, loading: true };
  },
  ['todos/getProgress/success'](state, action){
    return { ...state, presData: action.payload, loading: false };
  },
  ['todos/getProgress/failed'](state, action){
    return { ...state, err: action.err, loading: false };
  }
},{
  loading: false,
  presData:[],
});

export default getProgress;