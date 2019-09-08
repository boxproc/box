export enum modalTypes {
  EDIT_MODAL = 'editModal',
  MESSAGE = 'messageModal',
  CONFIRMATION_MODAL = 'confirmationModal',
}

export enum modalNames {
  // General Modals
  MESSAGE_MODAL = 'MessageModal',
  CONFIRMATION_MODAL = 'ConfirmationModal',

  REGISTER_2FA_MODAL = 'Register2faModal',

  // Product Designer
  ADD_PRODUCT = 'AddProductModal',
  EDIT_PRODUCT = 'EditProductModal',

  // Ledger
  ADD_LEDGER_CUSTOMER = 'AddLedgerCustomerModal',
  EDIT_LEDGER_CUSTOMER = 'EditLedgerCustomerModal',
  EDIT_LEDGER_ACCOUNT = 'EditLedgerAccountModal',
  ADD_LEDGER_ACCOUNT = 'AddLedgerAccountModal',
  LEDGER_TRANSACTION = 'LedgerTransactionModal',
  INFO_LEDGER_CARDS = 'InfoCardModal',

  // Administration
  ADD_ADMIN_SYSTEM_PROPERTY = 'AddAdminSystemPropertyModal',
  ADD_ADMIN_CYCLE_EDITOR = 'AddAdminCycleEditorModal',
  EDIT_CYCLE_EDITOR = 'EditCycleEditorRecordsModal',
  ADD_ADMIN_SCHEDULER = 'AddAdminSchedulerModal',
  EDIT_ADMIN_SCHEDULER = 'EditAdminSchedulerModal',
  GENERATE_CRON_EXPRESSION = 'GenerateCronExpressionModal',
  ADD_ADMIN_ACTIVE_USER = 'AddAdminActiveUser',
  ADD_ADMIN_USERS_GROUP = 'AddAdminUsersGroupModal',
  EDIT_ADMIN_USERS_GROUP = 'EditAdminUsersGroupModal',
  ADD_ADMIN_USER = 'AddAdminUserModal',
  EDIT_ADMIN_USER = 'EditAdminUserModal',
  ADD_ADMIN_ENDPOINT = 'AddAdminEndPoint',
  EDIT_ADMIN_ENDPOINT = 'EditAdminEndpoint',
  ADD_ADMIN_INTERFACE = 'AddAdminInterface',
  EDIT_ADMIN_INTERFACE = 'EditAdminInterface',
  ADD_ADMIN_INSTITUTION = 'AddAdminInstitutionModal',
  EDIT_ADMIN_INSTITUTION = 'EditAdminInstitutionModal',
}
