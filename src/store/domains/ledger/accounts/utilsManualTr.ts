import { ImmutableArray } from 'seamless-immutable';

import { transactionStatusOptions } from 'consts';
import { IManualTransactionFromData, IManualTransactionResultData } from './typesManualTr';

import { stringsUtil } from 'utils';

export const prepareManualTrDataToSend = (data: Partial<IManualTransactionFromData>) => {
  if (!data) {
    return null;
  }

  const {
    transactionType,
    currencyCode,
    accountId,
    amount,
    description,
    mandate,
  } = data;

  const transactionTypeValue = transactionType ? transactionType.value : null;
  const mandateValue = mandate ? mandate.value : null;
  const currencyValue = currencyCode ? currencyCode.value : null;

  return {
    transaction_type_id: transactionTypeValue,
    currency_num_code: mandateValue ? null : currencyValue,
    mandate_id: mandateValue,
    account_id: stringsUtil.toNumber(accountId),
    amount: stringsUtil.toNumber(amount),
    description,
  };
};

export const prepareManualTrResultDataToRender =
  (data: ImmutableArray<IManualTransactionResultData>) => {
    if (!data || !data.length) {
      return null;
    }

    const {
      transaction_id,
      status,
      balance_settled_before,
      balance_settled_after,
      balance_authorised_before,
      balance_authorised_after,
    } = data[0];

    const transactionStatus = transactionStatusOptions.find(el => el.value === status);

    return {
      transactionId: transaction_id,
      status: transactionStatus && transactionStatus.label,
      balanceSettledBefore: balance_settled_before,
      balanceSettledAfter: balance_settled_after,
      balanceAuthorisedBefore: balance_authorised_before,
      balanceAuthorisedAfter: balance_authorised_after,
    };
  };
