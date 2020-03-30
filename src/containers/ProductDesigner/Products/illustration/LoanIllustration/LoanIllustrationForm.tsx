import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, InputField, MaskField, NumberFormatField, SelectField } from 'components';

import { dateFormatConst, formNamesConst, maskFormatConst } from 'consts';

import { HandleIllustrateLoanProduct, THandleConvertTrToLoan } from 'store';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface ILoanIllustrationForm {
  illustrateLoanProduct: HandleIllustrateLoanProduct;
  loanProductsOptions: Array<ISelectValue>;
  isDisabled: boolean;
  isIllustrationLoading: boolean;
  isConversionLoading: boolean;
  withLoanSelection: boolean;
  withConvertToLoan: boolean;
  selectedLoanProduct: ISelectValue;
  isReadOnly: boolean;
  convertTransactionToLoan: THandleConvertTrToLoan;
}

type TLoanIllustrationForm = ILoanIllustrationForm & InjectedFormProps<{}, ILoanIllustrationForm>;

const LoanIllustrationForm: React.FC<TLoanIllustrationForm> = ({
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
  convertTransactionToLoan,
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

  const convertToLoanHint = React.useMemo(
    () => isReadOnly ? 'Permission denied.' : hintText,
    [isReadOnly, hintText]
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
    handleSubmit(convertTransactionToLoan),
    [handleSubmit]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(withConvertToLoan ? () => convertTransactionToLoan : illustrateLoanProduct),
    [handleSubmit, withConvertToLoan, illustrateLoanProduct, convertTransactionToLoan]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
        width="100%"
        mx="-8px"
      >
        {withLoanSelection && (
          <Box width={[1 / 4]} p="8px">
            <Field
              id="loanProduct"
              name="loanProduct"
              component={SelectField}
              placeholder="Select Loan Product"
              label="Loan Product"
              options={loanProductsOptions}
              isDisabled={isDisabled}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
        )}
        <Box width="120px" p="8px">
          <Field
            id="startDate"
            name="startDate"
            component={MaskField}
            label="Start Date"
            placeholder={dateFormatConst.DATE}
            mask={maskFormatConst.DATE}
            disabled={isDisabled || withLoanSelection}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isDate,
            ]}
          />
        </Box>
        <Box width="180px" ml="1px" p="8px">
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
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width="150px" p="8px">
          <Field
            id="defNumOfInstallments"
            name="defNumOfInstallments"
            placeholder="Enter #"
            component={InputField}
            label="# of Installments"
            isNumber={true}
            disabled={isDisabledDetails}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        <Box width="150px" p="8px">
          <Field
            id="defNumOfIntrstFreeInstlmts"
            name="defNumOfIntrstFreeInstlmts"
            component={InputField}
            isNumber={true}
            label="# of Interest Free"
            placeholder="Enter #"
            disabled={isDisabledDetails}
            validate={[
              formErrorUtil.isRequired,
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
          {withConvertToLoan && (
            <Box mr="7px">
              <Button
                text={conversionButtonText}
                disabled={isDisabledConversionButton || isReadOnly}
                hint={convertToLoanHint}
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

export default reduxForm<{}, ILoanIllustrationForm>({
  form: formNamesConst.PRODUCT_ILLUSTRATION_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(LoanIllustrationForm);
