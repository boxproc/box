import React from 'react';

import { modalNames } from 'consts';

import { AddAccountModal, EditAccountModal } from 'containers/Ledger/Accounts/modals';
import { InfoCardModal } from 'containers/Ledger/Cards/modals';
import { AddCustomerModal, EditCustomerModal } from 'containers/Ledger/Customers/modals';
import { TransactionModal } from 'containers/Ledger/Transactions/modals';

export const ledgerModalList = [
  {
    name: modalNames.ADD_LEDGER_CUSTOMER,
    component: <AddCustomerModal />,
  },
  {
    name: modalNames.EDIT_LEDGER_CUSTOMER,
    component: <EditCustomerModal />,
  },
  {
    name: modalNames.ADD_LEDGER_ACCOUNT,
    component: <AddAccountModal />,
  },
  {
    name: modalNames.EDIT_LEDGER_ACCOUNT,
    component: <EditAccountModal />,
  },
  {
    name: modalNames.LEDGER_TRANSACTION,
    component: <TransactionModal />,
  },
  {
    name: modalNames.INFO_LEDGER_CARDS,
    component: <InfoCardModal />,
  },
];
