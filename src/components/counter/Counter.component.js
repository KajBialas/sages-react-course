import React, { useReducer, useContext } from 'react';
import Button from '../Button';
import { CounterContext } from '../../App';
import { COUNTER_INITIAL_STATE, COUNTER_ACTION_TYPES, counterReducer} from './Counter.reducer';

function CounterComponent() {
  const [countContext, setCountContext] = useContext(CounterContext);
  const [state, dispatch] = useReducer(counterReducer, countContext ? { count: countContext } : COUNTER_INITIAL_STATE);


  return (
    <div>
      Count: {state.count}
      <Button text="+" handleClick={() => dispatch({
        type: COUNTER_ACTION_TYPES.INCREMENT,
        callback: setCountContext,
      })} />
      <Button text="-" handleClick={() => dispatch({type: COUNTER_ACTION_TYPES.DECREMENT})} />
      <Button text="RESET" handleClick={() => dispatch({type: COUNTER_ACTION_TYPES.RESET})} />
    </div>
  )
}


export default CounterComponent;