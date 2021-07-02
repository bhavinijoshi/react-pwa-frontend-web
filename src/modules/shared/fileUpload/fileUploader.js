import { uuid } from 'uuidv4';
import { i18n } from 'i18n';
import filesize from 'filesize';
import { AuthToken } from 'modules/auth/authToken';
import Axios from 'axios';
import config from '../../../config/index';

function extractExtensionFrom(filename) {
  if (!filename) {
    return null;
  }

  const regex = /(?:\.([^.]+))?$/;
  return regex.exec(filename)[1];
}

export default class FileUploader {
  static validate(file, schema) {
    if (!schema) {
      return;
    }

    if (schema.image) {
      if (!file.type.startsWith('image')) {
        throw new Error(i18n('fileUploader.image'));
      }
    }

    if (schema.size && file.size > schema.size) {
      throw new Error(
        i18n('fileUploader.size', filesize(schema.size)),
      );
    }

    const extension = extractExtensionFrom(file.name);

    if (
      schema.formats &&
      !schema.formats.includes(extension)
    ) {
      throw new Error(
        i18n(
          'fileUploader.formats',
          schema.formats.join('/'),
        ),
      );
    }
  }

  static async upload(path, file, schema) {
    try {
      this.validate(file, schema);
    } catch (error) {
      return Promise.reject(error);
    }

    const extension = extractExtensionFrom(file.name);
    const id = uuid();
    const filename = `${id}.${extension}`;
    const privateUrl = `${path}/${filename}`;

    const publicUrl = await this.uploadToServer(
      file,
      path,
      filename,
    );

    return {
      id: id,
      name: file.name,
      sizeInBytes: file.size,
      //for geosubsite, extract privateUrl url from publicUrl
      privateUrl: publicUrl.indexOf(privateUrl) >= 0 ? privateUrl : publicUrl.split('.net/')[1],
      publicUrl,
      new: true,
    };
  }

  static async uploadToServer(file, path, filename) {
    const token = await AuthToken.get();
    const currentUser = JSON.parse(
      sessionStorage.getItem('currentUser'),
    );
    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', filename);
    formData.append('orgId', currentUser.orgId);
    const res = await Axios.post(
      //`${config.backendUrl}/upload/${path}`,
      `${config.REACT_APP_BACKEND_URL}/upload/${path}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: token ? `Bearer ${token}` : '',
        },
      },
    );

    const privateUrl = `${path}/${filename}`;

    //return `${config.backendUrl}/download?privateUrl=${privateUrl}`;

    // for geosubsites, we are uploading floor image on Azure so we will receive publicUrl in response data
    return res?.data?.publicUrl || `${config.REACT_APP_BACKEND_URL}/download?privateUrl=${privateUrl}`;
  }
}
