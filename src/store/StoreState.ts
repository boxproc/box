import { RouterState } from 'connected-react-router';
import { Reducer } from 'redux';
import { FormStateMap } from 'redux-form';

import { AdministrationState } from './domains/administration/';
import { AuditUserActivitiesState } from './domains/audit/userActivity';
import { AuthState } from './domains/auth';
import { ConstsState } from './domains/consts';
import { LedgerState } from './domains/ledger';
import { LoaderState } from './domains/loader';
import { ModalsState } from './domains/modals';
import { ProductDesignerState } from './domains/productDesigner';
import { UiItemsState } from './domains/uiItems';

export interface StoreState {
  form: Reducer<FormStateMap>;
  router: RouterState;
  loader: LoaderState;
  uiItems: UiItemsState;
  userActivities: AuditUserActivitiesState;
  modals: ModalsState;
  administration: AdministrationState;
  auth: AuthState;
  productDesigner: ProductDesignerState;
  consts: ConstsState;
  ledger: LedgerState;
}
