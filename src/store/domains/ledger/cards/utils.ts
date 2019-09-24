import { statusTypesOptions } from 'consts';
import { LedgerCardItem, LedgerCardItemPrepared, LedgerCardsFilterParamsPrepared } from './types';

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

export const preparedFilterParamsToSend = (params: Partial<LedgerCardsFilterParamsPrepared>) => {
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
      account_id: accountId ? Number(accountId) : null,
      customer_id: customerId ? Number(customerId) : null,
      pan_alias: panAlias ? panAlias : null,
    };
  };
