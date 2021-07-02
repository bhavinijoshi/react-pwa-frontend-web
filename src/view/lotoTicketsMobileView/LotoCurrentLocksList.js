import React, { Component } from 'react';
import { i18n } from 'i18n';
import LotoTicketsService from 'modules/lotoTicketsMobileView/lotoTicketsMobileViewService';
import { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Spinner from 'view/shared/Spinner';
import { Dialog, DialogContent, DialogTitle, IconButton, Button } from '@material-ui/core';
import model from 'modules/energyLocks/energyLocksModel';
import FormSchema from 'view/shared/form/formSchema';
import FormWrapper, { FormButtons, } from 'view/shared/styles/FormWrapper';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import authSelectors from 'modules/auth/authSelectors';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import EnergyLocksService from 'modules/energyLocks/energyLocksService';

const { fields } = model;
class LotoCurrentLocksList extends Component {
    state = {
        currentLocksError: null,
        currentLocksTableSettings: {
            limit: 5,
            offset: 0,
            count: 0,
            orderBy: '',
        },
        isCurrentLocksTableLoading: false,
        currentLocksTableHistory: null,
        isOpenEditLock: false,
        editLockData: {}, selectedLockStatus: null,
        saveLoading: false
    }
    currentLocksTableRef = React.createRef();

    schema = new FormSchema(fields.id, [
        fields.lockStatus
    ]);


    componentDidMount() {
        this.loadCurrentLocksData()
    }

    loadCurrentLocksData = async () => {
        try {
            const { currentLocksTableSettings, } = this.state;

            this.setState({
                isCurrentLocksTableLoading: true,
            });
            let filter = {
                id: this.props.recordId,
            };
            let limit = currentLocksTableSettings.limit;
            let offset = currentLocksTableSettings.offset;
            let orderBy = currentLocksTableSettings.orderBy;
            const data = await LotoTicketsService.getCurrentLocks(
                filter,
                orderBy,
                limit,
                offset,
            );
            const currentLocksTableHistory = {
                data: data ? data.rows : []
            };
            this.setState(
                {
                    currentLocksTableHistory,
                    isCurrentLocksTableLoading: false,
                    currentLocksTableSettings: {
                        ...currentLocksTableSettings,
                        count: data.count,
                    },
                },
                () => this.currentLocksTableRef.current?.onQueryChange());
        } catch (error) {
            this.setState({ currentLocksError: i18n('common.apiError'), isCurrentLocksTableLoading: false })
        };
    }

    handleCloseEditLock = () => {
        this.setState({ isOpenEditLock: false })
    }

    handleListItemClick = (row) => {
        this.setState({ isOpenEditLock: true, editLockData: row })
    }

    renderList = () => {
        const { currentLocksTableHistory, currentLocksError } = this.state
        const { classes } = this.props;
        return (
            currentLocksError ?
                <div className={classes.currentLocksError}>{currentLocksError}</div> :
                <List>
                    {currentLocksTableHistory?.data.length <= 0 ?
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {i18n('table.noData')}
                        </div>
                        : ''}
                    {currentLocksTableHistory?.data.map((row, key) => {
                        return (
                            <>
                                <ListItem key={key} alignItems="flex-start" onClick={(e) => { this.handleListItemClick(row) }} style={{ "cursor": "pointer" }}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <label className={classes.lbltxt}>Energy Hierarchy:</label>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textSecondary"
                                                >
                                                    {row.energyHierarchy.name}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <React.Fragment>
                                                <label className={classes.lbltxt}>Asset Id:</label>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textSecondary"
                                                >
                                                    {row.name}
                                                </Typography>
                                                <br />
                                                <label className={classes.lbltxt}>#Locks:</label>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textSecondary"
                                                >
                                                    {row.locks}
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

    handleSubmit = async (values) => {
        const { editLockData } = this.state
        const { id, ...data } = this.schema.cast(values);

        var id1 = editLockData.energyLocks[0]._id;
        var reqObj = {
            assetId: editLockData.assetId,
            employeeId: editLockData.energyLocks[0].employeeId,
            energyDistHierarchyId: editLockData.energyHierarchy.id,
            lockIdentifierNum: editLockData.energyLocks[0].lockIdentifierNum,
            lockStatus: data.lockStatus
        }
        this.setState({ saveLoading: true })
        await EnergyLocksService.update(id1, reqObj);
        this.setState({ saveLoading: false })
        this.loadCurrentLocksData()
        this.handleCloseEditLock()
    };
    initialValues = () => {
        return this.schema.initialValues({});
    };
    render() {
        const { isCurrentLocksTableLoading, isOpenEditLock, saveLoading } = this.state

        return (
            <Fragment>
                {isCurrentLocksTableLoading ?
                    <Spinner />
                    : this.renderList()}
                <Dialog
                    open={isOpenEditLock}
                    onClose={this.handleCloseEditLock}
                    aria-labelledby="form-dialog-title"
                    fullWidth={true}
                    maxWidth="md">
                    <DialogTitle
                        id="form-dialog-title"
                        disableTypography
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <h2 style={{ margin: 0 }}>
                            Edit Lock
                        </h2>
                        <IconButton >
                            <CloseIcon onClick={this.handleCloseEditLock} />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent style={{ 'height': '250px' }}>
                        <FormWrapper>
                            <Formik
                                initialValues={this.initialValues()}
                                validationSchema={this.schema.schema}
                                onSubmit={this.handleSubmit}
                                render={(form) => {
                                    return (
                                        <form onSubmit={form.handleSubmit}>
                                            <SelectFormItem
                                                name={fields.lockStatus.name}
                                                label={fields.lockStatus.label}
                                                required={fields.lockStatus.required}
                                                options={fields.lockStatus.options.map(
                                                    (item) => ({
                                                        value: item.id,
                                                        label: item.label,
                                                    }
                                                    ),
                                                )}
                                                form={form}
                                            />
                                            <FormButtons>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    disabled={saveLoading}
                                                    type="button"
                                                    onClick={form.handleSubmit}
                                                    startIcon={<SaveIcon />}
                                                >
                                                    {i18n('common.save')}
                                                </Button>

                                                <Button
                                                    disabled={saveLoading}
                                                    onClick={form.handleReset}
                                                    type="button"
                                                    startIcon={<UndoIcon />}
                                                >
                                                    {i18n('common.reset')}
                                                </Button>

                                                {this.props.onCancel ? (
                                                    <Button
                                                        disabled={saveLoading}
                                                        onClick={() => this.props.onCancel()}
                                                        type="button"
                                                        startIcon={<CloseIcon />}
                                                    >
                                                        {i18n('common.cancel')}
                                                    </Button>
                                                ) : null}
                                            </FormButtons>
                                        </form>
                                    );
                                }}
                            />
                        </FormWrapper>

                    </DialogContent>

                </Dialog>
            </Fragment>
        );
    }
}
function select(state) {
    return {
        currentUser: authSelectors.selectCurrentUser(state),
    };
}
export default connect(select)(LotoCurrentLocksList);