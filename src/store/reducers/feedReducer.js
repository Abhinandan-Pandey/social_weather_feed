import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../reducers/utility";

const intialState = {
  feeds: [],
  loading: true,
  error: null,
};

const fetchingFeedStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const fetchingFeedFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const fetchingFeedSuccess = (state, action) => {
  return updateObject(state, {
    feeds: action.feeds,
    error: null,
    loading: false,
  });
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_FEED_START:
      return fetchingFeedStart(state, action);
    case actionTypes.FETCHING_FEED_SUCCESS:
      return fetchingFeedSuccess(state, action);
    case actionTypes.FETCHING_FEED_FAIL:
      return fetchingFeedFail(state, action);
    default:
      return state;
  }
};

export default reducer;
