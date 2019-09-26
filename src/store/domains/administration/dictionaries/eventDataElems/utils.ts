import {
  DictionaryEventDataElemsFilter,
  DictionaryEventDataElemsFilterPrepared,
} from './types';

export const prepareDictionaryEventDataElemsParams =
  (params: DictionaryEventDataElemsFilter): DictionaryEventDataElemsFilterPrepared => {
    if (!params) {
      return null;
    }

    const { eventId } = params;

    return {
      event_id: eventId ? eventId.value : null,
    };
  };
