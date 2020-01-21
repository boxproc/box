import { SettleTransactionData } from './types';

import { ResponseStatusType } from 'types';

export const transactionData: SettleTransactionData = {
  transaction: [
    {
      transaction_id: 3456,
      amount_settled: 1,
      settled_datetime: '2020-01-08 22:55:12',
    },
  ],
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: '00',
  },
};
