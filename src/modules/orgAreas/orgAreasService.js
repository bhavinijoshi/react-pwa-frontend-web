import authAxios from 'modules/shared/axios/authAxios';

export default class OrgAreasService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const response = await authAxios.put(
      `/org-areas/${id}`,
      body,
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const response = await authAxios.delete(`/org-areas`, {
      params,
    });

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const response = await authAxios.post(
      `/org-areas`,
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
      `/org-areas/import`,
      body,
    );

    return response.data;
  }

  static async find(id) {
    const response = await authAxios.get(`/org-areas/${id}`);
    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/org-areas`, {
      params,
    });

    return response.data;
  }

  static async listAutocomplete(query, limit, orgSectionId) {
    const params = {
      query,
      limit,
      orgSectionId
    };

    const response = await authAxios.get(
      `/org-areas/autocomplete`,
      {
        params,
      },
    );

    return response.data;
  }
}
