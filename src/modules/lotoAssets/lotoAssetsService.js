import authAxios from 'modules/shared/axios/authAxios';

export default class LotoAssetsService {
  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/asset/loto/view`, {
      params,
    });

    return response.data;
  }
}
