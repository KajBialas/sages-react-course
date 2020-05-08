import React from 'react';
import { connect } from 'react-redux';

function HomeComponent({count, actionIncrement, actionDecrement, actionReset}) {
  return (
    <div className="App">
      Count: {count}
      <button onClick={actionIncrement}>+</button>
      <button onClick={actionDecrement}>-</button>
      <button onClick={actionReset}>RESET</button>
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);