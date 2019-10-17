import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Delimiter, InputField, SelectField, TextareaAutosizeField } from 'components';

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
              readOnly={true}
            />
          </Box>
          <Box width={[3 / 11]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              component={SelectField}
              options={[]}
              label="Institution"
              placeholder="Select Institution"
              isDisabled={true}
              isClearable={false}
            />
          </Box>
          <Box width={[3 / 11]} p="10px">
            <Field
              id="eventDatetime"
              name="eventDatetime"
              component={InputField}
              label="Event Datetime"
              placeholder="Enter Event Datetime"
              readOnly={true}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="apiName"
              name="apiName"
              component={InputField}
              label="API Name"
              placeholder="Enter API Name"
              readOnly={true}
            />
          </Box>
          <Delimiter />
          <Box width="100px" p="10px">
            <Field
              id="endpointId"
              name="endpointId"
              component={InputField}
              label="Endpoint ID"
              placeholder="Enter Endpoint ID"
              readOnly={true}
            />
          </Box>
          <Box width={[5 / 13]} p="10px">
            <Field
              id="endpointName"
              name="endpointName"
              component={InputField}
              label="Endpoint Name"
              placeholder="Enter Endpoint Name"
              readOnly={true}
            />
          </Box>
          <Box width="100%">
            <Flex alignItems="flex-start">
              <Box width="50%" p="10px">
                <Field
                  id="requestBody"
                  name="requestBody"
                  component={TextareaAutosizeField}
                  label="Request Body"
                  placeholder="Request Body"
                  readOnly={true}
                  height={250}
                />
              </Box>
              <Box width="50%" p="10px">
                <Field
                  id="responseBody"
                  name="responseBody"
                  component={TextareaAutosizeField}
                  label="Response Body"
                  placeholder="Response Body"
                  readOnly={true}
                  height={250}
                />
              </Box>
            </Flex>
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
