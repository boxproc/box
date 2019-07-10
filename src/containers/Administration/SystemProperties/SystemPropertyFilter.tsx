import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'styled-components';

import { InputField } from 'components/Form';
import OkCancelButtons from 'components/OkCancelButtons';
import { T3 } from 'components/Text';

import { formNames } from 'consts';

import { HandleFilterAdminSysProps, HandleResetFormByName } from 'store/domains';

const FormWrapper = styled.form`
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

interface SystemPropertyFilterProps {
  filterAdminSysProps: HandleFilterAdminSysProps;
  resetFormByName: HandleResetFormByName;
}

type SystemPropertyFilterAllProps = SystemPropertyFilterProps &
  InjectedFormProps<{}, SystemPropertyFilterProps>;

const SystemPropertyFilter: React.FC<SystemPropertyFilterAllProps> = ({
  handleSubmit,
  filterAdminSysProps,
  resetFormByName,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => filterAdminSysProps(data)),
    [handleSubmit]
  );

  return (
    <FormWrapper onSubmit={handleSubmitForm}>
      <T3>Filters</T3>
      <Flex alignItems="flex-end">
        <Box width="200px" mr="15px">
          <Field
            id="propertyName"
            name="propertyName"
            placeholder="Enter Property Name"
            component={InputField}
            label="Property Name"
          />
        </Box>
      </Flex>
      <OkCancelButtons
        okText="Search"
        cancelText="Reset"
        onCancel={() => resetFormByName(formNames.SYSTEM_PROPERTY_FILTER)}
      />
    </FormWrapper >
  );
};

export default reduxForm<{}, SystemPropertyFilterProps>({
  form: formNames.SYSTEM_PROPERTY_FILTER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(SystemPropertyFilter);
