import { takeLatest, takeEvery } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { message } from 'antd';


import { getTrack ,getCard,getProgress,getEcharts} from '../services/todos';

// function* get_Track() {
//   try {
//     const { jsonResult } = yield call(getTrack);
//     console.log(jsonResult);
//     yield put({
//       type: 'todos/getTrack/success',
//       payload: jsonResult.data,
//     });   
//   } catch (err) {
//     message.error("error");
//     yield put({
//      type: 'todos/getTrack/failed',
//      err,
//     });
//   }
// };

function* get_Track() {
  try{
    const { jsonResult } = yield call(getTrack);
    if(jsonResult.code == 0){
      yield put({
        type: 'todos/getTrack/success',
        payload: jsonResult.data
      });
    }
  }catch(err){
    yield put({
      type: 'todos/getTrack/failed',
      err
    });
  }
}
function* get_Card() {
  try{
    const { jsonResult } = yield call(getCard);
    if(jsonResult.code == 0){
      yield put({
        type: 'todos/getCard/success',
        payload: jsonResult.data
      });
    }
  }catch(err){
    yield put({
      type: 'todos/getCard/failed',
      err
    });
  }
}
function* get_Progress() {
  try{
    const { jsonResult } = yield call(getProgress);
    if(jsonResult.code == 0){
      yield put({
        type: 'todos/getProgress/success',
        payload: jsonResult.data
      });
    }
  }catch(err){
    yield put({
      type: 'todos/getProgress/failed',
      err
    });
  }
}
function* get_Echarts(){
  try{
    const {jsonResult} = yield call(getEcharts);
    if(jsonResult.code == 0){
      yield put({
        type:'todos/getEcharts/success',
        payload:jsonResult.data
      });
    }
  }catch(err){
    yield put ({
      tyoe:'todos/getEcharts/failed',
      err
    });
  }
}
function* watchGetTrack() {
  yield takeEvery('todos/getTrack', get_Track);
};
function* watchGetCard() {
  yield takeEvery('todos/getCard', get_Card);
};
function* watchGetProgress() {
  yield takeEvery('todos/getProgress', get_Progress);
};
function* watchGetEcharts() {
  yield takeEvery('todos/getEcharts', get_Echarts);
};
export default function* () {
  yield fork(watchGetTrack);
  yield fork(watchGetCard);
  yield fork(watchGetProgress);
  yield fork(watchGetEcharts);
  // Load todos.
  yield put({
    type: 'todos/getCard',
  });
  yield put({
    type: 'todos/getTrack',
  });
  yield put({
    type: 'todos/getProgress',
  });
 /* yield put({
    type: 'todos/getEcharts',
  });*/
}
