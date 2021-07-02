import React from 'react';
import { withStyles } from '@material-ui/core';
import Spinner from './Spinner';

const styles = (theme) => ({
    overlayBackdrop: {
        position: "relative",
        width: "100%",
        height: "100%"
    },
    spinner: {
        position: "absolute",
        backgroundColor: "rgba(255,255,255,0.6)",
        width: "100%",
        height: "100%",
        display: "flex",
        zIndex: "101"
    }
})

class OverlayLoader extends React.Component {
    render() {
        const {
            classes,
            children,
            isLoading = false,
            customStyle,
            customStyleWrapper
        } = this.props;
        return (
            <div className={classes.overlayBackdrop + (customStyleWrapper ? " " + customStyleWrapper : '')}>
                {isLoading && <div className={classes.spinner + (customStyle ? " " + customStyle : '')}>
                    <Spinner spinner={{ color: "primary" }} />
                </div>}
                {children}
            </div>
        )
    }
}

export default withStyles(styles)(OverlayLoader);