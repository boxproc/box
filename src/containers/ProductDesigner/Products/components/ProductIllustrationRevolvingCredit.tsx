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

import { dateFormat, formNamesConst, iconNamesConst, maskFormat } from 'consts';
import { HandleIllustrateRevolvingCreditProduct } from 'store/domains';
import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface IllustrationRevolvingCreditProductFormProps {
  isTransactionTypesLoading: boolean;
  transactionTypesOptions: Array<SelectValues>;
  illustrateRevolvingCreditProduct: HandleIllustrateRevolvingCreditProduct;
  isReadOnly: boolean;
}
type GeneralProductFormAllProps = IllustrationRevolvingCreditProductFormProps &
  InjectedFormProps<{}, IllustrationRevolvingCreditProductFormProps>;

const ProductIllustrationRevolvingCredit: React.FC<GeneralProductFormAllProps> = ({
  isReadOnly,
  handleSubmit,
  transactionTypesOptions,
  isTransactionTypesLoading,
  illustrateRevolvingCreditProduct,

}) => {
  const [isOpenParams, setIsOpenParams] = React.useState(true);

  const handleSubmitForm = React.useCallback(
    handleSubmit(async () => {
      await illustrateRevolvingCreditProduct();
      setIsOpenParams(false);
    }),
    [handleSubmit, illustrateRevolvingCreditProduct]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end" flexWrap="wrap">
        {!isReadOnly && (
          <Box mt="10px">
            <Button
              text={isOpenParams ? 'Hide Parameters' : 'Show Parameters'}
              iconName={iconNamesConst.FILTER}
              type="reset"
              onClick={() => setIsOpenParams(!isOpenParams)}
            />
          </Box>
        )}
        {isOpenParams && (
          <React.Fragment>
            <Delimiter />
            <Box width="130px" p="10px">
              <Field
                id="startDate"
                name="startDate"
                component={MaskField}
                label="Start Date"
                placeholder={dateFormat.DATE}
                mask={maskFormat.DATE}
                validate={[formErrorUtil.required, formErrorUtil.isDate]}
              />
            </Box>
            <Box width={[1 / 7]} ml="1px" p="10px">
              <Field
                id="limit"
                name="limit"
                component={NumberFormatField}
                label="Limit"
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                validate={[formErrorUtil.required]}
              />
            </Box>
            <Box width={[1 / 7]} ml="1px" p="10px">
              <Field
                id="openBalance"
                name="openBalance"
                component={NumberFormatField}
                label="Open Balance"
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                validate={[formErrorUtil.required]}
              />
            </Box>
            <Delimiter />
            <Box ml="1px" p="10px" width="130px">
              <Paragraph
                bold={false}
                light={true}
              >
                1st Transaction
              </Paragraph>
            </Box>
            <Box width={[1 / 7]} p="10px">
              <Field
                id="transactionDate1"
                name="transactionDate1"
                component={MaskField}
                label="Date"
                placeholder={dateFormat.DATE}
                mask={maskFormat.DATE}
                validate={[formErrorUtil.required, formErrorUtil.isDate]}
              />
            </Box>
            <Box width={[1 / 3]} p="10px">
              <Field
                id="transactionType1"
                name="transactionType1"
                component={SelectField}
                placeholder="Select type"
                isLoading={isTransactionTypesLoading}
                options={transactionTypesOptions}
                label="Type"
                validate={[formErrorUtil.required]}
              />
            </Box>
            <Box width={[1 / 7]} p="10px" >
              <Field
                id="transactionAmount1"
                name="transactionAmount1"
                component={NumberFormatField}
                label="Amount"
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                validate={[formErrorUtil.required]}
              />
            </Box>
            <Delimiter />
            <Box ml="1px" p="10px" width="130px">
              <Paragraph
                bold={false}
                light={true}
              >
                2nd Transaction
              </Paragraph>
            </Box>
            <Box width={[1 / 7]} p="10px">
              <Field
                id="transactionDate2"
                name="transactionDate2"
                component={MaskField}
                label="Date"
                placeholder={dateFormat.DATE}
                mask={maskFormat.DATE}
                validate={[formErrorUtil.required, formErrorUtil.isDate]}
              />
            </Box>
            <Box width={[1 / 3]} p="10px">
              <Field
                id="transactionType2"
                name="transactionType2"
                component={SelectField}
                isLoading={isTransactionTypesLoading}
                options={transactionTypesOptions}
                placeholder="Select Type"
                label="Type"
                validate={[formErrorUtil.required]}
              />
            </Box>
            <Box width={[1 / 7]} p="10px">
              <Field
                id="transactionAmount2"
                name="transactionAmount2"
                component={NumberFormatField}
                label="Amount"
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                validate={[formErrorUtil.required]}
              />
            </Box>
            <Delimiter />
            <Box ml="1px" p="10px" width="130px">
              <Paragraph
                bold={false}
                light={true}
              >
                3rd Transaction
              </Paragraph>
            </Box>
            <Box width={[1 / 7]} p="10px">
              <Field
                id="transactionDate3"
                name="transactionDate3"
                component={MaskField}
                label="Date"
                placeholder={dateFormat.DATE}
                mask={maskFormat.DATE}
                validate={[formErrorUtil.required, formErrorUtil.isDate]}
              />
            </Box>
            <Box width={[1 / 3]} p="10px">
              <Field
                id="transactionType3"
                name="transactionType3"
                component={SelectField}
                isLoading={isTransactionTypesLoading}
                options={transactionTypesOptions}
                placeholder="Select type"
                label="Type"
                validate={[formErrorUtil.required]}
              />
            </Box>
            <Box width={[1 / 7]} p="10px">
              <Field
                id="transactionAmount3"
                name="transactionAmount3"
                component={NumberFormatField}
                label="Amount"
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                validate={[formErrorUtil.required]}
              />
            </Box>
            <Hr />
            <Flex justifyContent="flex-end" width="100%">
              <Button text="Illustrate" />
            </Flex>
          </React.Fragment>
        )}
      </Flex>
    </form>
  );
};

export default reduxForm<{}, IllustrationRevolvingCreditProductFormProps>({
  form: formNamesConst.PRODUCT_ILLUSTRATION_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ProductIllustrationRevolvingCredit);
