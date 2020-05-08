import React from 'react';
import { connect } from 'react-redux';

function ContactComponent({count}) {
  return (
    <div className="App">
      Count: {count}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count,
  }
};

export default connect(mapStateToProps, null)(ContactComponent);