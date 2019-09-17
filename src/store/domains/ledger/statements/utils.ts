import {
  LedgerStatementItem,
  LedgerStatementsFilterParams,
} from './types';

export const prepareValuesToRender = (values: LedgerStatementItem) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    accountId: values.id,
    dateFrom: values.date_from,
    dateTo: values.date_to,
    balanceOpen: values.balance_open.toFixed(2),
    balanceClose: values.balance_close.toFixed(2),
    minimumAmountDueRepayment: values.minimum_amount_due_repayment.toFixed(2),
    statementCycleId: values.statement_cycle_id,
    cycleExecutionHistoryId: values.cycle_execution_history_id,
    accountAlias: values.account_alias,
    productName: values.product_name,
    firstName: values.first_name,
    lastName: values.last_name,
  };
};

export const preparedFilterParamsToSend = (params: Partial<LedgerStatementsFilterParams>) => {
  if (!params) {
    return null;
  }

  const {
    accountId,
    institutionId,
    firstName,
    lastName,
    accountAlias,
    product,
    dateFrom,
    dateTo,
  } = params;

  return {
    account_id: accountId ? Number(accountId) : null,
    institution_id: institutionId ? Number(institutionId.value) : null,
    first_name: firstName ? firstName : null,
    last_name: lastName ? lastName : null,
    product: (product && product.length) ? product.map(name => name.value) : null,
    account_alias: accountAlias ? accountAlias : null,
    date_from: dateFrom ? dateFrom : null,
    date_to: dateTo ? dateTo : null,
  };
};
