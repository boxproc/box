import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import OkCancelButtons from 'components/Buttons/OkCancelButtons';
import { CheckboxField, InputField, SelectField } from 'components/Form';
import {
  withLoadCurrencyCodes,
  WithLoadCurrencyCodesProps,
} from 'components/withLoadCurrencyCodes';

import { formNames, productTypesOptions, schemeTypesOptions } from 'consts';

interface ProductFormFormProps {
  onCancel: () => void;
  isDisabledProductTypes?: boolean;
}

type ProductFormFormAllProps = ProductFormFormProps & WithLoadCurrencyCodesProps &
  InjectedFormProps<{}, ProductFormFormProps>;

const ProductFormForm: React.FC<ProductFormFormAllProps> = ({
  // handleSubmit,
  onCancel,
  currencyCodes,
  isCurrencyCodesLoading,
  isDisabledProductTypes,
}) => {
  return (
    <form onSubmit={() => console.log('---handleSubmitForm')}>
      <Box mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 2]} p="10px">
            <Field
              id="name"
              name="name"
              placeholder="Enter Name"
              component={InputField}
              label="Name"
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="description"
              name="description"
              placeholder="Enter Description"
              component={InputField}
              label="Description"
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="productType"
              name="productType"
              isSearchable={true}
              component={SelectField}
              label="Product Type"
              placeholder="Select Product Type"
              options={productTypesOptions}
              isDisabled={isDisabledProductTypes}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="scheme"
              name="scheme"
              isSearchable={true}
              component={SelectField}
              label="Scheme"
              placeholder="Select Scheme"
              options={schemeTypesOptions}
              isDisabled={false}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="currencyCode"
              name="currencyCode"
              isSearchable={true}
              component={SelectField}
              label="Currency Code"
              placeholder="Select Currency Code"
              options={currencyCodes}
              isDisabled={false}
              isLoading={isCurrencyCodesLoading}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="historyRetentionNumberOfDay"
              name="historyRetentionNumberOfDay"
              placeholder="Enter History Retention Number of Days"
              component={InputField}
              label="History Retention Number of Days"
            />
          </Box>
          <Box p="10px" width="100%">
            <Field
              id="lockedFlag"
              name="lockedFlag"
              component={CheckboxField}
              label="Locked"
              disabled={false}
            />
          </Box>
        </Flex>
      </Box>
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
      />
    </form >
  );
};

export default reduxForm<{}, ProductFormFormProps>({
  form: formNames.PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withLoadCurrencyCodes(ProductFormForm));
