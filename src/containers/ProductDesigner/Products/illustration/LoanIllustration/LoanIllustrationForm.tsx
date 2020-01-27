import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, InputField, MaskField, NumberFormatField, SelectField } from 'components';

import { dateFormat, formNamesConst, maskFormat } from 'consts';

import { HandleIllustrateLoanProduct } from 'store/domains';

import { SelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IllustrationProductFormProps {
  illustrateLoanProduct: HandleIllustrateLoanProduct;
  loanProductsOptions: Array<SelectValue>;
  isDisabled: boolean;
  isIllustrationLoading: boolean;
  isConversionLoading: boolean;
  withLoanSelection: boolean;
  withConvertToLoan: boolean;
  selectedLoanProduct: SelectValue;
  isReadOnly: boolean;
}

type LoanIllustrationFormAllProps = IllustrationProductFormProps &
  InjectedFormProps<{}, IllustrationProductFormProps>;

const LoanIllustrationForm: React.FC<LoanIllustrationFormAllProps> = ({
  illustrateLoanProduct,
  loanProductsOptions,
  withLoanSelection,
  withConvertToLoan,
  isDisabled,
  isIllustrationLoading,
  isConversionLoading,
  handleSubmit,
  selectedLoanProduct,
  isReadOnly,
  change,
}) => {
  React.useEffect(
    () => {
      const loanId = selectedLoanProduct && selectedLoanProduct.value;

      if (withLoanSelection && !loanId) {
        change('defNumOfInstallments', null);
        change('defNumOfIntrstFreeInstlmts', null);
      }
    },
    [change, selectedLoanProduct, withLoanSelection]
  );

  const illustrationButtonText = React.useMemo(
    () => isIllustrationLoading ? 'Illustrate...' : 'Illustrate',
    [isIllustrationLoading]
  );

  const conversionButtonText = React.useMemo(
    () => isConversionLoading ? 'Convert...' : 'Convert',
    [isConversionLoading]
  );

  const isDisabledIllustrationButton = React.useMemo(
    () => withLoanSelection
      ? isDisabled || !selectedLoanProduct
      : isDisabled,
    [withLoanSelection, isDisabled, selectedLoanProduct]
  );

  const isDisabledConversionButton = React.useMemo(
    () => isDisabled || !selectedLoanProduct,
    [isDisabled, selectedLoanProduct]
  );

  const hintText = React.useMemo(
    () => withLoanSelection && !selectedLoanProduct && 'Select loan product',
    [withLoanSelection, selectedLoanProduct]
  );

  const isDisabledDetails = React.useMemo(
    () => isDisabled || (withLoanSelection && !selectedLoanProduct),
    [isDisabled, withLoanSelection, selectedLoanProduct]
  );

  const handleSubmitFormIllustrate = React.useCallback(
    handleSubmit(illustrateLoanProduct),
    [handleSubmit, illustrateLoanProduct]
  );

  const handleSubmitFormConvert = React.useCallback(
    handleSubmit(() => console.log('---convert')),
    [handleSubmit]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(withConvertToLoan ? () => console.log('---submit') : illustrateLoanProduct),
    [handleSubmit, withConvertToLoan, illustrateLoanProduct]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
        width="100%"
        mx="-10px"
      >
        {withLoanSelection && (
          <Box width={[1 / 4]} p="10px">
            <Field
              id="loanProduct"
              name="loanProduct"
              component={SelectField}
              placeholder="Select Loan Product"
              label="Loan Product"
              options={loanProductsOptions}
              validate={[formErrorUtil.required]}
            />
          </Box>
        )}
        <Box width="120px" p="10px">
          <Field
            id="startDate"
            name="startDate"
            component={MaskField}
            label="Start Date"
            placeholder={dateFormat.DATE}
            mask={maskFormat.DATE}
            disabled={isDisabled || withLoanSelection}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isDate,
            ]}
          />
        </Box>
        <Box width="180px" ml="1px" p="10px">
          <Field
            id="amount"
            name="amount"
            component={NumberFormatField}
            label="Loan amount (principal)"
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            disabled={isDisabled || withLoanSelection}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        <Box width="150px" p="10px">
          <Field
            id="defNumOfInstallments"
            name="defNumOfInstallments"
            placeholder="Enter #"
            component={InputField}
            label="# of Installments"
            isNumber={true}
            disabled={isDisabledDetails}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        <Box width="150px" p="10px">
          <Field
            id="defNumOfIntrstFreeInstlmts"
            name="defNumOfIntrstFreeInstlmts"
            component={InputField}
            isNumber={true}
            label="# of Interest Free"
            placeholder="Enter #"
            disabled={isDisabledDetails}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        <Hr />
        <Flex
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
        >
          {withConvertToLoan && !isReadOnly && (
            <Box mr="7px">
              <Button
                text={conversionButtonText}
                disabled={isDisabledConversionButton}
                hint={hintText}
                isFocused={!isDisabledConversionButton}
                onClick={handleSubmitFormConvert}
              />
            </Box>
          )}
          <Button
            text={illustrationButtonText}
            disabled={isDisabledIllustrationButton}
            hint={hintText}
            onClick={handleSubmitFormIllustrate}
          />
        </Flex>
      </Flex>
    </form>
  );
};

export default reduxForm<{}, IllustrationProductFormProps>({
  form: formNamesConst.PRODUCT_ILLUSTRATION_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(LoanIllustrationForm);
