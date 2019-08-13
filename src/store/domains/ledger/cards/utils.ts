import { statusTypesOptions } from 'consts';
import { LedgerCardItem, LedgerCardItemPrepared, LedgerCardsFilterParamsPrepared } from './types';

export const prepareValuesToRender = (values: LedgerCardItem):
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
    status: statusTypesOptions.find(el => el.value === values.status).label,
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
      id: id && Number(id),
      account_id: accountId && Number(accountId),
      customer_id: customerId && Number(customerId),
      pan_alias: panAlias,
    };
  };
