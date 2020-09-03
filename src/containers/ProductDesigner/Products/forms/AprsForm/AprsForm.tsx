import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, NumberFormatField, SelectField } from 'components';
import {
  aprTypesOptions,
  formNamesConst,
  iconNamesConst,
} from 'consts';
import { THandleAddProductApr } from 'store';
import { formErrorUtil } from 'utils';

interface IAprsForm {
  addProductApr: THandleAddProductApr;
  isLoading: boolean;
}

type TAprsForm = IAprsForm & InjectedFormProps<{}, IAprsForm>;

const AprsForm: React.FC<TAprsForm> = ({
  addProductApr,
  handleSubmit,
  isLoading,
  pristine,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(addProductApr),
    [handleSubmit, addProductApr]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
        mx="-8px"
        width="100%"
      >
        <Box width="410px" p="8px">
          <Field
            id="description"
            name="description"
            component={InputField}
            label="Description"
            placeholder="Enter Description"
            disabled={isLoading}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="220px" p="8px">
          <Field
            id="calculationMethod"
            name="calculationMethod"
            component={SelectField}
            label="Calculation Method"
            options={aprTypesOptions}
            placeholder="Select Method"
            isDisabled={isLoading}
            isClearable={false}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="80px" p="8px">
          <Field
            id="rate"
            name="rate"
            component={NumberFormatField}
            label="Rate %"
            disabled={isLoading}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width="150px" p="8px">
          <Field
            id="initialInterestFreeDays"
            name="initialInterestFreeDays"
            component={InputField}
            label="Initial Interest Free Days"
            placeholder="Enter Days"
            isNumber={true}
            disabled={true}
            // disabled={isLoading}
            validate={[
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        <Box p="8px">
          <Button
            text="Add"
            isLoading={isLoading}
            iconName={iconNamesConst.PLUS}
            classNames={['is-bordered']}
            disabled={pristine}
          />
        </Box>
      </Flex>
    </form>
  );
};

export default reduxForm<{}, IAprsForm>({
  form: formNamesConst.PRODUCT_APRS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AprsForm);
