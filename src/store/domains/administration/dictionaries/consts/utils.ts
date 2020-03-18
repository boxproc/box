import { ImmutableArray } from 'seamless-immutable';
import { IdNamePair, SelectValue } from 'types';

export const valueLabelParse = (data: ImmutableArray<IdNamePair>): Array<SelectValue> => {
  if (!data) {
    return null;
  }

  return data.asMutable().map(item => {
    const { id, name } = item;

    return {
      value: id,
      label: name,
    };
  });
};
