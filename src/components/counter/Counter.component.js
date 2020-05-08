import React, { useContext } from 'react';
import Button from '../Button';
import { CounterContext } from '../../contexts/context';
import { COUNTER_ACTION_TYPES } from './Counter.reducer';

function CounterComponent() {
  const [state, dispatch] = useContext(CounterContext);

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