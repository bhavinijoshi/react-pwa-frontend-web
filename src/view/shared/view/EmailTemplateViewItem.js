import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class EmailTemplateViewItem extends Component {
    render() {
        if (
            !this.props.value &&
            this.props.value !== 0 &&
            this.props.value !== false
        ) {
            return null;
        }

        const value = this.props.value

        return (
            <div style={{ marginBottom: '16px' }}>
                <Typography variant="subtitle2">
                    {this.props.label}
                </Typography>
                <CKEditor
                    key="emailBodyViewer"
                    editor={ClassicEditor}
                    data={value || ""}
                    disabled={true}
                    config={{
                        toolbar: [],
                    }}
                />
            </div>
        );
    }
}

EmailTemplateViewItem.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
};

export default EmailTemplateViewItem;