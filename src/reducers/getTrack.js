import { handleActions } from 'redux-actions';

const getTrack = handleActions({
  ['todos/getTrack'](state, action){
    return { ...state, loading: true };
  },
  ['todos/getTrack/success'](state, action){
    return { ...state, data: action.payload, loading: false };
  },
  ['todos/getTrack/failed'](state, action){
    return { ...state, err: action.err, loading: false };
  }
/*  ['todos/getCard'](state, action){
    return { ...state, loading: true };
  },
  ['todos/getCard/success'](state, action){
    return { ...state, cardData: action.payload, loading: false };
  },
  ['todos/getCard/failed'](state, action){
    return { ...state, err: action.err, loading: false };
  }*/
},{
  loading: false,
  data: [],
});

export default getTrack;