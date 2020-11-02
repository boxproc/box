import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, NumberFormatField } from 'components';
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
  margin-right: 15px;
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
              <Box width="120px" p="8px">
                <Field
                  id="id"
                  name="id"
                  component={InputField}
                  label="ID"
                  disabled={true}
                  isNumber={true}
                />
              </Box>
              <Box width="120px" p="8px">
                <Field
                  id="sequenceNumber"
                  name="sequenceNumber"
                  component={InputField}
                  label="Sequence Number"
                  disabled={true}
                  isNumber={true}
                />
              </Box>
              <Box width="120px" p="8px">
                <Field
                  id="accountId"
                  name="accountId"
                  component={InputField}
                  label="Account ID"
                  disabled={true}
                  isNumber={true}
                />
              </Box>
              <Box width="150px" p="8px">
                <Field
                  id="accountAlias"
                  name="accountAlias"
                  component={InputField}
                  label="Account Alias"
                  disabled={true}
                  isNumber={true}
                />
              </Box>
              <Box width="120px" p="8px">
                <Field
                  id="firstTransactionId"
                  name="firstTransactionId"
                  component={InputField}
                  label="First Transaction ID"
                  disabled={true}
                  isNumber={true}
                />
              </Box>
              <Box width="120px" p="8px">
                <Field
                  id="lastTransactionId"
                  name="lastTransactionId"
                  component={InputField}
                  label="Last Transaction ID"
                  disabled={true}
                  isNumber={true}
                />
              </Box>
              <Box width="170px" p="8px">
                <Field
                  id="repaymentStatus"
                  name="repaymentStatus"
                  component={InputField}
                  label="Repayment Status"
                  disabled={true}
                />
              </Box>
              <Box width="100px" p="8px">
                <Field
                  id="status"
                  name="status"
                  component={InputField}
                  label="Status"
                  disabled={true}
                />
              </Box>
              <Box width="120px" p="8px">
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
              <Box width="120px" p="8px">
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
              <Box width="120px" p="8px">
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
              <Box width="120px" p="8px">
                <Field
                  id="repaymentDate"
                  name="repaymentDate"
                  component={InputField}
                  label="Repayment Date"
                  placeholder={dateFormatConst.DATE}
                  mask={maskFormatConst.DATE}
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
              <Box width={[1]} p="8px">
                <Field
                  id="productName"
                  name="productName"
                  component={InputField}
                  label="Product Name"
                  disabled={true}
                />
              </Box>
            </Flex>
          </Flex>
          <Box width="160px" p="8px">
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
          <Box width="160px" p="8px">
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
          <Box width="160px" p="8px">
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
