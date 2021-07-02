import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import Grid from '@material-ui/core/Grid';
// import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import { connect } from 'react-redux';
import actions from 'modules/lotoAssets/list/lotoAssetsListActions';
import selectors from 'modules/lotoAssets/list/lotoAssetsListSelectors';
import authSelectors from 'modules/auth/authSelectors';
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from '@material-ui/icons/Close';
import LotoAssetsMobileListFilter from 'view/lotoAssetsMobile/list/LotoAssetsMobileListFilter';
import { getHistory } from 'modules/store';
import Spinner from 'view/shared/Spinner';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import energyLocksmodel from 'modules/energyLocks/energyLocksModel';
import { green } from '@material-ui/core/colors';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  lbltxt: {
    marginRight: '10px'
  },
  pageheader: {
    marginTop: "20px",
    backgroundColor: "white",
    padding: "10px",
    fontWeight: "bold"
  },
  drawerWidth: {
    width: 300
  },
  drawerHeader: {
    height: '65px',
    color: '#fff',
    backgroundColor: '#2196f3'
  },
  pd20: {
    padding: '20px'
  }
})
const { LOCK_STATUS } = energyLocksmodel;
class LotoAssetsMobileListView extends Component {
  constructor() {
    super()
    this.state = {
      filterDrawer: false
    }
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch({}));
  }
  handleListItemClick = (id) => {
    getHistory().push('/mobile/lotoassets/view/' + id);
  }
  closeFilterDrawer = () => {
    this.setState({ filterDrawer: false })
  }
  renderList = () => {
    const { classes, rows, } = this.props;
    return (
      <List>
        {rows.length <= 0 ?
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {i18n('table.noData')}
          </div>
          : ''}
        {rows.map((row) => {
          return (
            <>
              <ListItem alignItems="flex-start" onClick={(e) => { this.handleListItemClick(row.id) }} style={{ "cursor": "pointer" }}>

                <ListItemText
                  primary={
                    <React.Fragment>
                      <label className={classes.lbltxt}>Asset ID:</label>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        {row.name}
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <label className={classes.lbltxt}>Type:</label>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        {row.assetType}
                      </Typography>
                      <br />
                      <label className={classes.lbltxt}>Total Locks:</label>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        {row.locks}
                      </Typography>
                      <br />
                      <label className={classes.lbltxt}>Lock Status:</label>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        {row.overallLockStatus === LOCK_STATUS[2].id ? <LockOpenIcon color='error' /> :
                          row.overallLockStatus === LOCK_STATUS[0].id ? <LockIcon style={{ color: green[500] }} /> : ''
                        }
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider />
            </>
          )
        })}

      </List>

    )
  }

  handleOnBottom = () => {
    const { dispatch } = this.props;
    const { pagination, limit, offset, filter } = this.props;
    if (offset < pagination.total) {
      dispatch(actions.doFetch(filter, limit, offset, false));
    }
  }

  render() {
    const { classes, loading, } = this.props;
    return (
      <React.Fragment>
        {/* <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('lotoAssetsView.view.title')],
          ]}
        /> */}
        <BottomScrollListener onBottom={this.handleOnBottom} />
        <ContentWrapper>
          <div className={classes.pageheader}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                {i18n('lotoAssetsView.view.title')}
              </Grid>
              <Grid item xs={2}>
                <FilterListIcon onClick={() => { this.setState({ filterDrawer: true }) }}></FilterListIcon>
              </Grid>
            </Grid>
          </div>
          {loading ? <Spinner /> : this.renderList()}
        </ContentWrapper>
        <Drawer
          anchor="right"
          open={this.state.filterDrawer}
        >
          <div
            tabIndex={0}
            role="button"
          >
            <div className={classes.drawerWidth}>
              <div className={classes.drawerHeader}>
                <Grid container spacing={2} className={classes.pd20}>
                  <Grid item xs={10}>
                    <Typography> Filter </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <CloseIcon onClick={() => { this.setState({ filterDrawer: false }) }} />
                  </Grid>
                </Grid>
              </div>
              <LotoAssetsMobileListFilter closeFilterDrawer={this.closeFilterDrawer} />
            </div>
          </div>
        </Drawer>
      </React.Fragment>

    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    hasRows: selectors.selectHasRows(state),
    sorter: selectors.selectSorter(state),
    limit: selectors.selectLimit(state),
    offset: selectors.selectOffset(state),
    currentUser: authSelectors.selectCurrentUser(state),
  };
}

export default connect(select)(withStyles(styles)(LotoAssetsMobileListView));