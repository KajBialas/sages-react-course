import React from 'react';
import { connect } from 'react-redux';

function HomeComponent({count, actionIncrement, actionDecrement, actionReset, actionChange}) {
  const handleChange = (event) => {
    actionChange(Number(event.target.value));
  };

  return (
    <div className="App">
      Count: {count}
      <button onClick={actionIncrement}>+</button>
      <button onClick={actionDecrement}>-</button>
      <button onClick={actionReset}>RESET</button>
      <input type="number" value={count} onChange={handleChange}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actionIncrement: () => dispatch({type: 'INCREMENT'}),
    actionDecrement: () => dispatch({type: 'DECREMENT'}),
    actionReset: () => dispatch({type: 'RESET'}),
    actionChange: (value) => dispatch({type: 'CHANGE', counterValue: value})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);