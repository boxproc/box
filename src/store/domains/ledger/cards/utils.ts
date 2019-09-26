import { statusTypesOptions } from 'consts';
import { LedgerCardItem, LedgerCardItemPrepared, LedgerCardsFilterPrepared } from './types';

export const prepareValuesToRender = (values: Partial<LedgerCardItem>):
  LedgerCardItemPrepared => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    accountId: values.account_id,
    panAlias: values.pan_alias,
    panMasked: values.pan_masked,
    expiryDate: values.expiry_date,
    status : values.status && statusTypesOptions.find(el => el.value === values.status).label,
  };
};

export const preparedFilterToSend = (params: Partial<LedgerCardsFilterPrepared>) => {
    if (!params) {
      return null;
    }

    const {
      id,
      accountId,
      panAlias,
      customerId,
    } = params;

    return {
      id: id ? id : null,
      account_id: accountId ? accountId : null,
      customer_id: customerId ? customerId : null,
      pan_alias: panAlias ? panAlias : null,
    };
  };
