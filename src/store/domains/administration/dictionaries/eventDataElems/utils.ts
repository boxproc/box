import {
  AdminEventDataElemsFilterParams,
  AdminEventDataElemsFilterParamsPrepared,
} from './types';

export const prepareAdminEventDataElemsParams =
  (params: AdminEventDataElemsFilterParams): AdminEventDataElemsFilterParamsPrepared => {
    if (!params) {
      return null;
    }

    const { eventId } = params;

    return {
      event_id: eventId ? eventId.value : null,
    };
  };
