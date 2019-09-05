import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import { SelectField } from 'components/Form';

import { formNames } from 'consts';

import {  HandleFilterAdminInterface } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface InterfaceFilterFormProps {
  institutionsOptions: Array<SelectValues>;
  filterAdminInterface: HandleFilterAdminInterface;
  isDirty: boolean;
}

type InterfaceFilterFormAllProps = InterfaceFilterFormProps &
  InjectedFormProps<{}, InterfaceFilterFormProps>;

const InterfaceFilterForm: React.FC<InterfaceFilterFormAllProps> = ({
  handleSubmit,
  institutionsOptions,
  filterAdminInterface,
  isDirty,
}) => {

  const handleSubmitForm = React.useCallback(
    handleSubmit(filterAdminInterface),
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
              options={institutionsOptions}
              isDisabled={false}
              isClearable={true}
              validate={[formErrorUtil.required]}
            />
          </Box>
        </Flex>
        <Button
          text="Show"
          disabled={!isDirty}
        />
      </Box>
    </form >
  );
};

export default reduxForm<{}, InterfaceFilterFormProps>({
  form: formNames.ADMIN_INTERFACE_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(InterfaceFilterForm);
