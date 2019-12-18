import jsPDF from 'jspdf';
// import 'jspdf-autotable';

import { theme } from 'theme';

import { dateUtil, storageUtil } from 'utils';

// const styles = {
//   margin: { horizontal: 10 },
//   styles: {
//     minCellWidth: 30,
//     fontSize: 7,
//     textColor: theme.colors.black,
//     fillColor: '#fafafa',
//   },
//   headStyles: {
//     fontStyle: 'normal',
//     fillColor: theme.colors.lightGray,
//   },
//   alternateRowStyles: {
//     fillColor: theme.colors.white,
//   },
//   columnStyles: {
//     text: {
//       cellWidth: 'wrap',
//     },
//   },
// };

const formatKey = (key: string) =>
  key.replace(/([A-Z])/g, ' $1')
    .toLocaleLowerCase()
    .replace(/^./, str => str.toUpperCase())
    .replace(/id/g, 'ID');

const formatValue = (value: object) =>
  (value === null || value === undefined)
    ? ''
    : value;

export const downloadPDF = (data: {
  fileName: string,
  title: string,
  downloadData: Array<object>,
  location?: string,
  orientation?: 'portrait' | 'landscape'
}) => {
  const {
    fileName,
    title,
    downloadData,
    location,
    orientation,
  } = data;

  const unit = 'pt';
  const size = 'a4';

  const dateTime = dateUtil.todayDateTime();
  const userData = storageUtil.getUserData();
  const username = userData && `${userData.firstName} ${userData.lastName}`;

  const doc = new jsPDF(orientation, unit, size) as any;

  doc.setFontSize(15);
  doc.setFontStyle('bold');
  doc.setTextColor(theme.colors.darkGray);
  doc.text(40, 35, title);

  doc.setFontSize(8);
  doc.setFontStyle('normal');
  doc.setTextColor(theme.colors.gray);
  doc.text(40, 50, `Created by ${username} at ${dateTime}`);
  doc.text(40, 62, location);

  doc.setLineWidth(0.3);
  doc.setDrawColor(153, 153, 153);
  doc.line(40, 73, 575, 73);

  doc.setFontSize(10);
  doc.setTextColor(theme.colors.black);

  const entries = Object.entries(downloadData);

  console.log('---entries', entries);

  entries.forEach((el, i) => {
    doc.setTextColor(theme.colors.black);
    doc.text(40, 95 + 15 * i, `${formatKey(el[0])}: `);
    doc.setTextColor(theme.colors.darkGray);
    doc.text(205, 95 + 15 * i, `${formatValue(el[1])}`);
  });

  // doc.table(1, 1, downloadData, headers, { autoSize: true });

  // const headers = downloadData.length
  //   && Object.keys(downloadData[0])
  //     .map(key => key
  //       // convert 'camelCase' to 'Camel Case'
  //       // insert a space before all caps
  //       .replace(/([A-Z])/g, ' $1')
  //       // uppercase the first character
  //       .toLocaleLowerCase()
  //       .replace(/^./, str => str.toUpperCase())
  //     );

  // const preparedData = downloadData.map(item => Object.values(item));

  // const content = {
  //   head: [headers],
  //   body: preparedData,
  //   startY: 73,
  //   ...styles,
  // };

  // doc.autoTable(content);

  doc.setTextColor(theme.colors.gray);
  doc.setFontSize(7);
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 0; i < pageCount; i++) {
    doc.setPage(i);
    doc.text(575, 17, doc.internal.getCurrentPageInfo().pageNumber + '/' + pageCount);
  }

  doc.save(`${fileName}.pdf`);
};
