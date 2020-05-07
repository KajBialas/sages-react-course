export const COUNTER_INITIAL_STATE = {count: 0};

export const COUNTER_ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

export function counterReducer(state, action) {
  switch(action.type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      action.callback(state.count + 1);
      return { count: state.count + 1};
    case COUNTER_ACTION_TYPES.DECREMENT:
      return { count: state.count - 1};
    case COUNTER_ACTION_TYPES.RESET:
      return { count: 0};
  }
}