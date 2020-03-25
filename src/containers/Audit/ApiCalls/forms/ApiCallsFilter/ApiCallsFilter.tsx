import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { Delimiter, InputField, MaskField, SelectField } from 'components';

import { dateFormatConst, maskFormatConst } from 'consts';

import { HandleGetEndpointsByInstitutionId } from 'store';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface ApiCallsFilterProps {
  getEndpointsByInstitutionId: HandleGetEndpointsByInstitutionId;
  institutionValue: ISelectValue;
  institutionsOptions: Array<ISelectValue>;
  endpointsOptions: Array<ISelectValue>;
  isLoadingEndpoints: boolean;
  isDisabled: boolean;
}

const ApiCallsFilter: React.FC<ApiCallsFilterProps> = ({
  institutionValue,
  getEndpointsByInstitutionId,
  institutionsOptions,
  endpointsOptions,
  isLoadingEndpoints,
  isDisabled,
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
      <Box width={[1 / 4]} p="8px">
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          options={institutionsOptions}
          placeholder="Select Institution"
          isClearable={false}
          isDisabled={isDisabled}
          isRequired={true}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width={[1 / 3]} p="8px">
        <Field
          id="endpointId"
          name="endpointId"
          component={SelectField}
          label="Endpoint"
          options={endpointsOptions}
          placeholder="Select endpoint"
          isLoading={isLoadingEndpoints}
          isDisabled={isDisabled}
          isRequired={true}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="apiName"
          name="apiName"
          component={InputField}
          label="API Name"
          placeholder="Enter api name"
          disabled={isDisabled}
        />
      </Box>
      <Delimiter />
      <Box width="180px" p="8px">
        <Field
          id="apiCallsDateTimeFrom"
          name="apiCallsDateTimeFrom"
          component={MaskField}
          label="Date&nbsp;/&nbsp;Time From"
          placeholder={dateFormatConst.DATE_TIME}
          mask={maskFormatConst.DATE_TIME}
          disabled={isDisabled}
          isRequired={true}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
      <Box width="180px" p="8px">
        <Field
          id="apiCallsDateTimeTo"
          name="apiCallsDateTimeTo"
          component={MaskField}
          label="Date&nbsp;/&nbsp;Time To"
          placeholder={dateFormatConst.DATE_TIME}
          mask={maskFormatConst.DATE_TIME}
          disabled={isDisabled}
          isRequired={true}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
    </React.Fragment>
  );
};

export default ApiCallsFilter;
