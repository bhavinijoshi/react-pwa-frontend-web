import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import Link from '@material-ui/core/Link';
import LotoTicketsMobileView from 'view/lotoTicketsMobileView/lotoTicketsMobileView';
import { i18n } from 'i18n';
import actions from 'modules/lotoTicketsMobileView/view/lotoTicketsMobileViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/lotoTicketsMobileView/view/lotoTicketsMobileViewSelectors';
import authSelectors from 'modules/auth/authSelectors';
import { withStyles } from '@material-ui/core';
import { classStyles } from './styles';
import energyLockActions from 'modules/energyLocks/list/energyLocksListActions';
class lotoTicketsMobileViewPage extends Component {
    componentDidMount() {
        const { dispatch, match, currentUser } = this.props;
        dispatch(actions.doFind(match.params.id));
        //  dispatch(documentsActions.doFetch({ docType: DOC_TYPES_IDS.LOTO, sourceId: match.params.id }));
        dispatch(energyLockActions.doFetchLockHistory({ "employeeId": currentUser.employeeId }));
        // dispatch(energyLockActions.doFetchCurrentLocks({}));
    }
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <ContentWrapper style={{ marginTop: 0 }}>
                    <div className={classes.pageheader}>
                        <Link href="/mobile/lototickets" color="inherit">
                            {i18n('lotoTicketsView.view.title')}
                        </Link>
                    </div>
                    <LotoTicketsMobileView
                        loading={this.props.loading}
                        record={this.props.record}
                        hasPermissionToReadPlant={this.props.hasPermissionToReadPlant}
                        hasPermissionToReadOrg={this.props.hasPermissionToReadOrg}
                        classes={classes}
                        recordId={this.props.match.params.id}
                    />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

function select(state) {
    return {
        loading: selectors.selectLoading(state),
        record: selectors.selectRecord(state),
        currentUser: authSelectors.selectCurrentUser(state),
        hasPermissionToReadPlant: authSelectors.selectPermissionToReadPlant(state),
        hasPermissionToReadOrg: authSelectors.selectPermissionToReadOrg(state),
    };
}

export default connect(select)(withStyles(classStyles)(lotoTicketsMobileViewPage));
