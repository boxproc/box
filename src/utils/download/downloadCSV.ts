export const convertArrayOfObjectsToCSV = (data: Array<object>) => {
  let ctr = 0;
  const columnDelimiter = ',';
  const lineDelimiter = '\n';

  if (!data || !data.length) {
    return null;
  }

  const keys = Object.keys(data[0]);

  let result = keys
    .map(key => key
      // convert 'camelCase' to 'Camel Case'
      // insert a space before all caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .toLocaleLowerCase()
      .replace(/^./, str => str.toUpperCase())
    )
    .join(columnDelimiter)
    + lineDelimiter;

  data.forEach(item => {
    ctr = 0;

    keys.forEach(key => {
      if (ctr > 0) {
        result += columnDelimiter;
      }

      if (item[key] && typeof item[key] === 'string') {
        result += item[key].replace(/,/g, ' ').replace(/\n/g, ' ');
      } else if (item[key] === null || item[key] === undefined) {
        result += '';
      } else if (item[key] === false) {
        result += 'N';
      } else if (item[key] === true) {
        result += 'Y';
      }  else {
        result += item[key];
      }

      ctr++;
    });

    result += lineDelimiter;
  });

  return result;
};

export const downloadCSV = (fileName: string, data: Array<object>) => {
  let csv = convertArrayOfObjectsToCSV(data);

  if (csv && !csv.match(/^data:text\/csv/i)) {
    csv = 'data:text/csv;charset=utf-8,' + csv;
  }

  const encodedData = encodeURI(csv);

  const link = document.createElement('a');
  link.setAttribute('href', encodedData);
  link.setAttribute('download', `${fileName}.csv`);
  link.click();
};
