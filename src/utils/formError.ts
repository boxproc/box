export const required = (value: string) =>
  value || (typeof value === 'number' && value === 0) ? undefined : 'Cannot be empty';
