import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'react-dropdown-tree-select/dist/styles.css'
import { FormControl, FormHelperText } from '@material-ui/core';
import DropdownTreeSelect from './DropdownTreeSelect';

const styles = (theme) => ({
    label: {
        position: "relative",
        top: "-11px",
        left: "10px",
        background: "white",
        padding: "0 5px 0px 5px",
        fontSize: "12px"
    },
    control: {
        width: "100%"
    },
    errorText: {
        color: "#f44336",
        marginLeft: "14px"
    },
    wrapper: {
        border: "1px solid rgb(203 203 203)",
        borderRadius: "4px",
    },
    errorwWrapper: {
        border: "1px solid #f44336",
        borderRadius: "4px",
    },
    dropdown: {
        '& div': {
            // background: "#fff !important",
            zIndex: "100 !important",
            width: "100% !important",
            '& div': {
                padding: "8px 0 8px 5px !important",
                fontSize: '16px'
            },
            '& li': {
                width: "97%",
                '& label': {
                    '& input': {
                        width: "20px",
                        height: "18px"
                    }
                }
            }
        },
        '& a': {
            border: "none !important",
            width: "100%",
            padding: "0 16px 10px 8px !important",
            '& ul': {
                width: "100%",
                '& li': {
                    width: 'fit-content'
                },
                '& li:last-of-type': {
                    width: "97%",
                    '& input': {
                        borderBottom: "none !important",
                        width: "100%",
                        fontSize: "16px"
                    },
                    '& label': {
                        '& input': {
                            width: "20px",
                            height: "20px"
                        }
                    }
                }
            }
        }
    }
})

class DropDownTreeSelectFormItem extends PureComponent {

    handleSelect = (data) => {
        const { form, name } = this.props;
        form.setFieldValue(name,
            data
        )
    }

    render() {
        const {
            label,
            name,
            form,
            disabled,
            classes,
            options,
        } = this.props;
        return (
            <FormControl
                className={classes.control}
            >
                <div className={!form.errors[name] ? classes.wrapper : classes.errorwWrapper}>
                    <label className={classes.label}>{label}</label>
                    <DropdownTreeSelect
                        className={
                            classes.dropdown
                        }
                        data={options}
                        onChange={(_, selectedItems) => this.handleSelect(selectedItems)}
                        disabled={disabled}
                    />
                </div>
                {form.errors[name] &&
                    <FormHelperText
                        className={classes.errorText}
                    >
                        {form.errors[name]}
                    </FormHelperText>
                }
            </FormControl>
        )
    }
}

DropDownTreeSelectFormItem.defaultProps = {
    required: false,
};

DropDownTreeSelectFormItem.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array
};

export default withStyles(styles)(DropDownTreeSelectFormItem);
