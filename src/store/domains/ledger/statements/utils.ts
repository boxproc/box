import {
  LedgerStatementItem,
  LedgerStatementsFilter,
  LedgerStatementTransactionsItem
} from './types';

export const prepareValuesToRender = (values: Partial<LedgerStatementItem>) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    accountId: values.account_id,
    firstTransactionId: values.first_transaction_id,
    lastTransactionId: values.last_transaction_id,
    statementDate: values.statement_date,
    balanceOpen: values.balance_open && values.balance_open.toFixed(2),
    balanceClose: values.balance_close && values.balance_close.toFixed(2),
    minimumAmountDueRepayment: values.minimum_amount_due_repayment
      && values.minimum_amount_due_repayment.toFixed(2),
    statementCycleName: values.statement_cycle_description,
    cycleExecutionHistoryId: values.cycle_execution_history_id,
    accountAlias: values.account_alias,
    productName: values.product_name,
    firstName: values.first_name,
    lastName: values.last_name,
  };
};

export const prepareTransactionsValuesToRender =
  (values: Partial<LedgerStatementTransactionsItem>) => {
    if (!values) {
      return null;
    }

    return {
      id: values.id,
      transactionDatetime: values.transaction_datetime,
      amount: values.amount.toFixed(2),
      amountInOriginalCurrency: values.amount_in_original_currency.toFixed(2),
      balanceAvailableBefore: values.balance_available_before.toFixed(2),
      balanceAvailableAfter: values.balance_available_after.toFixed(2),
      balanceSettledBefore: values.balance_settled_before.toFixed(2),
      balanceSettledAfter: values.balance_settled_after.toFixed(2),
      description: values.description,
      aprId: values.apr_id,
      aprRate: values.apr_rate && values.apr_rate.toFixed(2),
    };
  };

export const preparedFilterToSend = (params: Partial<LedgerStatementsFilter>) => {
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
    statementsDateFrom,
    statementsDateTo,
  } = params;

  return {
    account_id: accountId ? accountId : null,
    institution_id: institutionId ? institutionId.value : null,
    first_name: firstName ? firstName : null,
    last_name: lastName ? lastName : null,
    product: (product && product.length) ? product.map(name => name.value) : null,
    account_alias: accountAlias ? accountAlias : null,
    date_from: statementsDateFrom ? statementsDateFrom : null,
    date_to: statementsDateTo ? statementsDateTo : null,
  };
};
