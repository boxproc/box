import { IdNamePair, SelectValue } from 'types';

export const valueLabelParse = (data: Array<IdNamePair>): Array<SelectValue> => {
  if (!data) {
    return null;
  }

  return data.map(item => {
    const { id, name } = item;

    return {
      value: id,
      label: name,
    };
  });
};
