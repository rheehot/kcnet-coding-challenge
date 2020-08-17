import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import applys, { applysSaga } from './applys';
import apply, {applySaga} from './apply';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  applys,
  apply,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), applysSaga(), applySaga()]);
}

export default rootReducer;
