import { combineReducers } from 'redux';
// import counter from './counter';
import counter from './counter_saga';
// import sample from './sample';
import sample, { sampleSaga } from './sample_saga';
import loading from './loading';
import { counterSaga } from './counter_saga';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ counter, sample, loading });

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
