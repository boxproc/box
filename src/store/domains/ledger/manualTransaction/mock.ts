import { LedgerManualTransactionResultResponse } from './types';

export const ledgerManualTransactionData: LedgerManualTransactionResultResponse = {
  transaction_result: [
    {
      transaction_id: 1,
      status: '00',
      balance_settled_before: 10.19,
      balance_settled_after: 110.19,
      balance_available_before: 10.19,
      balance_available_after: 110.19,
    },
  ],
};
