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
    product: values.product,
    firstName: values.first_name,
    lastName: values.last_name,
  };
};

export const preparedFilterParamsToSend = (params: Partial<LedgerStatementsFilterParams>) => {
  if (!params) {
    return null;
  }

  const {
    id,
    institutionId,
    firstName,
    lastName,
    accountAlias,
    product,
    dateFrom,
    dateTo,
  } = params;

  return {
    id: Number(id),
    institution_id: institutionId && Number(institutionId.value),
    first_name: firstName,
    last_name: lastName,
    product: product && product.length && product.map(name => name.label),
    account_alias: accountAlias,
    date_from: dateFrom,
    date_to: dateTo,
  };
};
