import { RouterState } from 'connected-react-router';
import { Reducer } from 'redux';
import { FormStateMap } from 'redux-form';

import { AdministrationState } from './domains/administration/';
import { AuditState } from './domains/audit';
import { LedgerState } from './domains/ledger';
import { LoaderState } from './domains/loader';
import { LoginState } from './domains/login';
import { IModalsState } from './domains/modals';
import { ProductDesignerState } from './domains/productDesigner';
import { UiItemsState } from './domains/uiItems';
import { IUtilsState } from './domains/utils';

export interface StoreState {
  form: Reducer<FormStateMap>;
  router: RouterState;
  loader: LoaderState;
  uiItems: UiItemsState;
  audit: AuditState;
  modals: IModalsState;
  administration: AdministrationState;
  login: LoginState;
  productDesigner: ProductDesignerState;
  ledger: LedgerState;
  utils: IUtilsState;
}
