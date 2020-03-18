import React from 'react';
import ReactTable, { ComponentDecoratorProps, ReactTableDefaults } from 'react-table';

import { TableNoData } from './../../Layout';

import { TableStyled } from './TableStyled';

export interface TableProps extends Partial<ComponentDecoratorProps> {
  activeRowIndex?: number;
  className?: string;
  columns: Array<object>;
  data: Array<object>;
  filterable?: boolean;
  isHeader?: boolean;
  isScrollbar?: boolean;
  isSmaller?: boolean;
  pageSize?: number;
  sortable?: boolean;
  style?: object;
  title?: string;
}

export const Table: React.FC<TableProps> = props => {
  const {
    activeRowIndex,
    data,
    filterable = false,
    isHeader = true,
    isScrollbar = true,
    isSmaller,
    pageSize = 10,
    sortable = false,
  } = props;

  const [height, setHeight] = React.useState(null);
  const tableRef = React.useRef(null);

  React.useEffect(
    () => {
      if (data && data.length > pageSize) {
        setHeight(tableRef.current.clientHeight);
      } else {
        setHeight(null);
      }
    },
    [tableRef, data, pageSize]
  );

  return (
    <TableStyled
      activeRowIndex={activeRowIndex}
      isSmaller={isSmaller}
      ref={tableRef}
      minHeight={height}
      isScrollbar={isScrollbar}
    >
      <ReactTable
        {...props as TableProps}
        sortable={sortable}
        filterable={filterable}
        minRows={0}
        showPagination={data && data.length > pageSize}
        showPageSizeOptions={false}
        defaultPageSize={pageSize}
        multiSort={false}
        resizable={isScrollbar}
        NoDataComponent={TableNoData}
        TheadComponent={
          isHeader && data && data.length > 0
            ? ReactTableDefaults.TheadComponent
            : () => null
        }
      />
    </TableStyled>
  );
};
