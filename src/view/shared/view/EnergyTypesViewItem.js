import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { EnergyTypesLabel } from './EnergyTypesLabel';

class EnergyTypesViewItem extends Component {
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
    // if (this.props.hasPermissionToRead) {
    //   return (
    //     <div key={record.id}>
    //       {/* <MaterialLink
    //         component={Link}
    //         to={`/energytypes/${record.id}`}
    //       >
    //         <EnergyTypesLabel record={record} />
    //       </MaterialLink> */}
    //       <Typography variant="subtitle2">
    //       <EnergyTypesLabel record={record} />
    //     </Typography>
    //     </div>
    //   );
    // }

    return <EnergyTypesLabel record={record} />
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

EnergyTypesViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};



export default EnergyTypesViewItem;
