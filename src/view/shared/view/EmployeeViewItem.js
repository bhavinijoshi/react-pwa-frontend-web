import PropTypes from 'prop-types';
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

class EmployeeViewItem extends Component {
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
    const employeeId = record.id || record._id;
    if (this.props.hasPermissionToRead) {
      return (
        <div key={employeeId}>
          <Typography variant="subtitle1" >
            {record['lastName'] + ", " + record['firstName']}
          </Typography>
        </div>
      );
    }

    return <div key={employeeId}>{record['lastName'] + ", " + record['firstName']}</div>;
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

EmployeeViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};



export default EmployeeViewItem;
