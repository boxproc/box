import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { theme } from 'theme';

import { logo } from 'resources/images/logo';

import { dateUtil, storageUtil } from 'utils';

const tableStyles = {
  margin: { right: 10, left: 10 },
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

const formatKey = (key: string) =>
  key.replace(/([A-Z])/g, ' $1')
    .toLocaleLowerCase()
    .replace(/^./, str => str.toUpperCase())
    .replace(/id|Id/g, 'ID');

const formatValue = (value: string) =>
  (value === null || value === undefined)
    ? '-'
    : value;

export const downloadPDF = (data: {
  fileName: string,
  statement: object,
  tables: Array<{
    title: string;
    items: Array<object>;
  }>,
}) => {
  const { statement, tables, fileName } = data;

  const unit = 'pt';
  const size = 'a4';
  const orientation = 'portrait';
  const docTitle = 'Statement';
  const location = window.location.href;

  const dateTime = dateUtil.todayDateTime();
  const userData = storageUtil.getUserData();
  const username = userData && `${userData.firstName} ${userData.lastName}`;

  const doc = new jsPDF(orientation, unit, size) as any;

  doc.setProperties({
    title: fileName,
  });

  // Title of document
  doc.setFontSize(15);
  doc.setFontStyle('bold');
  doc.setTextColor(theme.colors.darkGray);
  doc.text(30, 35, docTitle);

  // Username, time, page location
  doc.setFontSize(8);
  doc.setFontStyle('normal');
  doc.setTextColor(theme.colors.gray);
  doc.text(30, 51, `Created by ${username} at ${dateTime}`);
  doc.text(30, 63, location);

  // Image
  doc.addImage(logo, 'JPEG', 517, 15, 62, 46);

  // line
  doc.setLineWidth(0.3);
  doc.setDrawColor(153, 153, 153);
  doc.line(30, 71, 580, 71);

  if (statement) {
    // Statement totals title
    doc.setFontSize(12);
    doc.setFontStyle('bold');
    doc.setTextColor(theme.colors.darkGray);
    doc.text(30, 97, 'Totals');

    // Statement totals content
    doc.setFontSize(9);
    doc.setFontStyle('normal');
    doc.setTextColor(theme.colors.black);

    Object.entries(statement).forEach((el, i) => {
      doc.setTextColor(theme.colors.black);
      doc.text(30, 115 + 15 * i, `${formatKey(el[0])}: `);
      doc.setTextColor(theme.colors.darkGray);
      doc.text(190, 115 + 15 * i, `${formatValue(el[1])}`);
    });
  }

  tables.forEach((table, index) => {
    const isFirstTable = index === 0;

    const { title, items } = table;

    if (items.length) {
      // Statement table title
      doc.setFontSize(13);
      doc.setFontStyle('bold');
      doc.setTextColor(theme.colors.darkGray);
      doc.text(30, isFirstTable ? 375 : doc.previousAutoTable.finalY + 25, title);

      // Table
      const tableHead = items.length
        && Object.keys(items[0]).map(key => formatKey(formatValue(key)));

      const tableBody = items.length && items.map(item => Object.values(item));

      const tableContent = {
        head: [tableHead],
        body: tableBody,
        startY: isFirstTable ? 386 : doc.previousAutoTable.finalY + 35,
        ...tableStyles,
      };

      doc.autoTable(tableContent);
    }
  });

  // Page number
  doc.setTextColor(theme.colors.gray);
  doc.setFontStyle('normal');
  doc.setFontSize(7);

  const pageCount = doc.internal.getNumberOfPages();

  for (let i = 0; i < pageCount; i++) {

    doc.setPage(i);
    doc.text(
      580,
      825,
      `${doc.internal.getCurrentPageInfo().pageNumber}/${pageCount}`,
      null,
      null,
      'right'
    );
  }

  doc.output('save', `${fileName}.pdf`);
  // doc.output('dataurlnewwindow');
};
