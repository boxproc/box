import { administrationModalList } from './administrationModalList';
import { generalModalList } from './generalModalList';
import { ledgerModalList } from './ledgerModalList';
import { productDesignerModalList } from './productDesignerModalList';

export const modalsList = [
  ...generalModalList,
  ...administrationModalList,
  ...ledgerModalList,
  ...productDesignerModalList,
];
