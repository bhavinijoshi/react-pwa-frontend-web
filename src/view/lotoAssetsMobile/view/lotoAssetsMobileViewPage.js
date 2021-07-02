import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import Link from '@material-ui/core/Link';
import LotoAssetsMobileView from 'view/lotoAssetsMobile/view/lotoAssetsMobileView';
import { i18n } from 'i18n';
import actions from 'modules/asset/view/assetViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/asset/view/assetViewSelectors';
import authSelectors from 'modules/auth/authSelectors';
import { withStyles } from '@material-ui/core';
import { classStyles } from '../styles';
class LotoAssetsMobileViewPage extends Component {
    componentDidMount() {
        const { dispatch, match } = this.props;
        dispatch(actions.doFind(match.params.id));
    }
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <ContentWrapper style={{ marginTop: 0 }}>
                    <div className={classes.pageheader}>
                        <Link href="/mobile/lotoassets" color="inherit">
                            {i18n('lotoAssetsView.view.title')}
                        </Link>
                    </div>
                    <LotoAssetsMobileView
                        loading={this.props.loading}
                        record={this.props.record}
                        hasPermissionToReadPlant={this.props.hasPermissionToReadPlant}
                        hasPermissionToReadOrg={this.props.hasPermissionToReadOrg}
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
        hasPermissionToReadPlant: authSelectors.selectPermissionToReadPlant(state),
        hasPermissionToReadOrg: authSelectors.selectPermissionToReadOrg(state),
    };
}

export default connect(select)(withStyles(classStyles)(LotoAssetsMobileViewPage));
