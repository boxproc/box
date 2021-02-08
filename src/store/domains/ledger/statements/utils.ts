import { repaymentStatusOptions, statementsStatusOptions, yesNoConst } from 'consts';

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
    start_date,
    end_date,
    repayment_due_date,
    balance_open,
    balance_close,
    repayment_minimum_amount_due,
    repayment_status,
    status,
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
    sequence_number,
    repayment_minimum_percentage,
    repayment_minimum_interest,
    repayment_amount,
    over_limit,
    estimated_interest,
    total_overdue_repayments,
    total_interest,
    total_fees,
    total_credits,
    total_debits,
    date_of_last_update,
  } = data;

  const repaymentStatus = repaymentStatusOptions.find(el => el.value === repayment_status);
  const statementStatus = statementsStatusOptions.find(el => el.value === status);

  return {
    account: {
      accountId: account_id,
      accountAlias: account_alias,
      accountAliasAdditional: account_alias_additional,
      productName: product_name,
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
      sequenceNumber: sequence_number,
      statementDate: statement_date,
      startDate: start_date,
      endDate: end_date,
      repaymentDueDate: repayment_due_date,
      firstTransactionId: first_transaction_id,
      lastTransactionId: last_transaction_id,
      balanceOpen: stringsUtil.numberToFixed(balance_open, 2),
      balanceClose: stringsUtil.numberToFixed(balance_close, 2),
      repaymentMinimumAmountDue: stringsUtil.numberToFixed(repayment_minimum_amount_due, 2),
      repaymentStatus: repaymentStatus && repaymentStatus.label,
      status: statementStatus && statementStatus.label,
      repaymentMinimumPercentage: stringsUtil.numberToFixed(repayment_minimum_percentage, 2),
      repaymentMinimumInterest: stringsUtil.numberToFixed(repayment_minimum_interest, 2),
      repaymentAmount: stringsUtil.numberToFixed(repayment_amount, 2),
      overLimit: stringsUtil.numberToFixed(over_limit, 2),
      estimatedInterest: stringsUtil.numberToFixed(estimated_interest, 2),
      totalOverdueRepayments: stringsUtil.numberToFixed(total_overdue_repayments, 2),
      totalInterest: stringsUtil.numberToFixed(total_interest, 2),
      totalFees: stringsUtil.numberToFixed(total_fees, 2),
      totalCredits: stringsUtil.numberToFixed(total_credits, 2),
      totalDebits: stringsUtil.numberToFixed(total_debits, 2),
      dateOfLastUpdate: date_of_last_update,
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
    balance_authorised_before,
    balance_authorised_after,
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
    balanceAuthorisedBefore: stringsUtil.numberToFixed(balance_authorised_before, 2),
    balanceAuthorisedAfter: stringsUtil.numberToFixed(balance_authorised_after, 2),
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
    start_date,
  } = data;

  return {
    ...prepareStatementsToRender(data),
    startDate: start_date,
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
    prev_stmnt_unpaid_principal,
    repayment_date,
    repaid_flag,
    interest_calc_start_date,
    always_charge_interest,
    prev_accrued_interest,
    accrued_interest_repaid,
    prev_accrued_interest_repaid,
    outsd_accrued_interest,
    outsd_accrued_interest_repaid,
    stmnt_unpaid_principal,
    outsd_stmnt_unpaid_principal,
    stmnt_repaid_principal,
    prev_stmnt_repaid_principal,
    outsd_stmnt_repaid_principal,
  } = data;

  return {
    statementId: statement_id,
    productAprId: product_apr_id,
    description,
    rate: stringsUtil.numberToFixed(rate, 2),
    repaymentDate: repayment_date,
    accruedInterest: stringsUtil.numberToFixed(accrued_interest, 5),
    prevAccruedInterest: stringsUtil.numberToFixed(prev_accrued_interest, 5),
    accruedInterestRepaid: stringsUtil.numberToFixed(accrued_interest_repaid, 5),
    prevAccruedInterestRepaid: stringsUtil.numberToFixed(prev_accrued_interest_repaid, 5),
    outsdAccruedInterest: stringsUtil.numberToFixed(outsd_accrued_interest, 5),
    outsdAccruedInterestRepaid: stringsUtil.numberToFixed(outsd_accrued_interest_repaid, 5),
    stmntUnpaidPrincipal: stringsUtil.numberToFixed(stmnt_unpaid_principal, 5),
    prevStmntUnpaidPrincipal: stringsUtil.numberToFixed(prev_stmnt_unpaid_principal, 5),
    outsdStmntUnpaidPrincipal: stringsUtil.numberToFixed(outsd_stmnt_unpaid_principal, 5),
    stmntRepaidPrincipal: stringsUtil.numberToFixed(stmnt_repaid_principal, 5),
    prevStmntRepaidPrincipal: stringsUtil.numberToFixed(prev_stmnt_repaid_principal, 5),
    outsdStmntRepaidPrincipal: stringsUtil.numberToFixed(outsd_stmnt_repaid_principal, 5),
    repaidFlag: repaid_flag === yesNoConst.YES,
    interestCalcStartDate: interest_calc_start_date,
    alwaysChargeInterest: always_charge_interest === yesNoConst.YES,
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
        balanceAuthorisedBefore: null,
        balanceAuthorisedAfter: null,
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

      const {
        description,
        rate,
        interest_calc_start_date,
        repayment_date,
        repaid_flag,
        always_charge_interest,
        accrued_interest,
        prev_accrued_interest,
        outsd_accrued_interest,
        accrued_interest_repaid,
        prev_accrued_interest_repaid,
        outsd_accrued_interest_repaid,
        stmnt_unpaid_principal,
        prev_stmnt_unpaid_principal,
        outsd_stmnt_unpaid_principal,
        stmnt_repaid_principal,
        prev_stmnt_repaid_principal,
        outsd_stmnt_repaid_principal,
      } = el;

      return {
        description,
        rate,
        interestCalculationStartDate: interest_calc_start_date,
        repaymentDate: repayment_date,
        repaid: repaid_flag === yesNoConst.YES ? 'Yes' : 'No',
        alwaysChargeInterest: always_charge_interest === yesNoConst.YES ? 'Yes' : 'No',
        accruedInterest: stringsUtil.numberToFixed(accrued_interest, 2),
        previousAccruedInterest: stringsUtil.numberToFixed(prev_accrued_interest, 2),
        outstandingAccruedInterest: stringsUtil.numberToFixed(outsd_accrued_interest, 2),
        accruedInterestRepaid: stringsUtil.numberToFixed(accrued_interest_repaid, 2),
        previousAccruedInterestRepaid: stringsUtil.numberToFixed(prev_accrued_interest_repaid, 2),
        outstandingAccruedInterestRepaid: stringsUtil
          .numberToFixed(outsd_accrued_interest_repaid, 2),
        statementUnpaidPrincipal: stringsUtil.numberToFixed(stmnt_unpaid_principal, 2),
        previousStatementUnpaidPrincipal: stringsUtil.numberToFixed(prev_stmnt_unpaid_principal, 2),
        outstandingStatementUnpaidPrincipal: stringsUtil
          .numberToFixed(outsd_stmnt_unpaid_principal, 2),
        statementRepaidPrincipal: stringsUtil.numberToFixed(stmnt_repaid_principal, 2),
        previousStatementRepaidPrincipal: stringsUtil.numberToFixed(prev_stmnt_repaid_principal, 2),
        outstandingStatementRepaidPrincipal: stringsUtil
          .numberToFixed(outsd_stmnt_repaid_principal, 2),
      };

    });
  } else {
    return [{
      description: null,
      rate: null,
      interestCalculationStartDate: null,
      repaymentDate: null,
      repaid: null,
      alwaysChargeInterest: null,
      accruedInterest: null,
      previousAccruedInterest: null,
      outstandingAccruedInterest: null,
      accruedInterestRepaid: null,
      previousAccruedInterestRepaid: null,
      outstandingAccruedInterestRepaid: null,
      statementUnpaidPrincipal: null,
      previousStatementUnpaidPrincipal: null,
      outstandingStatementUnpaidPrincipal: null,
      statementRepaidPrincipal: null,
      previousStatementRepaidPrincipal: null,
      outstandingStatementRepaidPrincipal: null,
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
