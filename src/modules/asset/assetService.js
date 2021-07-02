import authAxios from 'modules/shared/axios/authAxios';

export default class AssetService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const response = await authAxios.put(
      `/asset/${id}`,
      body,
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const response = await authAxios.delete(`/asset`, {
      params,
    });

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const response = await authAxios.post(
      `/asset`,
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
      `/asset/import`,
      body,
    );

    return response.data;
  }

  static async find(id) {
    const response = await authAxios.get(`/asset/${id}`);
    return response.data;
  }

  static async findArcFlashAsset(id) {
    const response = await authAxios.get(`/asset/arcflash/${id}`);
    return response.data;
  }

  static async list(filter, orderBy, limit, offset, checkUpdate) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
      checkUpdate
    };

    //example get request: "/api/assets?filter%5BorgId%5D=5eb1034199d4f6b59c3833fe&orderBy=&limit=10&offset=0"
    //raw filter: filter[orgId]=5eb1034199d4f6b59c3833fe&filter[name]=test&orderBy=&limit=10&offset=0

    const response = await authAxios.get(`/asset`, {
      params,
    });

    return response.data;
  }

  static async listAutocomplete(query, limit, orgPlantId, customParams) {
    const params = {
      query,
      limit,
      orgPlantId,
      ...customParams
    };

    const response = await authAxios.get(
      `/asset/autocomplete`,
      {
        params,
      },
    );

    return response.data;
  }

  static async arcFlashByPpeStatistics(filter) {
    const params = {
      filter,
    }
    const response = await authAxios.get(
      `/asset/dashboard/arcflash`,
      {
        params
      }
    );
    return response.data;
  }

  static async arcFlashReviewesExpiry(filter) {
    const params = {
      filter,
    }
    const response = await authAxios.get(
      `/asset/dashboard/arcflash/audit`,
      {
        params
      }
    );
    return response.data;
  }

  static async updateAsset(data) {
    const body = {
      data
    };

    const response = await authAxios.put(
      `/asset/hierarchy/remove`,
      body,
    );

    return response.data;
  }
}
