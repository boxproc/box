import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { theme } from 'theme';

import { dateUtil, storageUtil } from 'utils';

export const downloadPDF = (
  fileName: string,
  title: string,
  data: Array<object>,
  location?: string
) => {
  const unit = 'pt';
  const size = 'A4';
  const orientation = 'landscape'; // portrait or landscape

  const dateTime = dateUtil.todayDateTime();
  const userData = storageUtil.getUserData();
  const username = userData && `${userData.firstName} ${userData.lastName}`;

  const doc = new jsPDF(orientation, unit, size) as any;

  const headers = Object.keys(data[0])
    .map(key => key
      // convert 'camelCase' to 'Camel Case'
      // insert a space before all caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .toLocaleLowerCase()
      .replace(/^./, str => str.toUpperCase())
    );

  const preparedData = data.map(item => Object.values(item));

  const content = {
    head: [headers],
    body: preparedData,
    startY: 73,
    margin: { horizontal: 10 },
    styles: {
      minCellWidth: 30,
      fontSize: 7,
      textColor: theme.colors.black,
      fillColor: '#fafafa',
    },
    headStyles: {
      fontStyle: 'normal',
      fillColor: theme.colors.lightGray,
    },
    alternateRowStyles: {
      fillColor: theme.colors.white,
    },
    columnStyles: {
      text: {
        cellWidth: 'wrap',
      },
    },
  };

  doc.setFontSize(14);
  doc.setFontStyle('bold');
  doc.setTextColor(theme.colors.darkGray);
  doc.text(10, 35, title);

  doc.setFontSize(8);
  doc.setFontStyle('normal');
  doc.setTextColor(theme.colors.gray);
  doc.text(11, 50, `Created by ${username} at ${dateTime}`);
  doc.text(11, 62, location);

  doc.autoTable(content);

  doc.setFontSize(7);

  const pageCount = doc.internal.getNumberOfPages();

  for (let i = 0; i < pageCount; i++) {
    doc.setPage(i);
    doc.text(11, 15, doc.internal.getCurrentPageInfo().pageNumber + '/' + pageCount);
  }

  doc.save(`${fileName}.pdf`);
};
