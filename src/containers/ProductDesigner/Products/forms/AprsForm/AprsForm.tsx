import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, MaskField, NumberFormatField, SelectField } from 'components';
import {
  aprDateConst,
  aprDateOptions,
  aprTypesOptions,
  dateFormatConst,
  formNamesConst,
  iconNamesConst,
  maskFormatConst,
} from 'consts';
import { THandleAddProductApr } from 'store';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IAprsForm {
  addProductApr: THandleAddProductApr;
  isLoading: boolean;
  startDateValue: ISelectValue;
}

type TAprsForm = IAprsForm & InjectedFormProps<{}, IAprsForm>;

const AprsForm: React.FC<TAprsForm> = ({
  addProductApr,
  handleSubmit,
  isLoading,
  pristine,
  startDateValue,
}) => {
  const buttonText = React.useMemo(
    () => isLoading ? 'Adding...' : 'Add',
    [isLoading]
  );

  const isFutureDate = React.useMemo(
    () => startDateValue && startDateValue.value === aprDateConst.FUTURE,
    [startDateValue]
  );

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
        <Box width="210px" p="8px">
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
        <Box width="160px" p="8px">
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
        <Box width="170px" p="8px">
          <Field
            id="aprStartDate"
            name="aprStartDate"
            component={SelectField}
            label="Start Date"
            options={aprDateOptions}
            placeholder="Select Start Date"
            isDisabled={isLoading}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        {isFutureDate && (
          <Box width="120px" p="8px">
            <Field
              id="aprFutureStartDate"
              name="aprFutureStartDate"
              component={MaskField}
              label="Future Date"
              placeholder={dateFormatConst.DATE}
              mask={maskFormatConst.DATE}
              disabled={isLoading}
              autoFocus={true}
              validate={[
                formErrorUtil.isRequired,
                formErrorUtil.isFutureDate,
              ]}
            />
          </Box>
        )}
        <Box width="120px" p="8px">
          <Field
            id="initialInterestFreeDays"
            name="initialInterestFreeDays"
            component={InputField}
            label="Initial Interest Free Days"
            placeholder="Enter Days"
            isNumber={true}
            disabled={isLoading}
            validate={[
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        <Box p="8px">
          <Button
            text={buttonText}
            iconName={iconNamesConst.PLUS}
            classNames={['is-bordered']}
            disabled={pristine || isLoading}
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
