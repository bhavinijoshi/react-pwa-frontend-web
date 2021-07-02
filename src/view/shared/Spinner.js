import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';

class Spinner extends Component {

  render() {
    return (
      <div
        style={{
          width: '100%',
          margin: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          ...this.props.wrapperStyle
        }}
      >
        <CircularProgress color="secondary" {...this.props.spinner} />
        {this.props.children}
      </div>
    );
  }
}

export default Spinner;
