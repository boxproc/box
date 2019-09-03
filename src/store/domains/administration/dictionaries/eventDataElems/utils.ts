import {
  AdminEventDataElemsFilterParams,
  AdminEventDataElemsFilterParamsPrepared,
} from './types';

export const prepareAdminEventDataElemsParams =
  (params: AdminEventDataElemsFilterParams):
    AdminEventDataElemsFilterParamsPrepared => {
    if (!params) {
      return null;
    }
    return {
      event_id: params.eventId && params.eventId.value,
    };
  };
