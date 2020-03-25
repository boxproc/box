import { ImmutableArray } from 'seamless-immutable';

import { IDictionaryEventDataElemsFilter, IDictionaryEventDataElemsFilterPrepared } from './types';

import { IIdNamePair, ISelectValue } from 'types';

export const valueLabelParse = (data: ImmutableArray<IIdNamePair>): Array<ISelectValue> => {
  if (!data) {
    return null;
  }

  return data.asMutable().map(el => {
    const { id, name } = el;

    return {
      value: id,
      label: name,
    };
  });
};

export const prepareDictionaryEventIdToSend =
  (params: IDictionaryEventDataElemsFilter): IDictionaryEventDataElemsFilterPrepared => {
    if (!params || !params.eventId) {
      return null;
    }

    const { eventId } = params;

    return { event_id: eventId.value ? eventId.value : null };
  };
