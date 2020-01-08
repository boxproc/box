import { yesNoTypesCodes } from 'consts';
import { ProductAuxCountersItemPrepared } from './types';

export const prepareAuxCountersToSend = (data: Partial<ProductAuxCountersItemPrepared>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    auxCounter1Description,
    auxCounter2Description,
    auxCounter3Description,
    auxCounter1Enabled,
    auxCounter2Enabled,
    auxCounter3Enabled,
  } = data;

  return {
    product_id: id,
    aux_counter_1_description: auxCounter1Description,
    aux_counter_2_description: auxCounter2Description,
    aux_counter_3_description: auxCounter3Description,
    aux_counter_1_enabled: auxCounter1Enabled ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
    aux_counter_2_enabled: auxCounter2Enabled ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
    aux_counter_3_enabled: auxCounter3Enabled ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
  };
};
