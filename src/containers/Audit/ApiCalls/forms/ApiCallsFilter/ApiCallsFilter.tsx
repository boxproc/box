import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { Delimiter, InputField, MaskField, SelectField } from 'components';

import { dateFormat, maskFormat } from 'consts';

import { HandleGetEndpointsByInstitutionId } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface ApiCallsFilterProps {
  getEndpointsByInstitutionId: HandleGetEndpointsByInstitutionId;
  institutionValue: SelectValues;
  institutionsOptions: Array<SelectValues>;
  endpointsOptions: Array<SelectValues>;
  isLoadingEndpoints: boolean;
}

const ApiCallsFilter: React.FC<ApiCallsFilterProps> = ({
  institutionValue,
  getEndpointsByInstitutionId,
  institutionsOptions,
  endpointsOptions,
  isLoadingEndpoints,
}) => {
  const currentInstitutionId = institutionValue && institutionValue.value;

  React.useEffect(
    () => {
      if (currentInstitutionId) {
        getEndpointsByInstitutionId(currentInstitutionId);
      }
    },
    [getEndpointsByInstitutionId, currentInstitutionId]
  );

  return (
    <React.Fragment>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          options={institutionsOptions}
          placeholder="Select Institution"
          isClearable={false}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="endpointId"
          name="endpointId"
          component={SelectField}
          label="Endpoint"
          options={endpointsOptions}
          placeholder="Select endpoint"
          isLoading={isLoadingEndpoints}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="apiName"
          name="apiName"
          component={InputField}
          label="API Name"
          placeholder="Enter api name"
        />
      </Box>
      <Delimiter />
      <Box width="200px" p="10px">
        <Field
          id="apiCallsDateTimeFrom"
          name="apiCallsDateTimeFrom"
          component={MaskField}
          label="Date&nbsp;/&nbsp;Time From"
          placeholder={dateFormat.DATE_TIME}
          mask={maskFormat.DATE_TIME}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
      <Box width="200px" p="10px">
        <Field
          id="apiCallsDateTimeTo"
          name="apiCallsDateTimeTo"
          component={MaskField}
          label="Date&nbsp;/&nbsp;Time To"
          placeholder={dateFormat.DATE_TIME}
          mask={maskFormat.DATE_TIME}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
    </React.Fragment>
  );
};

export default ApiCallsFilter;
