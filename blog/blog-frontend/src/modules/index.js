import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import write, { writeSaga } from './write';
import user, { userSaga } from './user';
import post, { postSaga } from './post';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga()]);
}
export default rootReducer;
