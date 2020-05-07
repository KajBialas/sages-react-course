export const POST_DETAILS_INITIAL_STATE = {
  isLoading: false,
  isError: false,
  data: {},
};

export const POST_DETAILS_ACTION_TYPES = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_DATA: 'SET_DATA'
};

export function postDetailsReducer(state, action) {
  switch (action.type) {
    case POST_DETAILS_ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case POST_DETAILS_ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case POST_DETAILS_ACTION_TYPES.SET_DATA:
      return {
        isLoading: false,
        isError: false,
        data: action.value,
      };
  }
}