import authAxios from 'modules/shared/axios/authAxios';

export default class DocumentService {

  static async find(id) {
    const response = await authAxios.get(`/document/${id}`);
    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/document`, {
      params,
    });

    return response.data;
  }

}
