import { ApiCallsItem, AuditApiCallsFilter } from './types';

import { SelectValues } from 'types';

export const prepareValuesToRender = (values: ApiCallsItem, institution?: SelectValues) => {
  if (!values) {
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
  } = values;

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

export const preparedFilterToSend = (params: Partial<AuditApiCallsFilter>) => {
  if (!params) {
    return null;
  }

  const { institutionId, endpointId, apiName, apiCallsDateTimeFrom, apiCallsDateTimeTo } = params;

  return {
    institution_id: institutionId ? institutionId.value : null,
    endpoint_id: endpointId ? endpointId.value : null,
    api_name: apiName ? apiName : null,
    date_from: apiCallsDateTimeFrom ? apiCallsDateTimeFrom : null,
    date_to: apiCallsDateTimeTo ? apiCallsDateTimeTo : null,
  };
};
