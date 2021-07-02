import model from 'modules/document/documentModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';
import FilesViewItem from 'view/shared/view/FilesViewItem';
import _ from 'lodash';

const { fields } = model;

class DocumentView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.docType.label}
          value={fields.docType.forView(record.docType)}
        />

        <TextViewItem
          label={fields.name.label}
          value={fields.name.forView(record.name)}
        />

        <FilesViewItem
          label={fields.url.label}
          value={fields.url.forView(record.url)}
        />

        <TextViewItem
          label={fields.tagList.label}
          value={fields.tagList.forView(record.tagList)}
        />

        <TextViewItem
          label={fields.version.label}
          value={fields.version.forView(record.version)}
        />

        {!_.isEmpty(record.orgId) && <TextViewItem
          label={fields.orgId.label}
          value={fields.orgId.forView(record.orgId.name)}
        />}

        {!_.isEmpty(record.orgPlantId) && <TextViewItem
          label={fields.orgPlantId.label}
          value={fields.orgPlantId.forView(record.orgPlantId.name)}
        />}

        {!_.isEmpty(record.orgSection) && <TextViewItem
          label={fields.orgSection.label}
          value={fields.orgSection.forView(record.orgSection.name)}
        />}
        {!_.isEmpty(record.orgAreaId) && <TextViewItem
          label={fields.orgAreaId.label}
          value={fields.orgAreaId.forView(record.orgAreaId.name)}
        />}

        {!_.isEmpty(record.orgSubAreaId) && <TextViewItem
          label={fields.orgSubAreaId.label}
          value={fields.orgSubAreaId.forView(record.orgSubAreaId.name)}
        />}

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </div>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default DocumentView;
