import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';
import PropTypes from 'prop-types';
import { copyContent } from 'utils';
import { Tooltip } from '@material-ui/core';
import { i18n } from 'i18n'

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        minWidth: '250px'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    notFound: {
        textAlign: 'center'
    },
    list: {
        '& > strong': {
            fontSize: "1.2em",
            display: 'block',
            margin: '10px 0',
            textTransform: 'capitalize'
        },
        '& p': {
            padding: '10px 5px',
            margin: 0,
            textTransform: 'capitalize'
        },
        '& p:nth-child(odd)': {
            backgroundColor: 'antiquewhite'
        }
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);



function SimpleModal(props) {
    const {
        open,
        title = '',
        content = '',
        handleClose,
        classes,
        ...rest
    } = props;

    const prettifyContent = (content, indent = 0, canShowError = true) => {
        if (content && Object.keys(content).length) {
            return Object.keys(content).map((key, index) => {
                if (typeof content[key] === "object") {
                    return (
                        <div key={key}>
                            {
                                Boolean(content[key] &&
                                    Object.keys(content[key]).length) &&
                                <strong style={{ marginLeft: `${indent}rem` }}>{key}:</strong>
                            }
                            {prettifyContent(content[key], indent + 1, false)}
                        </div>
                    )
                }
                return (
                    <p key={key} style={{ marginLeft: `${indent}rem` }}>
                        <strong>{key}</strong>: {String(content[key])}
                    </p>
                )
            })
        }
        return canShowError ? <div style={{ textAlign: 'center' }}><ErrorIcon fontSize="large" style={{ opacity: 0.6 }} /></div> : ''
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" maxWidth="xl" open={open} {...rest}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                {title}
                {content && Object.keys(content).length &&
                    <Tooltip title={i18n('common.tooltips.copyData')}>
                        <IconButton
                            size="small"
                            onClick={() => copyContent(content)}
                        >
                            <FileCopyIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                }
            </DialogTitle>
            <DialogContent dividers>
                <div className={classes.list}>
                    {prettifyContent(content)}
                </div>
            </DialogContent>
        </Dialog>
    );
}

SimpleModal.prototypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    content: PropTypes.any,
    handleClose: PropTypes.func.isRequired
}

export default withStyles(styles)(SimpleModal);