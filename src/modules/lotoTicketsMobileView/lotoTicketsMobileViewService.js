import authAxios from 'modules/shared/axios/authAxios';

export default class lotoTicketsMobileViewService {
  static async find(id) {
    const response = await authAxios.get(`/lototickets/${id}`);
    return response.data;
  }
  static async getCurrentLocks(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/lototickets/asset/locked`, {
      params,
    });
    return response.data;
  }
}
