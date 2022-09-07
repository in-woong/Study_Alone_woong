import { createAction, handleActions } from 'redux-actions';
import {
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
  throttle,
} from 'redux-saga/effects';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
  const number = yield select((state) => state.counter);
  console.log(`현재 값은 ${number} 입니다.`);
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
  const number = yield select((state) => state.counter);
  console.log(`현재 값은 ${number} 입니다.`);
}

export function* counterSaga() {
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
