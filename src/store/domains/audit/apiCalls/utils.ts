import { ApiCallsItem, AuditApiCallsFilter } from './types';

export const prepareValuesToRender = (values: ApiCallsItem) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    eventDatetime: values.event_datetime,
    endpointId: values.endpoint_id,
    endpointName: values.endpoint_name,
    apiName: values.api_name,
    responseBody: values.response_body,
    requestBody: values.request_body,
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
