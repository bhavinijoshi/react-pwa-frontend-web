import Permissions from 'security/permissions';
import { i18n } from 'i18n';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WidgetsIcon from '@material-ui/icons/Widgets';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    icon: <HomeIcon />,
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
    home: true,
  },
  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },
  //================== Mobile Routes start =====================
  {
    path: '/mobile/lototickets',
    loader: () =>
      import('view/lotoTicketsMobile/list/LotoTicketsMobileListView'),
    menu: true,
    permissionRequired: permissions.lotoTicketsMobileRead,
    exact: true,
    icon: <ConfirmationNumberIcon />,
    label: i18n('mobileLoto.subMenu.lotoTickets'),
    mobileloto: true
  },
  {
    path: '/mobile/lototickets/view/:id',
    loader: () =>
      import('view/lotoTicketsMobileView/lotoTicketsMobileViewPage'),
    menu: false,
    permissionRequired: null,
    exact: true,
    label: i18n('mobileLoto.subMenu.lotoTickets'),
    mobileloto: true
  },
  {
    path: '/mobile/lotoassets',
    loader: () =>
      import('view/lotoAssetsMobile/list/LotoAssetsMobileListView'),
    menu: true,
    permissionRequired: permissions.lotoTicketsMobileRead,
    exact: true,
    icon: <WidgetsIcon />,
    label: i18n('mobileLoto.subMenu.lotoAssets'),
    mobileloto: true
  },
  {
    path: '/mobile/lotoassets/view/:id',
    loader: () =>
      import('view/lotoAssetsMobile/view/lotoAssetsMobileViewPage'),
    menu: false,
    permissionRequired: null,
    exact: true,
    label: i18n('mobileLoto.subMenu.lotoTickets'),
    mobileloto: true
  },
  //================== Mobile Routes End =====================
  {
    path: '/document',
    loader: () =>
      <div>Document</div>,
    permissionRequired: permissions.documentRead,
    exact: true,
    menu: false,
    dataEntry: false,
  },
  {
    path: '/document/:id',
    loader: () =>
      import('view/document/view/DocumentViewPage'),
    menu: false,
    permissionRequired: permissions.documentRead,
    exact: true,
  }
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
