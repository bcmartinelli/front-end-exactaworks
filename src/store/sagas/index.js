import { all } from 'redux-saga/effects';
import { watchProfile } from './profile';

export default function* rootSaga() {
  yield all([
    watchProfile()
  ]);
}
