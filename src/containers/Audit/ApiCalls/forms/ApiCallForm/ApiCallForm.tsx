import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, InputField, SelectField, TextareaField } from 'components';
import { formNamesConst } from 'consts';

interface IApiCallForm { }

type TApiCallForm = IApiCallForm & InjectedFormProps<{}, IApiCallForm>;

const ApiCallForm: React.FC<TApiCallForm> = () => {
  return (
    <form>
      <Box mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width="100px" p="8px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="ID"
              placeholder="Enter ID"
              readOnly={true}
            />
          </Box>
          <Box width={[3 / 11]} p="8px">
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
          <Box width={[3 / 11]} p="8px">
            <Field
              id="eventDatetime"
              name="eventDatetime"
              component={InputField}
              label="Event Datetime"
              placeholder="Enter Event Datetime"
              readOnly={true}
            />
          </Box>
          <Box width={[1 / 3]} p="8px">
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
          <Box width="100px" p="8px">
            <Field
              id="endpointId"
              name="endpointId"
              component={InputField}
              label="Endpoint ID"
              placeholder="Enter Endpoint ID"
              readOnly={true}
            />
          </Box>
          <Box width={[5 / 13]} p="8px">
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
              <Box width="50%" p="8px">
                <Field
                  id="requestBody"
                  name="requestBody"
                  component={TextareaField}
                  label="Request Body"
                  placeholder="Request Body"
                  readOnly={true}
                  height={250}
                />
              </Box>
              <Box width="50%" p="8px">
                <Field
                  id="responseBody"
                  name="responseBody"
                  component={TextareaField}
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

export default reduxForm<{}, IApiCallForm>({
  form: formNamesConst.AUDIT_API_CALL,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(ApiCallForm);
