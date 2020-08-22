import createRequestSaga, { createRequestActionTypes } from 'src/lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as applyAPI from '../lib/api/apply';
import { takeLatest } from 'redux-saga/effects';

const [READ_APPLY, READ_APPLY_SUCCESS, READ_APPLY_FAILURE] = createRequestActionTypes(
  'apply/READ_APPLY',
);
const UNLOAD_APPLY = 'apply/UNLOAD_APPLY';
const SELECT_APPLY = 'apply/SELECT_APPLY';

export const readApply = createAction(READ_APPLY, (id) => id);

export const unloadApply = createAction(UNLOAD_APPLY);
export const selectApply = createAction(SELECT_APPLY, (selectApplyId) => selectApplyId);

const readApplySaga = createRequestSaga(READ_APPLY, applyAPI.readApply);

export function* applySaga() {
  yield takeLatest(READ_APPLY, readApplySaga);
}

const initialState = {
  apply: null,
  error: null,
  selectApplyId: null,
};

const apply = handleActions(
  {
    [READ_APPLY_SUCCESS]: (state, { payload: apply }) => ({
      ...state,
      apply,
    }),
    [READ_APPLY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_APPLY]: () => initialState,
    [SELECT_APPLY]: (state, {payload: selectApplyId}) => ({
      ...state,
      selectApplyId,
    })
  },
  initialState,
);

export default apply;
