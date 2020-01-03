import { RouterState } from 'connected-react-router';
import { Reducer } from 'redux';
import { FormStateMap } from 'redux-form';

import { AdministrationState } from './domains/administration/';
import { AuditState } from './domains/audit';
import { LedgerState } from './domains/ledger';
import { LoaderState } from './domains/loader';
import { LoginState } from './domains/login';
import { ModalsState } from './domains/modals';
import { ProductDesignerState } from './domains/productDesigner';
import { UiItemsState } from './domains/uiItems';
import { UtilsState } from './domains/utils';

export interface StoreState {
  form: Reducer<FormStateMap>;
  router: RouterState;
  loader: LoaderState;
  uiItems: UiItemsState;
  audit: AuditState;
  modals: ModalsState;
  administration: AdministrationState;
  login: LoginState;
  productDesigner: ProductDesignerState;
  ledger: LedgerState;
  utils: UtilsState;
}
