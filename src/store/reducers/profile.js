import * as fromTypes from '../actions/profile';

export const initialState = {
  loading: false,
  profile: null,
  profileList: []
};

const setLoading = (state, loading) => ({ ...state, loading });

const updateProfileList = (state, { payload }) => ({
  ...state,
  profileList: payload
});

const updateProfile = (state, { payload }) => ({
  ...state,
  profile: payload
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fromTypes.ADD_PROFILE:
    case fromTypes.FETCH_PROFILE:
    case fromTypes.DELETE_PROFILE:
    case fromTypes.FETCH_PROFILE_LIST:
      return setLoading(state, true);
    case fromTypes.ADD_PROFILE_SUCCESS:
      return setLoading(state, false);
    case fromTypes.FETCH_PROFILE_SUCCESS:
      return updateProfile(state, action);
    case fromTypes.DELETE_PROFILE_SUCCESS:
    case fromTypes.FETCH_PROFILE_LIST_SUCCESS:
      return updateProfileList(state, action);
    case fromTypes.ADD_PROFILE_ERROR:
    case fromTypes.FETCH_PROFILE_ERROR:
    case fromTypes.DELETE_PROFILE_ERROR:
    case fromTypes.FETCH_PROFILE_LIST_ERROR:
      return setLoading(state, false);
    default:
      return state;
  }
};

export default reducer;
