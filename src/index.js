import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { i18n } from 'i18n';

//use devexpress for a lot of nice components, see demo here and code examples
//https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/HierarchicalDataStructure/React/Light/

// Enable error logging to sentry.io: npm install @sentry/browser
import * as Sentry from '@sentry/browser';
Sentry.init({ dsn: "https://832cf1393f5846b085814246ed904fe9@o393028.ingest.sentry.io/5241546" });


(async function () {
  document.title = i18n('app.title');

  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://cra.link/PWA
  serviceWorkerRegistration.register();
})();
