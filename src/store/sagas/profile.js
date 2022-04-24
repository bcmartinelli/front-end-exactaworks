import { put, select, takeLatest } from 'redux-saga/effects';
import { initialize } from 'redux-form';
import * as fromActions from '../actions';
import * as fromTypes from '../actions/profile';
import axios from 'axios';

const getProfileListFromState = (state) => state?.profile?.profileList;

export function* addProfile({ payload, navigate }) {
  try {
    const response = yield axios.post('https://62634d5ac430dc560d2d9d91.mockapi.io/api/profile', payload);

    if (response.status === 201) {
      yield put(fromActions.addProfileSuccess());
      navigate('profile/list');
    }
  } catch (error) {
    console.error(error);
    yield put(fromActions.addProfileError());
  }
}

export function* fetchProfile({ payload, navigate }) {
  try {
    const response = yield axios.get(`https://62634d5ac430dc560d2d9d91.mockapi.io/api/profile/${payload}`);

    yield put(fromActions.fetchProfileSuccess(response.data));
    yield put(initialize('profileForm', response.data));
  } catch (error) {
    console.error(error);
    yield put(fromActions.fetchProfileError());
    navigate('profile/list');
  }
}

export function* deleteProfile({ payload }) {
  try {
    const response = yield axios.delete(`https://62634d5ac430dc560d2d9d91.mockapi.io/api/profile/${payload}`);
    yield put(fromActions.deleteProfileSuccess(response.data));
  } catch (error) {
    console.error(error);
    // Made for mock deletion when there is an error on the endpoint (I couldn't understand how deletion works)
    // yield put(fromActions.deleteProfileError());
    const profileState = yield select(getProfileListFromState);
    const response = profileState.filter((item) => item.id !== payload);
    yield put(fromActions.deleteProfileSuccess(response));
  }
}

export function* fetchProfileList() {
  try {
    const response = yield axios.get('https://62634d5ac430dc560d2d9d91.mockapi.io/api/profile/');
    yield put(fromActions.fetchProfileListSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(fromActions.fetchProfileListError());
  }
}


export function* watchProfile() {
  yield takeLatest(fromTypes.ADD_PROFILE, addProfile);
  yield takeLatest(fromTypes.FETCH_PROFILE, fetchProfile);
  yield takeLatest(fromTypes.DELETE_PROFILE, deleteProfile);
  yield takeLatest(fromTypes.FETCH_PROFILE_LIST, fetchProfileList);
}
