import { RouterState } from 'connected-react-router';
import { Reducer } from 'redux';
import { FormStateMap } from 'redux-form';

import { IAdminState } from './domains/admin';
import { IAuditState } from './domains/audit';
import { ILedgerState } from './domains/ledger';
import { ILoaderState } from './domains/loader';
import { ILoginState } from './domains/login';
import { IModalsState } from './domains/modals';
import { IProductDesignerState } from './domains/productDesigner';
import { IUiItemsState } from './domains/uiItems';
import { IUtilsState } from './domains/utils';

export interface IStoreState {
  form: Reducer<FormStateMap>;
  admin: IAdminState;
  audit: IAuditState;
  ledger: ILedgerState;
  loader: ILoaderState;
  login: ILoginState;
  modals: IModalsState;
  productDesigner: IProductDesignerState;
  router: RouterState;
  uiItems: IUiItemsState;
  utils: IUtilsState;
}
