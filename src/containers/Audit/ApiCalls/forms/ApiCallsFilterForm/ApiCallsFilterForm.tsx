import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, MaskField, SelectField } from 'components';

import { dateFormat, formNamesConst, maskFormat } from 'consts';

import { HandleFilterAuditApiCalls, HandleGetEndpointsByInstitutionId } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface ApiCallsFilterFormProps {
  filterAuditApiCalls: HandleFilterAuditApiCalls;
  getEndpointsByInstitutionId: HandleGetEndpointsByInstitutionId;
  institutionValue: SelectValues;
  institutionsOptions: Array<SelectValues>;
  endpointsOptions: Array<SelectValues>;
  isLoadingEndpoints: boolean;
}

type ApiCallsFilterFormAllProps = ApiCallsFilterFormProps &
  InjectedFormProps<{}, ApiCallsFilterFormProps>;

const ApiCallsFilterForm: React.FC<ApiCallsFilterFormAllProps> = ({
  handleSubmit,
  pristine,
  invalid,
  filterAuditApiCalls,
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

  const handleSubmitForm = React.useCallback(
    handleSubmit(filterAuditApiCalls),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width="700px" mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 3]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              component={SelectField}
              label="Institution"
              options={institutionsOptions}
              placeholder="Select Institution"
              isDisabled={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="endpointId"
              name="endpointId"
              component={SelectField}
              label="Endpoint"
              options={endpointsOptions}
              placeholder="Select endpoint"
              isDisabled={false}
              isLoading={isLoadingEndpoints}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="apiName"
              name="apiName"
              component={InputField}
              label="API Name"
              placeholder="Enter api name"
              isDisabled={false}
              // validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="dateFrom"
              name="dateFrom"
              component={MaskField}
              label="Date From"
              placeholder={dateFormat.DATE_TIME_FORMAT}
              mask={maskFormat.DATE_TIME}
              maskChar={null}
              disabled={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="dateTo"
              name="dateTo"
              component={MaskField}
              label="Date To"
              placeholder={dateFormat.DATE_TIME_FORMAT}
              mask={maskFormat.DATE_TIME}
              maskChar={null}
              disabled={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
        </Flex>
        <Button
          text="Show"
          disabled={pristine || invalid}
        />
      </Box>
    </form>
  );
};

export default reduxForm<{}, ApiCallsFilterFormProps>({
  form: formNamesConst.AUDIT_API_CALLS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(ApiCallsFilterForm);
