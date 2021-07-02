import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import selectors from 'modules/asset/assetSelectors';
// import MaterialLink from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';

class AssetViewItem extends Component {
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
    // if (this.props.hasPermissionToRead) {
    //   return (
    //     <div key={id}>
    //       <MaterialLink
    //         component={Link}
    //         to={`/asset/${id}`}
    //       >
    //         {record['name']}
    //       </MaterialLink>
    //     </div>
    //   );
    // }

    return <div key={id}>{record['name']}</div>;
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

AssetViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

// const select = (state) => ({
//   hasPermissionToRead: selectors.selectPermissionToRead(
//     state,
//   ),
// });

export default AssetViewItem;
