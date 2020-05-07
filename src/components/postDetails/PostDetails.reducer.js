export const POST_DETAILS_INITIAL_STATE = {
  isLoading: false,
  data: {},
};

export const POST_DETAILS_ACTION_TYPES = {
  SET_LOADING: 'SET_LOADING',
  SET_DATA: 'SET_DATA'
};

export function postDetailsReducer(state, action) {
  switch (action.type) {
    case POST_DETAILS_ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case POST_DETAILS_ACTION_TYPES.SET_DATA:
      return {
        isLoading: false,
        data: action.value,
      };
  }
}