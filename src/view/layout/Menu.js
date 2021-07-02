import React, { Component, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import authSelectors from 'modules/auth/authSelectors';
import { connect } from 'react-redux';
import PermissionChecker from 'modules/auth/permissionChecker';
import actions from 'modules/layout/layoutActions';
import layoutSelectors from 'modules/layout/layoutSelectors';
import routes from 'view/routes';
import clsx from 'clsx';
import {
  withStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
//import HomeIcon from '@material-ui/icons/Home';
import { i18n } from 'i18n';
import subMenuActions from 'modules/menu/menuActions';
import subMenuSelectors from 'modules/menu/menuSelectors';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const drawerWidth = 300;

const styles = (theme) => ({
  hide: {
    width: 0,
    flexShrink: 0,
    transitionDuration: '.2s',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    transitionDuration: '.2s',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeaderMenu: {
    display: 'flex',
    alignItems: 'center',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  toolbar: theme.mixins.toolbar,
});

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{
      flexGrow: 1,
    }}
    onClick={(e) => e.stopPropagation()}
  >
    <Link
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
      {...props}
    />
  </div>
));

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    this.toggleMenuOnResize();
    window.addEventListener(
      'resize',
      this.toggleMenuOnResize,
    );
    window.addEventListener('beforeunload', () => {
      const { menuState } = this.props;
      localStorage.setItem(
        'menuState',
        JSON.stringify(menuState),
      );
    });
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.toggleMenuOnResize,
    );
  }

  toggleMenuOnResize = () => {
    window.innerWidth < 576 && this.hideMenu();
  };

  get selectedKeys() {
    const url = this.props.url;
    if (url === '/') return url;

    const match = routes.privateRoutes.find((option) => {
      if (option.menu.exact) {
        return url === option.path;
      }

      return (
        url === option.path ||
        url.startsWith(option.path + '/')
      );
    });

    if (match) {
      return [match.path];
    }

    return null;
  }

  hideMenu = () => {
    const { dispatch } = this.props;
    dispatch(actions.doHideMenu());
  };

  showMenu = () => {
    const { dispatch } = this.props;
    dispatch(actions.doShowMenu());
  };

  match = (permission) => {
    const permissionChecker = new PermissionChecker(
      this.props.currentUser,
    );

    return permissionChecker.match(permission);
  };

  render() {
    const {
      classes,
      hasPermissionToReadArcFlashServices,
      hasPermissionToReadBLEServices,
      hasPermissionToReadLOTOServices,
      hasPermissionToReadPandemicServices,
      hasPermissionToReadMobileLOTOServices,
      hasPermissionToReadMobileLOTOMenu
    } = this.props;
    // if (!this.props.menuVisible) {
    //   return null;
    // }
    console.log("this.props.menuState ---------", this.props.menuState);
    console.log("this.selected", this.selectedKeys);
    return (
      <Drawer
        id="mainMenu"
        className={
          this.props.menuVisible
            ? classes.drawer
            : classes.hide
        }
        variant="persistent"
        anchor="left"
        open={this.props.menuVisible}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}></div>
        <div className={classes.drawerHeaderMenu}>
          <IconButton onClick={this.hideMenu} aria-label="close-menu">
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />

        {/* Home */}
        {/* <Link key="/" to="/" className="UnstyledMenuLink">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>{i18n('home.menu')}</ListItemText>
          </ListItem>
        </Link>

        <Divider /> */}

        {/*Mobile LOTO Section */}
        {hasPermissionToReadMobileLOTOMenu && hasPermissionToReadMobileLOTOServices && this.selectedKeys && (
          <Accordion
            expanded={!!this.props.menuState.mobileloto}
            onClick={(event) => {
              const { dispatch } = this.props;
              dispatch(
                subMenuActions.doToggleSubMenu('mobileloto'),
              );
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content-loto"
              id="panel1a-header-loto"
            >
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              <Typography className={classes.heading}>
                {i18n('mobileLoto.menu')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {routes.privateRoutes
                  .filter((privateRoute) => {
                    if (privateRoute.enablePandemic && !hasPermissionToReadPandemicServices) return false
                    return true
                  })
                  .filter((privateRoute) => {
                    if (privateRoute.enableArcFlash && !hasPermissionToReadArcFlashServices) return false
                    return true
                  })
                  .filter((privateRoute) => {
                    if (privateRoute.enableLOTO && !hasPermissionToReadLOTOServices) return false
                    return true
                  })
                  .filter((privateRoute) => {
                    if (privateRoute.enableBLEServices && !hasPermissionToReadBLEServices) return false
                    return true
                  })
                  .filter(
                    (privateRoute) => !!privateRoute.menu,
                  )
                  .filter(
                    (privateRoute) =>
                      !!privateRoute.mobileloto,
                  )
                  .filter(
                    (privateRoute) => !privateRoute.home,
                  )
                  .filter((privateRoutes) =>
                    this.match(
                      privateRoutes.permissionRequired,
                    ),
                  )
                  .map((privateRoute) => (
                    <CustomRouterLink
                      key={privateRoute.path}
                      to={privateRoute.path}
                    >
                      <ListItem
                        autoFocus={this.selectedKeys.includes(
                          privateRoute.path,
                        )}
                        button
                      >
                        <ListItemIcon
                          className={clsx({
                            [classes.active]: this.selectedKeys.includes(
                              privateRoute.path,
                            ),
                          })}
                        >
                          {privateRoute.icon}
                        </ListItemIcon>
                        <ListItemText
                          className={clsx({
                            [classes.active]: this.selectedKeys.includes(
                              privateRoute.path,
                            ),
                          })}
                        >
                          {privateRoute.label}
                        </ListItemText>
                      </ListItem>
                    </CustomRouterLink>
                  ))}
              </List>
            </AccordionDetails>
          </Accordion>
        )}
      </Drawer>
    );
  }
}

const select = (state) => ({
  currentUser: authSelectors.selectCurrentUser(state),
  menuVisible: layoutSelectors.selectMenuVisible(state),
  // hasPermissionToReadDashboardMenu: dashboardSelectors.selectPermissionToRead(
  //   state,
  // ),
  menuState: subMenuSelectors.selectRaw(state),


  hasPermissionToReadMobileLOTOMenu: subMenuSelectors.selectPermissionToReadMobileLOTOMenu(
    state,
  ),
  hasPermissionToReadBLEServices: authSelectors.selectPermissionToReadBLEServices(state),
  hasPermissionToReadArcFlashServices: authSelectors.selectPermissionToReadArcFlashServices(state),
  hasPermissionToReadLOTOServices: authSelectors.selectPermissionToReadLOTOServices(state),
  hasPermissionToReadPandemicServices: authSelectors.selectPermissionToReadPandemicServices(state),
  hasPermissionToReadMobileLOTOServices: authSelectors.selectPermissionToReadMobileLOTOServices(state),
});

export default connect(select)(withStyles(styles)(Menu));
