import React from 'react';

import { modalNamesConst } from 'consts';

import { AddAccountModal, EditAccountModal } from 'containers/Ledger/Accounts/modals';
import { InfoCardModal } from 'containers/Ledger/Cards/modals';
import { AddCustomerModal, EditCustomerModal } from 'containers/Ledger/Customers/modals';
import { TransactionModal } from 'containers/Ledger/Transactions/modals';

export const ledgerModalList = [
  {
    name: modalNamesConst.ADD_LEDGER_CUSTOMER,
    component: <AddCustomerModal />,
  },
  {
    name: modalNamesConst.EDIT_LEDGER_CUSTOMER,
    component: <EditCustomerModal />,
  },
  {
    name: modalNamesConst.ADD_LEDGER_ACCOUNT,
    component: <AddAccountModal />,
  },
  {
    name: modalNamesConst.EDIT_LEDGER_ACCOUNT,
    component: <EditAccountModal />,
  },
  {
    name: modalNamesConst.LEDGER_TRANSACTION,
    component: <TransactionModal />,
  },
  {
    name: modalNamesConst.INFO_LEDGER_CARDS,
    component: <InfoCardModal />,
  },
];
