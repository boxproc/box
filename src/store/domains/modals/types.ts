import { ProductItem } from 'store/domains/productDesigner';
import { ParsedSelectValues } from 'types';

export interface FieldsMessageModal {
  title: string;
  message?: string;
  details?: string;
}

export interface FieldsEditProductModal {
  values: ProductItem;
}

export interface PreparedFieldsEditProductModal {
  id: number;
  institutionId: number;
  name: string;
  description: string;
  status: string;
  historyRetentionNumberOfDays: string;
  defaultStatementCycleId: string;
  productType: ParsedSelectValues;
  scheme: ParsedSelectValues;
  currencyCode: ParsedSelectValues;
  lockedFlag: boolean;
}

export interface ModalsData {
  name: string;
  fields?: any;
}

export interface ModalsState {
  isMessageModal: boolean;
  fieldsMessageModal?: FieldsMessageModal;

  isAddAdminSystemPropertyModal: boolean;

  isAddProductModal: boolean;
  isEditProductModal: boolean;
  fieldsEditProductModal?: FieldsEditProductModal;

  isAddSchedulerModal: boolean;
  isEditSchedulerModal: boolean;
  fieldsEditSchedulerModal?: any;
}
