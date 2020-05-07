import React, { useReducer } from 'react';
import Button from '../Button';
import { COUNTER_INITIAL_STATE, COUNTER_ACTION_TYPES, counterReducer} from './Counter.reducer';

function CounterComponent() {
  const [state, dispatch] = useReducer(counterReducer, COUNTER_INITIAL_STATE);

  return (
    <div>
      Count: {state.count}
      <Button text="+" handleClick={() => dispatch({type: COUNTER_ACTION_TYPES.INCREMENT})} />
      <Button text="-" handleClick={() => dispatch({type: COUNTER_ACTION_TYPES.DECREMENT})} />
      <Button text="RESET" handleClick={() => dispatch({type: COUNTER_ACTION_TYPES.RESET})} />
    </div>
  )
}


export default CounterComponent;