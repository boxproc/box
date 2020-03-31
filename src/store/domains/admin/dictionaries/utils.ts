import { ImmutableArray } from 'seamless-immutable';

import { IDictionaryEventDataElemsFilter, IDictionaryEventDataElemsFilterToSend } from './types';

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
  (data: IDictionaryEventDataElemsFilter): IDictionaryEventDataElemsFilterToSend => {
    if (!data || !data.eventId) {
      return null;
    }

    const { eventId } = data;

    return { event_id: eventId.value ? eventId.value : null };
  };
