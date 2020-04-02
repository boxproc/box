import { createSelector } from 'reselect';

import { actionTypesConst, actionTypesOptions, yesNoConst } from 'consts';
import { createLoadingSelector } from 'store/domains/loader';
import { defaultCurrentProductSelector } from './../products';
import { ActionTypeKeys } from './actionTypes';

export const productAuxCountersSelector = createSelector(
  defaultCurrentProductSelector,
  data => {

    if (!data) {
      return null;
    }

    const {
      aux_counter_1_description,
      aux_counter_2_description,
      aux_counter_3_description,
      aux_counter_1_enabled,
      aux_counter_2_enabled,
      aux_counter_3_enabled,
    } = data;

    return {
      auxCounter1Description: aux_counter_1_description,
      auxCounter2Description: aux_counter_2_description,
      auxCounter3Description: aux_counter_3_description,
      auxCounter1Enabled: aux_counter_1_enabled === yesNoConst.YES,
      auxCounter2Enabled: aux_counter_2_enabled === yesNoConst.YES,
      auxCounter3Enabled: aux_counter_3_enabled === yesNoConst.YES,
    };
  }
);

export const actionTypesOptionsSelector = createSelector(
  productAuxCountersSelector,
  data => {
    const set = new Set() as any;

    const isAuxCounter1Enabled = data && data.auxCounter1Enabled;
    const isAuxCounter2Enabled = data && data.auxCounter2Enabled;
    const isAuxCounter3Enabled = data && data.auxCounter3Enabled;

    const auxCounter1Option = actionTypesOptions
      .find(el => el.value === actionTypesConst.UPDATE_AUX_COUNTER_1);
    const auxCounter2Option = actionTypesOptions
      .find(el => el.value === actionTypesConst.UPDATE_AUX_COUNTER_2);
    const auxCounter3Option = actionTypesOptions
      .find(el => el.value === actionTypesConst.UPDATE_AUX_COUNTER_3);

    actionTypesOptions.forEach(type => set.add(type));

    if (!isAuxCounter1Enabled) {
      set.delete(auxCounter1Option);
    }

    if (!isAuxCounter2Enabled) {
      set.delete(auxCounter2Option);
    }

    if (!isAuxCounter3Enabled) {
      set.delete(auxCounter3Option);
    }

    return [...set];
  }
);

export const isProductAuxCountersUpdatingSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS,
]);
