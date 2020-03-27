import { apiClientService } from 'services';

// import { sysPropsMock, successResponseMock } from './mock';

// import { throttleUtil } from 'utils';

import { IEditableSysPropToSend, ISysPropFilterToSend } from './types';

export const deleteSysProp = (id: number | string) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.delete(`ui/administration/system_properties/${id}`);

export const addSysProp = (data: IEditableSysPropToSend) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/administration/system_properties', { data });

export const updateSysProps = (data: IEditableSysPropToSend) =>
  // throttleUtil.getDataAfter(successResponseMock, 100);
  apiClientService.put('ui/administration/system_properties', { data });

export const filterSysProps = (data: ISysPropFilterToSend) =>
  // throttleUtil.getDataAfter(sysPropsMock, 500);
  apiClientService.post('ui/administration/system_properties/get', { data });
