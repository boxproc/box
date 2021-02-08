import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { theme } from 'theme';

import { logoData } from 'resources/images';
import { dateUtil, storageUtil } from 'utils';

const formatKey = (key: string) =>
  key.replace(/([A-Z])/g, ' $1')
    .toLocaleLowerCase()
    .replace(/^./, str => str.toUpperCase())
    .replace(/Institution id/, 'Institution');

const formatValue = (value: string) => (value === null || value === undefined) ? '-' : value;

export const downloadStatementPDF = (data: {
  fileName: string,
  statement: Array<object>;
  tables: Array<{
    title: string;
    items: Array<object>;
  }>,
}) => {
  const { statement, tables, fileName } = data;

  const dateTime = dateUtil.todayDateTime();
  const userData = storageUtil.getUserData();
  const username = userData && `${userData.firstName} ${userData.lastName}`;

  /**
   * Orientation: landscape or portrait
   */
  const doc = new jsPDF('landscape', 'pt', 'a4') as any;

  /**
   * Name of .pdf file.
   * For example, the result name will be statement_1_25042020.pdf
   */
  doc.setProperties({ title: fileName });

  /**
   * Title of document
   */
  doc.setFontSize(15);
  doc.setTextColor(theme.colors.darkGray);
  doc.text(30, 35, 'Statement');

  /**
   * Datetime of generated file and username
   * e.g. Created by Admin Lastname at 26/03/2020 13:06:24
   */
  doc.setFontSize(8);
  doc.setTextColor(theme.colors.gray);
  doc.text(30, 51, `Created by ${username} at ${dateTime}`);

  /**
   * BOX logo at the top right corner
   * (data img, 'JPEG', left, top, width, height)
   */
  doc.addImage(logoData, 'JPEG', 760, 15, 50, 37);

  /**
   * Horizontal line
   */
  doc.setLineWidth(0.3);
  doc.setDrawColor(153, 153, 153);
  doc.line(30, 60, 810, 60);

  /** Two columns:
   * 1st: statement info
   * e.g.
   * Statement ID: 1
   * Statement date: 25/04/2020
   * key: value
   * 
   * 2nd: account and customer info
   * e.g.
   * Account ID: 1
   * First name: John
   * Last name: Doe
   * key: value
   */
  if (statement) {
    statement.forEach((item, i) => {
      const isSecondColumn = i === 1;
      const leftSpaceKey = isSecondColumn ? 270 : 30;
      const leftSpaceValue = isSecondColumn ? 373 : 175;
      const topSpace = 97;

      doc.setFontSize(9);
      doc.setTextColor(theme.colors.black);

      Object.entries(item).forEach((el, j) => {
        doc.setTextColor(theme.colors.black);
        doc.text(leftSpaceKey, topSpace + 15 * j, `${formatKey(el[0])}: `);
        doc.setTextColor(theme.colors.darkGray);
        doc.text(leftSpaceValue, topSpace + 15 * j, `${formatValue(el[1])}`);
      });
    });
  }

  doc.addPage();

  /**
   * Tables
   */
  tables.forEach((table, i) => {
    const { title, items } = table;

    const isFirstTable = i === 0;

    if (items && items.length) {
      const tableHead = Object.keys(items[0]).map(key => formatKey(formatValue(key)));

      const tableBody = items.map(item => Object.values(item));

      const startY = () => isFirstTable ? 45 : doc.previousAutoTable.finalY + 35;

      const tableContent = {
        head: [tableHead],
        body: tableBody,
        startY: startY(),
        margin: { right: 10, left: 20 },
        styles: {
          minCellWidth: 45,
          fontSize: 7,
          textColor: theme.colors.black,
          fillColor: theme.colors.lighterGrayCell,
        },
        headStyles: {
          fontStyle: 'normal',
          fillColor: theme.colors.lightGray,
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
          const styles = tableData.cell.styles;

          if (isBody && isNumber) {
            styles.halign = 'right';
          } else if (isHead) {
            styles.halign = 'center';
          } else {
            styles.halign = 'left';
          }
        },
      };

      // set title for first table
      if (isFirstTable) {
        doc.setFontSize(13);
        doc.setTextColor(theme.colors.darkGray);
        doc.text(
          30,
          35,
          title
        );
      }

      // set titles for next tables
      if (!isFirstTable) {
        doc.setFontSize(13);
        doc.setTextColor(theme.colors.darkGray);
        doc.text(
          30,
          doc.previousAutoTable.finalY + 26,
          title
        );
      }

      doc.autoTable(tableContent);
    }
  });

  /**
   * Page number at the bottom right corner
   */
  doc.setTextColor(theme.colors.gray);
  doc.setFontSize(7);

  const pageCount = doc.internal.getNumberOfPages();

  for (let i = 0; i < pageCount; i++) {
    doc.setPage(i);
    doc.text(
      820,
      570,
      `${doc.internal.getCurrentPageInfo().pageNumber}/${pageCount}`,
      null,
      null,
      'right'
    );
  }

  doc.save(`${fileName}.pdf`);
  // doc.output('dataurlnewwindow');
};
