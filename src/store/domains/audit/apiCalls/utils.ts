import { IApiCallData, IApiCallsFilter } from './types';

import { ISelectValue } from 'types';

export const prepareDataToRender = (data: IApiCallData, institution?: ISelectValue) => {
  if (!data) {
    return null;
  }

  const {
    id,
    endpoint_id,
    endpoint_name,
    event_datetime,
    api_name,
    request_body,
    response_body,
  } = data;

  return {
    id,
    institutionId: institution && institution.label,
    endpointId: endpoint_id,
    endpointName: endpoint_name,
    eventDatetime: event_datetime,
    apiName: api_name,
    requestBody: request_body,
    responseBody: response_body,
  };
};

export const prepareFilterToSend = (data: Partial<IApiCallsFilter>) => {
  if (!data) {
    return null;
  }

  const { institutionId, endpointId, apiName, apiCallsDateTimeFrom, apiCallsDateTimeTo } = data;

  return {
    institution_id: institutionId ? institutionId.value : null,
    endpoint_id: endpointId ? endpointId.value : null,
    api_name: apiName ? apiName : null,
    date_from: apiCallsDateTimeFrom ? apiCallsDateTimeFrom : null,
    date_to: apiCallsDateTimeTo ? apiCallsDateTimeTo : null,
  };
};
