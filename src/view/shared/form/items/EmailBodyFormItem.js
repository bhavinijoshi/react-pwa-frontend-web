import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormErrors from 'view/shared/form/formErrors';

export class EmailBodyFormItem extends Component {
    render() {
        const {
            label,
            name,
            form,
            hint,
            // type,
            // placeholder,
            // autoFocus,
            // autoComplete,
            // inputProps,
            // required,
            // disabled,
            errorMessage,
        } = this.props;

        return (
            <div>
                <p style={{ color: form.errors[name] ? "red" : "" }}>{label}</p>
                <CKEditor
                    key="emailBodyEditor"
                    editor={ClassicEditor}
                    data={form.values[name] || ""}
                    // onInit={editor => {
                    //     // You can store the "editor" and use when it is needed.
                    //     console.log('Editor is ready to use!', editor);
                    // }}
                    // onBlur={(event, editor) => {
                    //     console.log('Blur.', editor);
                    // }}
                    // onFocus={(event, editor) => {
                    //     console.log('Focus.', editor);
                    // }}
                    config={{
                        removePlugins: ['ImageUpload']
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        form.setFieldValue(name, data)
                        form.setFieldTouched(name);
                    }}
                />
                <p style={{ color: '#f44336', marginLeft: '14px', fontSize: '0.75rem' }}>
                    {
                        FormErrors.displayableError(
                            form,
                            name,
                            errorMessage,
                        ) || hint
                    }
                </p>
            </div>
        );
    }
}

EmailBodyFormItem.defaultProps = {
    type: 'text',
    required: false,
};

EmailBodyFormItem.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
    hint: PropTypes.string,
    autoFocus: PropTypes.bool,
    prefix: PropTypes.string,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
    inputProps: PropTypes.object,
    disabled: PropTypes.bool
};

export default EmailBodyFormItem;
