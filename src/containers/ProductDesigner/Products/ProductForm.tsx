import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, SelectField } from 'components/Form';
import OkCancelButtons from 'components/OkCancelButtons';

import { formNames } from 'consts';

interface ProductFormFormProps {
  onCancel: () => void;
}

type ProductFormFormAllProps = ProductFormFormProps &
  InjectedFormProps<{}, ProductFormFormProps>;

const ProductFormForm: React.FC<ProductFormFormAllProps> = ({
  // handleSubmit,
  onCancel,
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
              options={[
                { value: 1, label: 'Type 1' },
                { value: 2, label: 'Type 2' },
                { value: 3, label: 'Type 3' },
              ]}
              isDisabled={false}
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
              options={[
                { value: 1, label: 'Scheme 1' },
                { value: 2, label: 'Scheme 2' },
                { value: 3, label: 'Scheme 3' },
              ]}
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
              options={[
                { value: 524, label: 'NPR' },
                { value: 554, label: 'NZD' },
                { value: 512, label: 'OMR' },
              ]}
              isDisabled={false}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="historyRetentionNumberOfDays"
              name="historyRetentionNumberOfDays"
              placeholder="Enter History Retention Number of Days"
              component={InputField}
              label="History Retention Number of Days"
            />
          </Box>
          <Box p="10px">
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
})(ProductFormForm);
