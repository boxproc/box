const toValidDate = (value: string, result: string) =>
  result === 'Invalid Date' ? value : result;

const dateTimeOptions = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric',
};

export const toFormattedDateTime = (value: string) =>
  value && value.length > 0
  && toValidDate(
    value,
    new Date(value).toLocaleString('en-US', dateTimeOptions).replace(',', ' at')
  );
