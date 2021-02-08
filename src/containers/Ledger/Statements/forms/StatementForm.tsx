import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, InputField, NumberFormatField, T3 } from 'components';
import {
  dateFormatConst,
  formNamesConst,
  maskFormatConst,
  repaymentStatusConst,
  repaymentStatusOptions,
} from 'consts';
import { IStatement } from 'store';

const LeftPartWrapper = styled(Flex)`
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin-right: 10px;
  padding-right: 10px;
`;

interface IStatementForm {
  changeMinimumAmount: () => void;
  initialValues: IStatement;
}

type TStatementForm = IStatementForm & InjectedFormProps<{}, IStatementForm>;

const StatementForm: React.FC<TStatementForm> = ({
  changeMinimumAmount,
  initialValues,
}) => {
  const isRepaymentDue = React.useMemo(
    () => initialValues.repaymentStatus === repaymentStatusOptions
      .find(el => el.value === repaymentStatusConst.REPAYMENT_DUE).label,
    [initialValues]
  );

  return (
    <form>
      <Box mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Flex alignItems="flex-start">
            <LeftPartWrapper
              width="54%"
              alignItems="flex-end"
              flexWrap="wrap"
            >
              <Box width="100%" px="10px">
                <T3>Statement</T3>
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="id"
                  name="id"
                  component={InputField}
                  label="ID"
                  disabled={true}
                  isNumber={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="sequenceNumber"
                  name="sequenceNumber"
                  component={InputField}
                  label="Sequence Number"
                  disabled={true}
                  isNumber={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="firstTransactionId"
                  name="firstTransactionId"
                  component={InputField}
                  label="First Transaction ID"
                  disabled={true}
                  isNumber={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="lastTransactionId"
                  name="lastTransactionId"
                  component={InputField}
                  label="Last Transaction ID"
                  disabled={true}
                  isNumber={true}
                />
              </Box>
              <Box width={[1 / 2]} p="8px">
                <Field
                  id="repaymentStatus"
                  name="repaymentStatus"
                  component={InputField}
                  label="Repayment Status"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 2]} p="8px">
                <Field
                  id="status"
                  name="status"
                  component={InputField}
                  label="Status"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="startDate"
                  name="startDate"
                  component={InputField}
                  label="Start Date"
                  placeholder={dateFormatConst.DATE}
                  mask={maskFormatConst.DATE}
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="endDate"
                  name="endDate"
                  component={InputField}
                  label="End Date"
                  placeholder={dateFormatConst.DATE}
                  mask={maskFormatConst.DATE}
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="statementDate"
                  name="statementDate"
                  component={InputField}
                  label="Statement Date"
                  placeholder={dateFormatConst.DATE}
                  mask={maskFormatConst.DATE}
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="repaymentDueDate"
                  name="repaymentDueDate"
                  component={InputField}
                  label="Repayment Due Date"
                  placeholder={dateFormatConst.DATE}
                  mask={maskFormatConst.DATE}
                  disabled={true}
                />
              </Box>
              <Hr />
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="balanceOpen"
                  name="balanceOpen"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Balance open"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="balanceClose"
                  name="balanceClose"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Balance close"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="repaymentMinimumAmountDue"
                  name="repaymentMinimumAmountDue"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Minimum amount due repayment"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="repaymentAmount"
                  name="repaymentAmount"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Repayment Amount"
                  disabled={true}
                />
              </Box>
              <Hr />
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="repaymentMinimumPercentage"
                  name="repaymentMinimumPercentage"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Repayment Minimum Percentage"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="repaymentMinimumInterest"
                  name="repaymentMinimumInterest"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Repayment Minimum Interest"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="overLimit"
                  name="overLimit"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Over Limit"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="estimatedInterest"
                  name="estimatedInterest"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Estimated Interest"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="totalOverdueRepayments"
                  name="totalOverdueRepayments"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Total Overdue Repayments"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="totalInterest"
                  name="totalInterest"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Total Interest"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="totalFees"
                  name="totalFees"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Total Fees"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="totalCredits"
                  name="totalCredits"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Total Credits"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="totalDebits"
                  name="totalDebits"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Total Debits"
                  disabled={true}
                />
              </Box>
            </LeftPartWrapper>
            <Flex
              width="46%"
              alignItems="flex-end"
              justifyContent="flex-end"
              flexWrap="wrap"
            >
              <Box width="100%" px="10px">
                <T3>Customer</T3>
              </Box>
              <Box width={[1 / 2]} p="8px">
                <Field
                  id="firstName"
                  name="firstName"
                  component={InputField}
                  label="First Name"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 2]} p="8px">
                <Field
                  id="lastName"
                  name="lastName"
                  component={InputField}
                  label="Last Name"
                  disabled={true}
                />
              </Box>
              <Box width={[1]} p="8px">
                <Field
                  id="institutionId"
                  name="institutionId"
                  component={InputField}
                  label="Institution"
                  disabled={true}
                />
              </Box>
              <Hr />
              <Box width="100%" px="10px">
                <T3>Account</T3>
              </Box>
              <Box width={[1 / 3]} p="8px">
                <Field
                  id="accountId"
                  name="accountId"
                  component={InputField}
                  label="ID"
                  disabled={true}
                  isNumber={true}
                />
              </Box>
              <Box width={[1 / 3]} p="8px">
                <Field
                  id="accountAlias"
                  name="accountAlias"
                  component={InputField}
                  label="Alias"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 3]} p="8px">
                <Field
                  id="accountAliasAdditional"
                  name="accountAliasAdditional"
                  component={InputField}
                  label="Alias Additional"
                  disabled={true}
                />
              </Box>
              <Box width={[1]} p="8px">
                <Field
                  id="productName"
                  name="productName"
                  component={InputField}
                  label="Product Name"
                  disabled={true}
                />
              </Box>
              <Hr />
              <Box width="100%" px="10px">
                <T3>Address</T3>
              </Box>
              <Box width={[1 / 2]} p="8px">
                <Field
                  id="addressTown"
                  name="addressTown"
                  component={InputField}
                  label="Town"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="addressCountryCode"
                  name="addressCountryCode"
                  component={InputField}
                  label="Country Code"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 4]} p="8px">
                <Field
                  id="addressPostCode"
                  name="addressPostCode"
                  component={InputField}
                  label="Post Code"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 2]} p="8px">
                <Field
                  id="addressLine1"
                  name="addressLine1"
                  component={InputField}
                  label="Line 1"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 2]} p="8px">
                <Field
                  id="addressLine2"
                  name="addressLine2"
                  component={InputField}
                  label="Line 2"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 2]} p="8px">
                <Field
                  id="addressLine3"
                  name="addressLine3"
                  component={InputField}
                  label="Line 3"
                  disabled={true}
                />
              </Box>
              <Box width={[1 / 2]} p="8px">
                <Field
                  id="addressLine4"
                  name="addressLine4"
                  component={InputField}
                  label="Line 4"
                  disabled={true}
                />
              </Box>
            </Flex>
          </Flex>
          <Hr />
          <Box width="130px" p="8px">
            <Field
              id="dateOfLastUpdate"
              name="dateOfLastUpdate"
              component={InputField}
              label="Date of Last Update"
              placeholder={dateFormatConst.DATE}
              mask={maskFormatConst.DATE}
              disabled={true}
            />
          </Box>
          {isRepaymentDue && (
            <Box p="8px">
              <Button
                text="Change minimum amount"
                type="reset"
                onClick={changeMinimumAmount}
              />
            </Box>
          )}
        </Flex>
      </Box>
    </form>
  );
};

export default reduxForm<{}, IStatementForm>({
  form: formNamesConst.STATEMENT,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(StatementForm);
