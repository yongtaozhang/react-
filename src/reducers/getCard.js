import { handleActions } from 'redux-actions';

const getCard = handleActions({
  ['todos/getCard'](state, action){
    return { ...state, loading: true };
  },
  ['todos/getCard/success'](state, action){
    return { ...state, cardData: action.payload, loading: false };
  },
  ['todos/getCard/failed'](state, action){
    return { ...state, err: action.err, loading: false };
  }
},{
  loading: false,
  cardData:[],
});

export default getCard;