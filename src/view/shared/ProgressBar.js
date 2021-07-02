import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: true });
NProgress.configure({
  template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner" style="background: #fff;display: flex;height: 100%;align-items: center;width: 100%;justify-content: center;top: 0;right: 0;"><div class="spinner-icon" style="width: 100px;height: 100px;border: solid 3px transparent;border-top-color: #29d;border-left-color: #29d;"></div></div>'
});

export default class ProgressBar {
  static start() {
    NProgress.start();
  }

  static done() {
    NProgress.done();
  }
}
