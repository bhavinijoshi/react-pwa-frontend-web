import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class TextAreaViewItem extends Component {
    render() {
        if (
            !this.props.value &&
            this.props.value !== 0 &&
            this.props.value !== false
        ) {
            return null;
        }
        const values = Object.keys(this.props.value).map((item, i) => (
            <Typography key={"envversion" + i} variant="subtitle1">{item}: {this.props.value[item]}</Typography>
        ))

        return (
            <div style={{ marginBottom: '16px' }}>
                <Typography variant="subtitle2">
                    {this.props.label}
                </Typography>
                {values}
            </div>
        );
    }
}

TextAreaViewItem.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    prefix: PropTypes.string,
};

export default TextAreaViewItem;
