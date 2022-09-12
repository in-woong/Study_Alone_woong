import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import write, { writeSaga } from './write';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga()]);
}
export default rootReducer;
