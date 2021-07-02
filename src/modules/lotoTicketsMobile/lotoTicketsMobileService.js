import authAxios from 'modules/shared/axios/authAxios';

export default class lotoTicketsMobileService {

  static async find(id) {
    const response = await authAxios.get(`/lototickets/${id}`);
    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/lototickets/mobile/employee`, {
      params,
    });

    return response.data;
  }
}
