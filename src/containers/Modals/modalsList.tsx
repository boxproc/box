import React from 'react';

import { modalNamesConst } from 'consts';

import MessageModal from 'containers/Modals//MessageModal';
import ChangeProfileModal from 'containers/Modals/ChangeProfileModal';
import ConfirmationModal from 'containers/Modals/ConfirmationModal';
import LoginCode2faModal from 'containers/Modals/LoginCode2faModal';
import LogModal from 'containers/Modals/LogModal';
import Register2faModal from 'containers/Modals/Register2faModal';
import SettleTransactionModal from 'containers/Modals/SettleTransactionModal';
import ChangePasswordModal from './ChangePasswordModal';

import { endpointsModals } from 'containers/Administration/Endpoints/modals';
import { institutionsModals } from 'containers/Administration/Institutions/modals';
import { interfacesModals } from 'containers/Administration/Interfaces/modals';
import { usersModals } from 'containers/Administration/Permission/Users/modals';
import { usersGroupModals } from 'containers/Administration/Permission/UsersGroup/modals';
import { schedulerModals } from 'containers/Administration/Scheduler/modals';
import { systemPropertiesModals } from 'containers/Administration/SystemProperties/modals';
import { apiCallsModals } from 'containers/Audit/ApiCalls/modals';
import { accountsModals } from 'containers/Ledger/Accounts/modals';
import { cardsModals } from 'containers/Ledger/Cards/modals';
import { customersModals } from 'containers/Ledger/Customers/modals';
import { statementsModals } from 'containers/Ledger/Statements/modals';
import { transactionsModals } from 'containers/Ledger/Transactions/modals';
import { manualTransactionModals } from 'containers/Modals/ManualTransactionModals';

import { productsModals } from 'containers/ProductDesigner/Products/modals';

export const modalsList = [
  {
    name: modalNamesConst.MESSAGE,
    component: <MessageModal />,
  },
  {
    name: modalNamesConst.CONFIRMATION,
    component: <ConfirmationModal />,
  },
  {
    name: modalNamesConst.LOG,
    component: <LogModal />,
  },
  {
    name: modalNamesConst.REGISTER_2FA,
    component: <Register2faModal />,
  },
  {
    name: modalNamesConst.LOGIN_CODE_2FA,
    component: <LoginCode2faModal />,
  },
  {
    name: modalNamesConst.CHANGE_PROFILE,
    component: <ChangeProfileModal />,
  },
  {
    name: modalNamesConst.CHANGE_PASSWORD,
    component: <ChangePasswordModal />,
  },
  {
    name: modalNamesConst.SETTLE_TRANSACTION,
    component: <SettleTransactionModal />,
  },
  ...manualTransactionModals,
  ...endpointsModals,
  ...institutionsModals,
  ...interfacesModals,
  ...usersModals,
  ...usersGroupModals,
  ...schedulerModals,
  ...systemPropertiesModals,
  ...accountsModals,
  ...cardsModals,
  ...customersModals,
  ...statementsModals,
  ...transactionsModals,
  ...productsModals,
  ...apiCallsModals,
];
