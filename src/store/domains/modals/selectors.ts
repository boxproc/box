import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { productTypesOptions, schemeTypesOptions, yesNoTypes } from 'consts';
import { selectCurrencyCodes } from '../consts';

export const selectModalsStateList = (state: StoreState) => state.modals;

export const selectIsMessageModal = (state: StoreState) => state.modals.isMessageModal;

export const selectFieldsMessageModal = (state: StoreState) => state.modals.fieldsMessageModal;

export const selectDefaultFieldsEditProductModal = (state: StoreState) =>
  state.modals.fieldsEditProductModal.values;

export const selectFieldsEditProductModal = createSelector(
  selectDefaultFieldsEditProductModal,
  selectCurrencyCodes,
  (fields, currencyCodes) => {
    return {
      ...fields,
      productType: {
        value: productTypesOptions.find(el => el.label === fields.productType).value,
        label: fields.productType,
      },
      scheme: {
        value: schemeTypesOptions.find(el => el.label === fields.scheme).value,
        label: fields.scheme,
      },
      currencyCode: {
        value: (currencyCodes
          && currencyCodes.find(el => el.label === fields.currencyCode)
          && currencyCodes.find(el => el.label === fields.currencyCode).value) || '',
        label: fields.currencyCode,
      },
      lockedFlag: fields.lockedFlag === yesNoTypes.YES ? true : false,
    };
  }
);

export const selectSchedulerJobId = (state: StoreState) => state.modals.fieldsEditSchedulerModal.id;
