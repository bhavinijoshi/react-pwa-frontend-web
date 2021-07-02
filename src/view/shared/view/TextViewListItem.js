import PropTypes from 'prop-types';
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

class TextViewListItem extends Component {
  valueAsArray = () => {
    const { value } = this.props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  displayableRecord = (record) => {
    const id = record.id || record._id
    return (
      <div key={id}>
        <Typography variant="subtitle1">
          {record['name']}
        </Typography>
      </div>
    );
  };

  render() {
    if (!this.valueAsArray().length) {
      return null;
    }

    return (
      <div style={{ marginBottom: '16px' }}>
        <Typography variant="subtitle2">
          {this.props.label}
        </Typography>
        {this.valueAsArray().map((value) =>
          this.displayableRecord(value),
        )}
      </div>
    );
  }
}

TextViewListItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

export default TextViewListItem;
