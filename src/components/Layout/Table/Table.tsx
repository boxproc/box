import React from 'react';
import ReactTable, { ComponentDecoratorProps, ReactTableDefaults } from 'react-table';

import { TableNoData } from './../../Layout';

import { TableStyled } from './TableStyled';

interface ITable extends Partial<ComponentDecoratorProps> {
  activeRowIndex?: number;
  className?: string;
  columns: Array<object>;
  data: any; // ImmutableArray<object>
  filterable?: boolean;
  isHeader?: boolean;
  isScrollbar?: boolean;
  isSmaller?: boolean;
  pageSize?: number;
  sortable?: boolean;
  style?: object;
  title?: string;
}

export const Table: React.FC<ITable> = props => {
  const {
    activeRowIndex,
    data = [],
    filterable = false,
    isHeader = true,
    isScrollbar = true,
    isSmaller,
    pageSize = 10,
    sortable = false,
  } = props;

  return (
    <TableStyled
      activeRowIndex={activeRowIndex}
      isSmaller={isSmaller}
      isScrollbar={isScrollbar}
    >
      <ReactTable
        {...props as ITable}
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
