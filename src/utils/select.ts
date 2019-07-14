import { KeyValuePair } from '../types/common';
import { parseNumber } from './strings';

export const toParsedSelectValues = (data: object) =>
  data ? Object.entries(data).map(el => ({ value: parseNumber(el[0]), label: el[1] })) : [];

export const parseListValues = <T extends number>(data: Array<KeyValuePair<T>>) =>
  data ? data.map(({ key, value }) => ({ value: parseNumber(key) as T, label: value })) : [];
