import { IdNamePair, SelectValues } from 'types';

export const valueLabelParse = (data: Array<IdNamePair>): Array<SelectValues> => {
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
