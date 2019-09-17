import { ApiCallsItem, AuditApiCallsFilterParams } from './types';

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
    description: values.description,
    institutionId: values.institution_id,
  };
};

export const preparedFilterParamsToSend = (params: Partial<AuditApiCallsFilterParams>) => {
  if (!params) {
    return null;
  }

  const { institutionId, endpointId, apiName, dateFrom, dateTo } = params;

  return {
    institution_id: institutionId ? institutionId : null,
    endpoint_id: endpointId ? endpointId : null,
    api_name: apiName ? apiName : null,
    date_from: dateFrom ? dateFrom : null,
    date_to: dateTo ? dateTo : null,
  };
};
