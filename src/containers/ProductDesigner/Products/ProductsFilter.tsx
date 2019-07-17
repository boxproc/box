import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import OkCancelButtons from 'components/Buttons/OkCancelButtons';
import { CheckboxField, SelectField } from 'components/Form';

import { formNames } from 'consts';

import { ParsedSelectValues } from 'types';

interface ProductsFilterProps {
  institutionsOptions: Array<ParsedSelectValues>;
 }

type ProductsFilterAllProps = ProductsFilterProps &
  InjectedFormProps<{}, ProductsFilterProps>;

const ProductsFilter: React.FC<ProductsFilterAllProps> = ({
  handleSubmit,
  institutionsOptions,
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
            options={institutionsOptions}
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
