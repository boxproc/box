import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { theme } from 'theme';

import { dateUtil, storageUtil } from 'utils';

const tableStyles = {
  margin: { right: 10, left: 35 },
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

export const downloadPDF = (data: { statement: object, transactions: Array<object> }) => {
  const { statement, transactions } = data;

  const unit = 'pt';
  const size = 'a4';
  const orientation = 'landscape';
  const title = 'Statement';
  // const fileName = 'statement';
  const location = window.location.href;

  const dateTime = dateUtil.todayDateTime();
  const userData = storageUtil.getUserData();
  const username = userData && `${userData.firstName} ${userData.lastName}`;

  const doc = new jsPDF(orientation, unit, size) as any;

  // Title of document
  doc.setFontSize(15);
  doc.setFontStyle('bold');
  doc.setTextColor(theme.colors.darkGray);
  doc.text(40, 35, title);

  // Username, time, page location
  doc.setFontSize(8);
  doc.setFontStyle('normal');
  doc.setTextColor(theme.colors.gray);
  doc.text(40, 51, `Created by ${username} at ${dateTime}`);
  doc.text(40, 63, location);

  // line
  doc.setLineWidth(0.3);
  doc.setDrawColor(153, 153, 153);
  doc.line(40, 71, 830, 71);

  if (statement) {
    // Statement totals title
    doc.setFontSize(13);
    doc.setFontStyle('bold');
    doc.setTextColor(theme.colors.darkGray);
    doc.text(40, 100, 'Totals');

    // Statement totals content
    doc.setFontSize(10);
    doc.setFontStyle('normal');
    doc.setTextColor(theme.colors.black);

    Object.entries(statement).forEach((el, i) => {
      doc.setTextColor(theme.colors.black);
      doc.text(40, 125 + 17 * i, `${formatKey(el[0])}: `);
      doc.setTextColor(theme.colors.darkGray);
      doc.text(205, 125 + 17 * i, `${formatValue(el[1])}`);
    });
  }

  if (transactions.length) {
    // Statement transaction title
    doc.setFontSize(13);
    doc.setFontStyle('bold');
    doc.setTextColor(theme.colors.darkGray);
    doc.text(40, 420, 'Transactions');
  }

  // Statement transaction table
  const transactionsHeaders = transactions.length
    && Object.keys(transactions[0]).map(key => formatKey(formatValue(key)));

  const preparedTransactions = transactions.length
    && transactions.map(item => Object.values(item));

  const content = {
    head: [transactionsHeaders],
    body: preparedTransactions,
    startY: 435,
    ...tableStyles,
  };

  doc.autoTable(content);

  // Page number
  doc.setTextColor(theme.colors.gray);
  doc.setFontStyle('normal');
  doc.setFontSize(7);

  const pageCount = doc.internal.getNumberOfPages();

  for (let i = 0; i < pageCount; i++) {

    doc.setPage(i);
    doc.text(
      830,
      20,
      `${doc.internal.getCurrentPageInfo().pageNumber}/${pageCount}`,
      null,
      null,
      'right'
    );
  }

  // doc.output('save', `${fileName}.pdf`);
  doc.output('dataurlnewwindow');
};
