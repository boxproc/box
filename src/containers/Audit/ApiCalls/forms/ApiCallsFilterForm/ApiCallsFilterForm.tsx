import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, MaskField, SelectField } from 'components';

import { dateFormat, formNamesConst, maskFormat } from 'consts';

import { formErrorUtil } from 'utils';

interface ApiCallsFilterFormProps { }

type ApiCallsFilterFormAllProps = ApiCallsFilterFormProps &
  InjectedFormProps<{}, ApiCallsFilterFormProps>;

const ApiCallsFilterForm: React.FC<ApiCallsFilterFormAllProps> = ({
  handleSubmit,
  pristine,
  invalid,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
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
              placeholder="Select Institution"
              validate={[formErrorUtil.required]}
              isDisabled={false}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="endPoint"
              name="endPoint"
              component={SelectField}
              label="Endpoint"
              placeholder="Select endpoint"
              validate={[formErrorUtil.required]}
              isDisabled={false}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="apiName"
              name="apiName"
              component={InputField}
              label="API Name"
              placeholder="Enter api name"
              validate={[formErrorUtil.required]}
              isDisabled={false}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="datetimeFrom"
              name="datetimeFrom"
              validate={[formErrorUtil.required]}
              component={MaskField}
              label="Date From"
              placeholder={dateFormat.DATE_TIME_FORMAT}
              mask={maskFormat.DATE_TIME}
              maskChar={null}
              disabled={false}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="datetimeTo"
              name="datetimeTo"
              component={MaskField}
              validate={[formErrorUtil.required]}
              label="Date To"
              placeholder={dateFormat.DATE_TIME_FORMAT}
              mask={maskFormat.DATE_TIME}
              maskChar={null}
              disabled={false}
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
