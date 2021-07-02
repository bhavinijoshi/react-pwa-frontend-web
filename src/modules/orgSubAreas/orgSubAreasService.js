import authAxios from 'modules/shared/axios/authAxios';

export default class OrgSubAreasService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const response = await authAxios.put(
      `/org-sub-areas/${id}`,
      body,
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const response = await authAxios.delete(`/org-sub-areas`, {
      params,
    });

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const response = await authAxios.post(
      `/org-sub-areas`,
      body,
    );

    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: values,
      importHash,
    };

    const response = await authAxios.post(
      `/org-sub-areas/import`,
      body,
    );

    return response.data;
  }

  static async find(id) {
    const response = await authAxios.get(`/org-sub-areas/${id}`);
    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/org-sub-areas`, {
      params,
    });

    return response.data;
  }

  static async listAutocomplete(query, limit, orgAreaId) {
    const params = {
      query,
      limit,
      orgAreaId
    };

    const response = await authAxios.get(
      `/org-sub-areas/autocomplete`,
      {
        params,
      },
    );

    return response.data;
  }
}
