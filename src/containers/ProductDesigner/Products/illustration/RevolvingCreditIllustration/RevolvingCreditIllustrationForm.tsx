import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  Delimiter,
  Hr,
  MaskField,
  NumberFormatField,
  Paragraph,
  SelectField
} from 'components';

import { dateFormatConst, formNamesConst, iconNamesConst, maskFormatConst } from 'consts';
import { THandleIllustrateRevCredit } from 'store';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IRevolvingCreditIllustrationForm {
  transactionTypesOptions: Array<ISelectValue>;
  illustrateRevolvingCreditProduct: THandleIllustrateRevCredit;
  isTransTypesLoading: boolean;
  isLoading: boolean;
  isDisabled: boolean;
}

type TTGeneralProductForm = IRevolvingCreditIllustrationForm &
  InjectedFormProps<{}, IRevolvingCreditIllustrationForm>;

const RevolvingCreditIllustrationForm: React.FC<TTGeneralProductForm> = ({
  handleSubmit,
  transactionTypesOptions,
  isTransTypesLoading,
  illustrateRevolvingCreditProduct,
  isLoading,
  isDisabled,
}) => {
  const [isOpenFilter, setIsOpenFilter] = React.useState(true);

  const submitButtonText = React.useMemo(
    () => isLoading ? 'Illustrate...' : 'Illustrate',
    [isLoading]
  );

  const filterButtonText = React.useMemo(
    () => isOpenFilter ? 'Hide Parameters' : 'Show Parameters',
    [isOpenFilter]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(async () => {
      await illustrateRevolvingCreditProduct();
      setIsOpenFilter(false);
    }),
    [handleSubmit, illustrateRevolvingCreditProduct]
  );

  const handleFilter = React.useCallback(
    () => setIsOpenFilter(!isOpenFilter),
    [isOpenFilter]
  );

  return (
    <React.Fragment>
      <Box mt="15px" mb="5px">
        <Button
          text={filterButtonText}
          iconName={iconNamesConst.FILTER}
          type="reset"
          onClick={handleFilter}
        />
      </Box>
      {isOpenFilter && (
        <form onSubmit={handleSubmitForm}>
          <Flex
            alignItems="flex-end"
            flexWrap="wrap"
            mx="-8px"
          >
            <Box width="130px" p="8px">
              <Field
                id="startDate"
                name="startDate"
                component={MaskField}
                label="Start Date"
                placeholder={dateFormatConst.DATE}
                mask={maskFormatConst.DATE}
                disabled={isDisabled}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isDate,
                ]}
              />
            </Box>
            <Box width={[1 / 7]} p="8px">
              <Field
                id="limit"
                name="limit"
                component={NumberFormatField}
                label="Limit"
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                disabled={isDisabled}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isNumber,
                  formErrorUtil.isPositive,
                ]}
              />
            </Box>
            <Box width={[1 / 7]} p="8px">
              <Field
                id="openBalance"
                name="openBalance"
                component={NumberFormatField}
                label="Open Balance"
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                disabled={isDisabled}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isNumber,
                  formErrorUtil.isPositive,
                ]}
              />
            </Box>
            <Delimiter />
            <Box px="8px" mb="5px" width="130px">
              <Paragraph bold={false} light={true}>
                1st Transaction
              </Paragraph>
            </Box>
            <Box width={[1 / 7]} p="8px">
              <Field
                id="transactionDate1"
                name="transactionDate1"
                component={MaskField}
                label="Date"
                placeholder={dateFormatConst.DATE}
                mask={maskFormatConst.DATE}
                disabled={isDisabled}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isDate,
                ]}
              />
            </Box>
            <Box width={[1 / 3]} p="8px">
              <Field
                id="transactionType1"
                name="transactionType1"
                component={SelectField}
                placeholder="Select type"
                isLoading={isTransTypesLoading}
                options={transactionTypesOptions}
                label="Type"
                isDisabled={isDisabled}
                validate={[formErrorUtil.isRequired]}
              />
            </Box>
            <Box width={[1 / 7]} p="8px" >
              <Field
                id="transactionAmount1"
                name="transactionAmount1"
                component={NumberFormatField}
                label="Amount"
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                disabled={isDisabled}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isNumber,
                  formErrorUtil.isPositive,
                ]}
              />
            </Box>
            <Delimiter />
            <Box px="8px" mb="5px" width="130px">
              <Paragraph bold={false} light={true}>
                2nd Transaction
              </Paragraph>
            </Box>
            <Box width={[1 / 7]} p="8px">
              <Field
                id="transactionDate2"
                name="transactionDate2"
                component={MaskField}
                label="Date"
                placeholder={dateFormatConst.DATE}
                mask={maskFormatConst.DATE}
                disabled={isDisabled}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isDate,
                ]}
              />
            </Box>
            <Box width={[1 / 3]} p="8px">
              <Field
                id="transactionType2"
                name="transactionType2"
                component={SelectField}
                isLoading={isTransTypesLoading}
                options={transactionTypesOptions}
                placeholder="Select Type"
                label="Type"
                isDisabled={isDisabled}
                validate={[formErrorUtil.isRequired]}
              />
            </Box>
            <Box width={[1 / 7]} p="8px">
              <Field
                id="transactionAmount2"
                name="transactionAmount2"
                component={NumberFormatField}
                label="Amount"
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                disabled={isDisabled}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isNumber,
                  formErrorUtil.isPositive,
                ]}
              />
            </Box>
            <Delimiter />
            <Box px="8px" mb="5px" width="130px">
              <Paragraph bold={false} light={true}>
                3rd Transaction
              </Paragraph>
            </Box>
            <Box width={[1 / 7]} p="8px">
              <Field
                id="transactionDate3"
                name="transactionDate3"
                component={MaskField}
                label="Date"
                placeholder={dateFormatConst.DATE}
                mask={maskFormatConst.DATE}
                disabled={isDisabled}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isDate,
                ]}
              />
            </Box>
            <Box width={[1 / 3]} p="8px">
              <Field
                id="transactionType3"
                name="transactionType3"
                component={SelectField}
                isLoading={isTransTypesLoading}
                options={transactionTypesOptions}
                placeholder="Select type"
                label="Type"
                isDisabled={isDisabled}
                validate={[formErrorUtil.isRequired]}
              />
            </Box>
            <Box width={[1 / 7]} p="8px">
              <Field
                id="transactionAmount3"
                name="transactionAmount3"
                component={NumberFormatField}
                label="Amount"
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                disabled={isDisabled}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isNumber,
                  formErrorUtil.isPositive,
                ]}
              />
            </Box>
            <Box width={[1]} px="10px">
              <Hr />
              <Flex justifyContent="flex-end" width="100%">
                <Button
                  text={submitButtonText}
                  disabled={isLoading}
                />
              </Flex>
            </Box>
          </Flex>
        </form>
      )}
    </React.Fragment>
  );
};

export default reduxForm<{}, IRevolvingCreditIllustrationForm>({
  form: formNamesConst.PRODUCT_ILLUSTRATION_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(RevolvingCreditIllustrationForm);
