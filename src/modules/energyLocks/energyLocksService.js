import authAxios from 'modules/shared/axios/authAxios';

export default class EnergyLocksService {
  static async update(id, data) {
    const body = {
      data: { ...data, id },
    };

    const response = await authAxios.put(
      `/lockhistory/edit`,
      body,
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const response = await authAxios.delete(`/energysrclocations`, {
      params,
    });

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const response = await authAxios.post(
      `/lockhistory`,
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
      `/energysrclocations/import`,
      body,
    );

    return response.data;
  }

  static async find(id) {
    const response = await authAxios.get(`/energysrclocations/${id}`);
    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/energydisthierarchies/asset/lockdetails`, {
      params,
    });

    return response.data;
  }

  static async listCurrentLocks(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/energydisthierarchies/asset/locked`, {
      params,
    });

    return response.data;
  }

  static async listLockHistory(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/lockhistory`, {
      params,
    });

    return response.data;
  }
}
