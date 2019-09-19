import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { InputField, SelectField, TextField } from 'components';

import { formNamesConst } from 'consts';

interface ApiCallFormProps { }

type ApiCallFormAllProps = ApiCallFormProps & InjectedFormProps<{}, ApiCallFormProps>;

const ApiCallForm: React.FC<ApiCallFormAllProps> = () => {
  return (
    <form>
      <Box mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width="100px" p="10px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="ID"
              placeholder="Enter ID"
              disabled={true}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              component={SelectField}
              options={[]}
              label="Institution"
              placeholder="Select Institution"
              isDisabled={true}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="eventDatetime"
              name="eventDatetime"
              component={InputField}
              label="Event Datetime"
              placeholder="Enter Event Datetime"
              disabled={true}
            />
          </Box>
          <Box width="100px" p="10px">
            <Field
              id="endpointId"
              name="endpointId"
              component={InputField}
              label="Endpoint ID"
              placeholder="Enter Endpoint ID"
              disabled={true}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="endpointName"
              name="endpointName"
              component={InputField}
              label="Endpoint Name"
              placeholder="Enter Endpoint Name"
              disabled={true}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="apiName"
              name="apiName"
              component={InputField}
              label="API Name"
              placeholder="Enter API Name"
              disabled={true}
            />
          </Box>
          <Box width="100%" p="10px">
            <Field
              id="requestBody"
              name="requestBody"
              component={TextField}
              label="Request Body"
              placeholder="Request Body"
              disabled={true}
            />
          </Box>
          <Box width="100%" p="10px">
            <Field
              id="responseBody"
              name="responseBody"
              component={TextField}
              label="Response Body"
              placeholder="Response Body"
              disabled={true}
            />
          </Box>
        </Flex>
      </Box>
    </form>
  );
};

export default reduxForm<{}, ApiCallFormProps>({
  form: formNamesConst.AUDIT_API_CALL,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(ApiCallForm);
