import React from 'react';

import { modalNames } from 'consts';

import ConfirmationModal from './ConfirmationModal';
import MessageModal from './MessageModal';

// Product Modeler
import { AddProductModal, EditProductModal } from 'containers/ProductDesigner/Products/modals';

// Ledger
import { EditAccountModal } from 'containers/Ledger/Accounts/modals';
import { AddCustomerModal, EditCustomerModal } from 'containers/Ledger/Customers/modals';
import { TransactionModal } from 'containers/Ledger/Transactions/modals';

// Administration
import { AddSystemPropertyModal } from 'containers/Administration/SystemProperties/modals';

// tslint:disable-next-line: max-line-length
import AddUsersGroupModal from 'containers/Administration/Permission/UsersGroup/AddUserGroup/AddUsersGroupModal';
// tslint:disable-next-line: max-line-length
import EditUsersGroupModal from 'containers/Administration/Permission/UsersGroup/EditUserGroup/EditUsersGroupModal';

// tslint:disable-next-line: max-line-length
import AddCyclesEditorModal from 'containers/Administration/Cycles/CyclesEditor/AddCyclesEditorModal';
// tslint:disable-next-line: max-line-length
import EditCyclesEditorModal from 'containers/Administration/Cycles/CyclesEditor/EditCyclesEditorModal';

import AddSchedulerModal from 'containers/Administration/Scheduler/AddSchedulerModal';
import EditSchedularModal from 'containers/Administration/Scheduler/EditSchedularModal';

import AddUsersModal from 'containers/Administration/Permission/Users/AddUsersModal';
import EditUsersModal from 'containers/Administration/Permission/Users/EditUsersModal';

export const modalsList = [
  {
    name: modalNames.MESSAGE_MODAL,
    component: <MessageModal />,
  },
  {
    name: modalNames.CONFIRMATION_MODAL,
    component: <ConfirmationModal />,
  },
  {
    name: modalNames.ADD_ADMIN_SYSTEM_PROPERTY,
    component: <AddSystemPropertyModal />,
  },
  {
    name: modalNames.ADD_PRODUCT,
    component: <AddProductModal />,
  },
  {
    name: modalNames.EDIT_PRODUCT,
    component: <EditProductModal />,
  },
  {
    name: modalNames.ADD_ADMIN_SCHEDULER,
    component: <AddSchedulerModal />,
  },
  {
    name: modalNames.EDIT_ADMIN_SCHEDULER,
    component: <EditSchedularModal />,
  },
  {
    name: modalNames.ADD_ADMIN_CYCLE_EDITOR,
    component: <AddCyclesEditorModal />,
  },
  {
    name: modalNames.EDIT_CYCLE_EDITOR,
    component: <EditCyclesEditorModal />,
  },
  {
    name: modalNames.ADD_ADMIN_USER,
    component: <AddUsersModal />,
  },
  {
    name: modalNames.EDIT_ADMIN_USER,
    component: <EditUsersModal />,
  },
  {
    name: modalNames.ADD_ADMIN_USERS_GROUP,
    component: <AddUsersGroupModal />,
  },
  {
    name: modalNames.EDIT_ADMIN_USERS_GROUP,
    component: <EditUsersGroupModal />,
  },
  {
    name: modalNames.ADD_LEDGER_CUSTOMER,
    component: <AddCustomerModal />,
  },
  {
    name: modalNames.EDIT_LEDGER_CUSTOMER,
    component: <EditCustomerModal />,
  },
  {
    name: modalNames.EDIT_LEDGER_ACCOUNT,
    component: <EditAccountModal />,
  },
  {
    name: modalNames.LEDGER_TRANSACTION,
    component: <TransactionModal />,
  },
];
