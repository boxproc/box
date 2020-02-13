import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { theme } from 'theme';

import { logo } from 'resources/images/logo';

import { dateUtil, formErrorUtil, storageUtil } from 'utils';

const formatKey = (key: string) =>
  key.replace(/([A-Z])/g, ' $1')
    .toLocaleLowerCase()
    .replace(/^./, str => str.toUpperCase())
    .replace(/id|Id/g, 'ID')
    .replace(/Institution ID/, 'Institution');

const formatValue = (value: string) =>
  (value === null || value === undefined)
    ? '-'
    : value;

export const downloadStatementPDF = (data: {
  fileName: string,
  statement?: Array<object>;
  tables: Array<{
    id: string;
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
    statement.forEach((item, index) => {
      const isSecondColumn = index === 1;
      const leftSpaceKey = isSecondColumn ? 290 : 30;
      const leftSpaceValue = isSecondColumn ? 433 : 132;
      const topSpace = 97;

      doc.setFontSize(9);
      doc.setFontStyle('normal');
      doc.setTextColor(theme.colors.black);

      Object.entries(item).forEach((el, i) => {
        doc.setTextColor(theme.colors.black);
        doc.text(leftSpaceKey, topSpace + 15 * i, `${formatKey(el[0])}: `);
        doc.setTextColor(theme.colors.darkGray);
        doc.text(leftSpaceValue, topSpace + 15 * i, `${formatValue(el[1])}`);
      });
    });
  }

  tables.forEach((table, index) => {

    const isFirstTable = index === 0;

    const { id, title, items } = table;
    const isTransactions = id === 'transactions';

    if (items && items.length) {
      const tableHead = items.length
        && Object.keys(items[0]).map(key => formatKey(formatValue(key)));

      const tableBody = items.length && items.map(item => Object.values(item));

      const startY = () => {
        if (isFirstTable) {
          return 320;
        } else {
          return doc.previousAutoTable.finalY + 35;
        }
      };

      const tableContent = {
        head: [tableHead],
        body: tableBody,
        startY: startY(),
        margin: { right: 10, left: 20 },
        styles: {
          minCellWidth: 45,
          fontSize: 7,
          textColor: theme.colors.black,
          fillColor: '#fafafa',
        },
        headStyles: {
          fontStyle: 'normal',
          fillColor: theme.colors.lightGray,
          cellWidth: !isTransactions && 100,
          textColor: theme.colors.black,
        },
        alternateRowStyles: {
          fillColor: theme.colors.white,
        },
        didParseCell: (tableData: any) => {
          const isHead = tableData.section === 'head';
          const isBody = tableData.section === 'body';
          const value = isBody && tableData.cell.raw;
          const isNumber = !isNaN(value);
          const isNotDate = formErrorUtil.isDateTime(value);
          const styles = tableData.cell.styles;

          if (isBody && isNumber) {
            styles.halign = 'right';
          } else if (isHead) {
            styles.halign = 'center';
          } else {
            styles.halign = 'left';
          }

          if (!isNotDate) {
            styles.textColor = theme.colors.darkGray;
          }
        },
      };

      if (isTransactions) {
        doc.setFontSize(13);
        doc.setFontStyle('bold');
        doc.setTextColor(theme.colors.darkGray);
        doc.text(
          30,
          310,
          title
        );
      }

      doc.autoTable(tableContent);

      if (!isTransactions) {
        doc.setFontSize(13);
        doc.setFontStyle('bold');
        doc.setTextColor(theme.colors.darkGray);
        doc.text(
          30,
          doc.previousAutoTable.pageStartY - 10,
          title
        );
      }
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
