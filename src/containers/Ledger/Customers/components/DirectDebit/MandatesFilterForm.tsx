import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Button, SelectField,
} from 'components';
import { formNamesConst } from 'consts';
import { ISelectValue } from 'types';

interface IMandatesFilterForm {
  isFiltering: boolean;
  onSubmit: (formValues: object) => void;
  options: Array<ISelectValue>;
}

type TMandatesFilterForm = IMandatesFilterForm & InjectedFormProps<{}, IMandatesFilterForm>;

const MandatesFilterForm: React.FC<TMandatesFilterForm> = ({
  handleSubmit,
  isFiltering,
  onSubmit,
  options,
  pristine,
  dirty,
}) => {

  const handleSubmitForm = React.useCallback(
    handleSubmit(onSubmit),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end" mb="5px">
        <Box width="150px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            placeholder="Select status"
            options={options}
            isDisabled={isFiltering}
            isClearable={false}
          />
        </Box>
        <Box ml="16px">
          <Button
            text="Show"
            isLoading={isFiltering}
            disabled={pristine}
            isFocused={dirty}
          />
        </Box>
      </Flex>
    </form >
  );
};

export default reduxForm<{}, IMandatesFilterForm>({
  form: formNamesConst.DIRECT_DEBIT_MANDATES_FILTER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})((MandatesFilterForm));
