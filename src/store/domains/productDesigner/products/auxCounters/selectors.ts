import { createSelector } from 'reselect';

import { actionTypesCodeKeys, actionTypesOptions, yesNoTypesCodes } from 'consts';

import { selectActiveItemId } from 'store/domains/utils';
import { selectDefaultProductItems } from '../products';

export const selectProductAuxCounters = createSelector(
  selectDefaultProductItems,
  selectActiveItemId,
  (products, activeId) => {
    const current = products.find(product => product.id === activeId);

    if (!current) {
      return null;
    }

    const {
      aux_counter_1_description,
      aux_counter_2_description,
      aux_counter_3_description,
      aux_counter_1_enabled,
      aux_counter_2_enabled,
      aux_counter_3_enabled,
    } = current;

    return {
      auxCounter1Description: aux_counter_1_description,
      auxCounter2Description: aux_counter_2_description,
      auxCounter3Description: aux_counter_3_description,
      auxCounter1Enabled: aux_counter_1_enabled === yesNoTypesCodes.YES,
      auxCounter2Enabled: aux_counter_2_enabled === yesNoTypesCodes.YES,
      auxCounter3Enabled: aux_counter_3_enabled === yesNoTypesCodes.YES,
    };
  }
);

export const selectActionTypesOptions = createSelector(
  selectProductAuxCounters,
  auxCounters => {
    const set = new Set() as any;

    const isAuxCounter1Enabled = auxCounters && auxCounters.auxCounter1Enabled;
    const isAuxCounter2Enabled = auxCounters && auxCounters.auxCounter2Enabled;
    const isAuxCounter3Enabled = auxCounters && auxCounters.auxCounter3Enabled;

    const auxCounter1Option = actionTypesOptions
      .find(el => el.value === actionTypesCodeKeys.UPDATE_AUX_COUNTER_1);
    const auxCounter2Option = actionTypesOptions
      .find(el => el.value === actionTypesCodeKeys.UPDATE_AUX_COUNTER_2);
    const auxCounter3Option = actionTypesOptions
      .find(el => el.value === actionTypesCodeKeys.UPDATE_AUX_COUNTER_3);

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
