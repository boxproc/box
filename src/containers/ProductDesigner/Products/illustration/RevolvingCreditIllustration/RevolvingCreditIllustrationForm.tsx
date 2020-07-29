import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { theme } from 'theme';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  Delimiter,
  Hr,
  InfoCircleIcon,
  MaskField,
  NumberFormatField,
  Paragraph,
  SelectField,
} from 'components';

import { dateFormatConst, formNamesConst, iconNamesConst, maskFormatConst } from 'consts';
import { THandleIllustrateRevCredit } from 'store';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

const LeftPartWrapper = styled(Flex)`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 30px;
    right: 0;
    bottom: 10px;
    display: block;
    width: 1px;
    border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

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
          classNames={['is-bordered']}
          onClick={handleFilter}
        />
      </Box>
      {isOpenFilter && (
        <React.Fragment>
          <Flex alignItems="center" mt="10px" color={theme.colors.gray}>
            <Box mr="5px" mb="9px">
              <InfoCircleIcon size="16" />
            </Box>
            <Paragraph light={true}>
              For triggering the illustration
              a product rule for the minimum repayment calculation must be determined.
            </Paragraph>
          </Flex>
          <form onSubmit={handleSubmitForm}>
            <Flex
              alignItems="flex-start"
              flexWrap="wrap"
              mx="-8px"
            >
              <LeftPartWrapper
                width="145px"
                flexDirection="column"
                pr="15px"
              >
                <Box width={[1]} p="8px">
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
                <Box width={[1]} p="8px">
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
                <Box width={[1]} p="8px">
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
              </LeftPartWrapper>
              <Flex
                width="830px"
                flexWrap="wrap"
                pl="10px"
              >
                <Box p="8px" pt="30px">
                  <Paragraph bold={false} light={true}>
                    1st Transaction
                </Paragraph>
                </Box>
                <Box width="130px" p="8px">
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
                <Box width="340px" p="8px">
                  <Field
                    id="transactionType1"
                    name="transactionType1"
                    component={SelectField}
                    placeholder="Select type"
                    isLoading={isTransTypesLoading}
                    options={transactionTypesOptions}
                    label="Transaction Type"
                    isDisabled={isDisabled}
                    validate={[formErrorUtil.isRequired]}
                  />
                </Box>
                <Box width="130px" p="8px">
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
                <Box p="8px" pt="30px">
                  <Paragraph bold={false} light={true}>
                    2nd Transaction
              </Paragraph>
                </Box>
                <Box width="130px" p="8px">
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
                <Box width="340px" p="8px">
                  <Field
                    id="transactionType2"
                    name="transactionType2"
                    component={SelectField}
                    isLoading={isTransTypesLoading}
                    options={transactionTypesOptions}
                    placeholder="Select Type"
                    label="Transaction Type"
                    isDisabled={isDisabled}
                    validate={[formErrorUtil.isRequired]}
                  />
                </Box>
                <Box width="130px" p="8px">
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
                <Box p="8px" pt="30px">
                  <Paragraph bold={false} light={true}>
                    3rd Transaction
              </Paragraph>
                </Box>
                <Box width="130px" p="8px">
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
                <Box width="340px" p="8px">
                  <Field
                    id="transactionType3"
                    name="transactionType3"
                    component={SelectField}
                    isLoading={isTransTypesLoading}
                    options={transactionTypesOptions}
                    placeholder="Select type"
                    label="Transaction Type"
                    isDisabled={isDisabled}
                    validate={[formErrorUtil.isRequired]}
                  />
                </Box>
                <Box width="130px" p="8px">
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
              </Flex>
              <Hr />
              <Flex
                justifyContent="flex-end"
                width={[1]}
              >
                <Button
                  text="Illustrate"
                  isLoading={isLoading}
                />
              </Flex>
            </Flex>
          </form>
        </React.Fragment>
      )}
    </React.Fragment >
  );
};

export default reduxForm<{}, IRevolvingCreditIllustrationForm>({
  form: formNamesConst.PRODUCT_ILLUSTRATION_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(RevolvingCreditIllustrationForm);
