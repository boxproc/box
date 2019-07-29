import { SelectValues } from 'types';

export const getDetailsTitle = (productTypeValue: SelectValues) => {
  const name = productTypeValue && productTypeValue.label;
  return (name ? name : '') + ' Details';
};
