import { DictionaryEventDataElemsFilter, DictionaryEventDataElemsFilterPrepared } from './types';

export const prepareDictionaryEventDataElemsParams =
  (params: DictionaryEventDataElemsFilter): DictionaryEventDataElemsFilterPrepared => {
    if (!params || !params.eventId) {
      return null;
    }

    const { eventId } = params;

    return {
      event_id: eventId.value ? eventId.value :  null,
    };
  };
