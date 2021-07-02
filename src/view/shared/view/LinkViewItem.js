import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    linkStyle: {
        color: '#2196f3',
        textDecoration: 'none'
    }
})

class LinkViewItem extends Component {
    render() {
        if (
            !this.props.value &&
            this.props.value !== 0 &&
            this.props.value !== false
        ) {
            return null;
        }

        const value = `${this.props.prefix ? `${this.props.prefix}` : ''
            }${this.props.value}`;
        return (
            <div style={{ marginBottom: '16px' }}>
                <Typography variant="subtitle2">
                    {this.props.label}
                </Typography>
                <a
                    className={this.props.classes.linkStyle}
                    href={value}
                    target={this.props.target}
                >
                    {value}
                </a>
            </div>
        );
    }
}

LinkViewItem.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    prefix: PropTypes.string,
    target: PropTypes.string
};

export default withStyles(styles)(LinkViewItem);
