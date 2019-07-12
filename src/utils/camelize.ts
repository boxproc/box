import camelcase from 'camelcase';
import decamelize from 'decamelize';

export const camelizeFields = (fields: object, action: 'camelcase' | 'decamelize') => {
  const prepared = {};

  for (const field in fields) {
    if (field) {
      action === 'camelcase'
        ? prepared[camelcase(field)] = fields[field]
        : prepared[decamelize(field, '_')] = fields[field];
    }
  }

  return prepared;
};
