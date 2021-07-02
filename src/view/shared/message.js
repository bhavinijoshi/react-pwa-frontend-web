let notistakEnqueueSnackbar = null;

export default class Message {
  static registerNotistakEnqueueSnackbar(instance) {
    notistakEnqueueSnackbar = instance;
  }

  static success(arg) {
    notistakEnqueueSnackbar(arg, { variant: 'success' });
  }

  static error(arg) {
    notistakEnqueueSnackbar(arg, { variant: 'error' });
  }
  static warning(arg) {
    notistakEnqueueSnackbar(arg, { variant: 'warning' });
  }
  static info(arg) {
    notistakEnqueueSnackbar(arg, { variant: 'info' });
  }
}
