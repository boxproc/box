import { repaymentStatusOptions, repaymentTypesOptions } from 'consts';

import {
  IAccountStatementData,
  IChangeMinimumAmountRequest,
  IChangeMinimumAmountRequestData,
  IStatementApr,
  IStatementAprData,
  IStatementData,
  IStatementsFilter,
  IStatementTransaction,
  IStatementTransactionData,
} from './types';

import { ISelectValue } from 'types';
import { stringsUtil } from 'utils';

export const prepareStatementToRender = (
  data: Partial<IStatementData>,
  institution?: ISelectValue
) => {
  if (!data) {
    return null;
  }

  const {
    id,
    account_id,
    first_transaction_id,
    last_transaction_id,
    statement_date,
    repayment_date,
    balance_open,
    balance_close,
    repayment_minimum_amount_due,
    repayment_status,
    account_alias,
    product_name,
    first_name,
    last_name,
    account_alias_additional,
    address_line1,
    address_line2,
    address_line3,
    address_line4,
    address_town,
    address_post_code,
    address_country_code,
    previous_statement_id,
  } = data;

  const repaymentStatus = repaymentStatusOptions.find(el => el.value === repayment_status);

  return {
    account: {
      accountId: account_id,
      accountAlias: account_alias,
      accountAliasAdditional: account_alias_additional,
      firstName: first_name,
      lastName: last_name,
      institutionId: institution && institution.label,
      addressLine1: address_line1,
      addressLine2: address_line2,
      addressLine3: address_line3,
      addressLine4: address_line4,
      addressTown: address_town,
      addressPostCode: address_post_code,
      addressCountryCode: address_country_code,
    },
    statement: {
      id,
      statementDate: statement_date,
      repaymentDate: repayment_date,
      productName: product_name,
      firstTransactionId: first_transaction_id,
      lastTransactionId: last_transaction_id,
      balanceOpen: stringsUtil.numberToFixed(balance_open, 2),
      balanceClose: stringsUtil.numberToFixed(balance_close, 2),
      repaymentMinimumAmountDue: stringsUtil.numberToFixed(repayment_minimum_amount_due, 2),
      repaymentStatus: repaymentStatus && repaymentStatus.label,
      previousStatementId: previous_statement_id,
    },
  };
};

export const prepareStatementsToRender = (
  data: Partial<IStatementData>,
  institution?: ISelectValue
) => {
  const preparedData = prepareStatementToRender(data, institution);

  return { ...preparedData.account, ...preparedData.statement };
};

export const prepareTransactionsToRender = (data: Partial<IStatementTransactionData>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    transaction_datetime,
    amount,
    amount_in_original_currency,
    original_currency,
    grace_period,
    balance_available_before,
    balance_available_after,
    balance_settled_before,
    balance_settled_after,
    description,
    apr_id,
    apr_rate,
    status_name,
  } = data;

  return {
    id,
    transactionDatetime: transaction_datetime,
    amount: stringsUtil.numberToFixed(amount, 2),
    status: status_name,
    originalCurrency: original_currency,
    amountInOriginalCurrency: stringsUtil.numberToFixed(amount_in_original_currency, 2),
    balanceAvailableBefore: stringsUtil.numberToFixed(balance_available_before, 2),
    balanceAvailableAfter: stringsUtil.numberToFixed(balance_available_after, 2),
    balanceSettledBefore: stringsUtil.numberToFixed(balance_settled_before, 2),
    balanceSettledAfter: stringsUtil.numberToFixed(balance_settled_after, 2),
    description,
    aprId: apr_id,
    aprRate: stringsUtil.numberToFixed(apr_rate, 2),
    gracePeriod: grace_period,
  };
};

export const prepareFilterToSend = (data: Partial<IStatementsFilter>) => {
  if (!data) {
    return null;
  }

  const {
    accountAlias,
    accountId,
    firstName,
    institutionId,
    lastName,
    product,
    statementsDateFrom,
    statementsDateTo,
  } = data;

  return {
    account_alias: accountAlias ? accountAlias : null,
    account_id: accountId ? stringsUtil.toNumber(accountId) : null,
    date_from: statementsDateFrom ? statementsDateFrom : null,
    date_to: statementsDateTo ? statementsDateTo : null,
    first_name: firstName ? firstName : null,
    institution_id: institutionId ? institutionId.value : null,
    last_name: lastName ? lastName : null,
    product: (product && product.length) ? product.map(name => name.value) : null,
  };
};

export const prepareAccountStatementsToRender = (data: IAccountStatementData) => {
  if (!data) {
    return null;
  }

  const {
    accrued_interest_total,
    start_date,
    repayment_type,
  } = data;

  const repaymentType = repaymentTypesOptions.find(el => el.value === repayment_type);

  return {
    ...prepareStatementsToRender(data),
    accruedInterestTotal: stringsUtil.numberToFixed(accrued_interest_total, 5),
    startDate: start_date,
    repaymentType: repaymentType && repaymentType.label,
  };
};

export const prepareStatementAprsToRender = (data: IStatementAprData): IStatementApr => {
  if (!data) {
    return null;
  }

  const {
    statement_id,
    product_apr_id,
    accrued_interest,
    description,
    rate,
  } = data;

  return {
    statementId: statement_id,
    productAprId: product_apr_id,
    accruedInterest: stringsUtil.numberToFixed(accrued_interest, 5),
    description,
    rate: stringsUtil.numberToFixed(rate, 2),
  };
};

export const prepareStatementTransactionsForReport =
  (data: Array<IStatementTransactionData>): Array<Partial<IStatementTransaction>> => {
    if (data && data.length) {
      return data.map(el => {

        const preparedData = prepareTransactionsToRender(el);
        const clonedTransactions = { ...preparedData };

        delete clonedTransactions.id;
        delete clonedTransactions.aprId;

        return clonedTransactions;
      });
    } else {
      return [{
        transactionDatetime: null,
        status: null,
        amount: null,
        originalCurrency: null,
        amountInOriginalCurrency: null,
        balanceAvailableBefore: null,
        balanceAvailableAfter: null,
        balanceSettledBefore: null,
        balanceSettledAfter: null,
        description: null,
        aprRate: null,
        gracePeriod: null,
      }];
    }
  };

export const prepareStatementAprsForReport = (data: Array<IStatementAprData>) => {
  if (data && data.length) {
    return data.map(el => {

      const { description, rate, accrued_interest } = el;

      return {
        description,
        rate,
        accruedInterest: stringsUtil.numberToFixed(accrued_interest, 5),
      };

    });
  } else {
    return [{
      description: null,
      rate: null,
      accruedInterest: null,
    }];
  }
};

export const prepareChangeMinimumRepaymentReq = (data: Partial<IChangeMinimumAmountRequest>):
  IChangeMinimumAmountRequestData => {
  if (!data) {
    return null;
  }

  const { statementId, minimumRepayment } = data;
  return {
    statement_id: statementId,
    repayment_minimum_amount_due: Number(minimumRepayment),
  };
};
