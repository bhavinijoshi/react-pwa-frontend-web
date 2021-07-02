import React, { Fragment } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  withStyles,
} from '@material-ui/core';
import QrReader from 'react-qr-reader';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { i18n } from 'i18n';

const styles = (theme) => ({
  matchFoundIcon: {
    color: 'limegreen',
    fontSize: '3rem',
  },
  matchNotFoundIcon: {
    color: 'crimson',
    fontSize: '3rem',
  },
});

class QrCodeReader extends React.Component {
  render() {
    const {
      closeQrReader,
      classes,
      onQRCodeError,
      onQRCodeScan,
      displayText,
      isOpenQRCodeReader,
      isDoneReading,
      errorDisplayText,
    } = this.props;
    return (
      <div
        style={{ position: 'fixed', top: 120, right: 20 }}
      >
        <Dialog
          open={isOpenQRCodeReader}
          onClose={closeQrReader}
          aria-labelledby="form-dialog-title"
        // style={{ zIndex: 99 }}
        >
          {!isDoneReading && (
            <DialogTitle id="form-dialog-title">
              {i18n('entities.qrcodeReader.healthPass')}
            </DialogTitle>
          )}
          <DialogContent>
            {!isDoneReading && (
              <Fragment>
                <p>
                  {i18n(
                    'entities.qrcodeReader.displayHealthPass',
                  )}
                </p>
                <QrReader
                  delay={300}
                  onError={onQRCodeError}
                  onScan={onQRCodeScan}
                  style={{ width: '100%' }}
                />
              </Fragment>
            )}
            {isDoneReading && (
              <Typography gutterBottom align="center">
                {!errorDisplayText ? (
                  <Fragment>
                    <CheckCircleIcon
                      className={classes.matchFoundIcon}
                    />
                    <Typography variant="h4">
                      {i18n(
                        'entities.qrcodeReader.matchFound',
                      )}
                    </Typography>
                  </Fragment>
                ) : (
                    <Fragment>
                      <CancelIcon
                        className={
                          classes.matchNotFoundIcon
                        }
                      />
                      <Typography variant="h4">
                        {i18n(
                          'entities.qrcodeReader.matchNotFound',
                        )}
                      </Typography>
                    </Fragment>
                  )}
                <hr />
                <Typography variant="h6">
                  {displayText || errorDisplayText}
                </Typography>
              </Typography>
            )}
            {!isDoneReading && errorDisplayText && (
              <Typography
                color="error"
                variant="h6"
                align="center"
              >
                {errorDisplayText}
              </Typography>
            )}
            <DialogActions>
              <Button
                onClick={closeQrReader}
                color="primary"
                name="Cancel"
              >
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(QrCodeReader);
