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
          isDisabled={false}
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
          isDisabled={false}
          isLoading={isLoadingEndpoints}
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="apiName"
          name="apiName"
          component={InputField}
          label="API Name"
          placeholder="Enter api name"
          isDisabled={false}
        />
      </Box>
      <Delimiter />
      <Box width="200px" p="10px">
        <Field
          id="dateFrom"
          name="dateFrom"
          component={MaskField}
          label="Date / Time From"
          placeholder={dateFormat.DATE_TIME_FORMAT}
          mask={maskFormat.DATE_TIME}
          maskChar={null}
          disabled={false}
        />
      </Box>
      <Box width="200px" p="10px">
        <Field
          id="dateTo"
          name="dateTo"
          component={MaskField}
          label="Date / Time To"
          placeholder={dateFormat.DATE_TIME_FORMAT}
          mask={maskFormat.DATE_TIME}
          maskChar={null}
          disabled={false}
        />
      </Box>
    </React.Fragment>
  );
};

export default ApiCallsFilter;
