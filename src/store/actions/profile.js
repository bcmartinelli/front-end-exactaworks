export const ADD_PROFILE = '[PROFILE] Add profile';
export const ADD_PROFILE_SUCCESS = '[PROFILE] Add profile success';
export const ADD_PROFILE_ERROR = '[PROFILE] Add profile error';

export const FETCH_PROFILE = '[PROFILE] Fetch profile';
export const FETCH_PROFILE_SUCCESS = '[PROFILE] Fetch profile success';
export const FETCH_PROFILE_ERROR = '[PROFILE] Fetch profile error';

export const DELETE_PROFILE = '[PROFILE] Delete profile';
export const DELETE_PROFILE_SUCCESS = '[PROFILE] Delete profile success';
export const DELETE_PROFILE_ERROR = '[PROFILE] Delete profile error';

export const FETCH_PROFILE_LIST = '[PROFILE] Fetch profile list';
export const FETCH_PROFILE_LIST_SUCCESS = '[PROFILE] Fetch profile list success';
export const FETCH_PROFILE_LIST_ERROR = '[PROFILE] Fetch profile list error';

export const addProfile = (profileData, navigate) => ({
  type: ADD_PROFILE,
  payload: profileData,
  navigate
});

export const addProfileSuccess = () => ({
  type: ADD_PROFILE_SUCCESS,
});

export const addProfileError = () => ({
  type: ADD_PROFILE_ERROR,
});

export const fetchProfile = (id, navigate) => ({
  type: FETCH_PROFILE,
  payload: id,
  navigate
})

export const fetchProfileSuccess = (payload) => ({
  type: FETCH_PROFILE_SUCCESS,
  payload
});

export const fetchProfileError = () => ({
  type: FETCH_PROFILE_ERROR,
});

export const deleteProfile = (id) => ({
  type: DELETE_PROFILE,
  payload: id,
})

export const deleteProfileSuccess = (payload) => ({
  type: DELETE_PROFILE_SUCCESS,
  payload
});

export const deleteProfileError = () => ({
  type: FETCH_PROFILE_ERROR,
});

export const fetchProfileList = () => ({
  type: FETCH_PROFILE_LIST,
});

export const fetchProfileListSuccess = (payload) => ({
  type: FETCH_PROFILE_LIST_SUCCESS,
  payload
});

export const fetchProfileListError = () => ({
  type: FETCH_PROFILE_LIST_ERROR,
});