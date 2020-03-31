// import { successResponseMock } from 'consts';
import { apiClientService } from 'services';
// import { sysPropsMock } from './mock';
import { IEditableSysPropToSend, ISysPropFilterToSend } from './types';
// import { throttleUtil } from 'utils';

/**
 * Delete system property API
 */
export const deleteSysProp = (id: number | string) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.delete(`ui/administration/system_properties/${id}`);

/**
 * Add system property API
 */
export const addSysProp = (data: IEditableSysPropToSend) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/administration/system_properties', { data });

/**
 * Update system property API
 */
export const updateSysProps = (data: IEditableSysPropToSend) =>
  // throttleUtil.getDataAfter(successResponseMock, 100);
  apiClientService.put('ui/administration/system_properties', { data });

/**
 * Filter system properties API
 */
export const filterSysProps = (data: ISysPropFilterToSend) =>
  // throttleUtil.getDataAfter(sysPropsMock, 500);
  apiClientService.post('ui/administration/system_properties/get', { data });
