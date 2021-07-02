import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
// import { i18n } from 'i18n';
import { withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Fragment } from 'react';

const classStyles = (theme) => ({
  root: {
    // height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});


const TreeItems = (props) => {
  return (
    <ul>
      {props.data.map((item) => (
        <TreeItem nodeId={props.parentId + "+" + item.id} label={item.text} key={item.id}>
          {Boolean(item?.items?.length) && <TreeItems data={item.items} parentId={props.parentId + "+" + item.id} />}
        </TreeItem>
      ))}
    </ul>
  );
};

class TreeViewFormItemNotFast extends Component {
  handleSelect = (e, data) => {
    const { form, name } = this.props;
    form.setFieldTouched(name);

    const { multiSelect } = this.props;
    if (multiSelect) {
      return this.handleSelectMultiple(data);
    } else {
      return this.handleSelectOne(data);
    }
  };

  handleSelectMultiple = (values) => {
    const { form, name } = this.props;

    if (!values) {
      form.setFieldValue(name, []);
      return;
    }

    form.setFieldValue(
      name,
      values.filter(Boolean),
    );
  };

  handleSelectOne = (data) => {
    const { form, name } = this.props;

    if (!data) {
      form.setFieldValue(name, undefined);
      return;
    }

    form.setFieldValue(name, data);
  };

  render() {
    const {
      label,
      options,
      multiSelect,
      classes
    } = this.props;
    console.log("options", options);
    return (
      <Fragment>
        <p style={{
          color: 'rgba(0, 0, 0, 0.54)',
          padding: 0,
          fontSize: '0.9rem',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '0.00938em',
          marginTop: '12px',
          marginBottom: '5px'
        }}>
          {label}
        </p>
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          onNodeSelect={this.handleSelect}
          multiSelect={multiSelect}
        >
          {Boolean(options?.length) ?
            options.map(option => <TreeItem nodeId={option.id} label={option.text} key={option.id}>
              {Boolean(option?.items?.length) && <TreeItems data={option.items} parentId={option.id} />}
            </TreeItem>) : 'No Data'}
        </TreeView>
      </Fragment>
    );
  }
}

TreeViewFormItemNotFast.defaultProps = {
  required: false,
  isClearable: true,
};

TreeViewFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  mode: PropTypes.string,
  isClearable: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

class TreeViewFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <TreeViewFormItemNotFast
            {...this.props}
            form={form}
          />
        )}

      />
    );
  }
}

export default withStyles(classStyles)(TreeViewFormItem);
