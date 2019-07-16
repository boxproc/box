import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import OkCancelButtons from 'components/Buttons/OkCancelButtons';
import { CheckboxField, SelectField } from 'components/Form';

import { formNames } from 'consts';

interface ProductsFilterProps { }

type ProductsFilterAllProps = ProductsFilterProps &
  InjectedFormProps<{}, ProductsFilterProps>;

const ProductsFilter: React.FC<ProductsFilterAllProps> = ({
  handleSubmit,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log('---', data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end">
        <Box width="320px" mr="20px">
          <Field
            id="institutionId"
            name="institutionId"
            isSearchable={true}
            component={SelectField}
            label="Institution ID"
            placeholder="Select Institution ID"
            options={[
              { value: 1, label: 'Institution ID 1' },
              { value: 2, label: 'Institution ID 2' },
              { value: 3, label: 'Institution ID 3' },
              { value: 4, label: 'Institution ID 4' },
            ]}
            isDisabled={false}
            isMulti={true}
          />
        </Box>
        <Box>
          <Field
            id="lockedFlag"
            name="lockedFlag"
            component={CheckboxField}
            label="Show active"
            disabled={false}
          />
        </Box>
      </Flex>
      <OkCancelButtons
        okText="Search"
        cancelText="Reset"
        disabledCancel={true}
      />
    </form >
  );
};

export default reduxForm<{}, ProductsFilterProps>({
  form: formNames.PRODUCTS_FILTER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ProductsFilter);
