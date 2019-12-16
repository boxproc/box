import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ReactTable, { ComponentDecoratorProps, ReactTableDefaults } from 'react-table';

import styled from 'theme';

import { TableNoData } from 'components';

import { TableStyled } from './TableStyled';

const TableWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.normalBox};

  .ps--active-x > .ps__rail-x,
  .ps--active-y > .ps__rail-y {
    z-index: 9;
  }
`;

export interface TableProps extends Partial<ComponentDecoratorProps> {
  data: Array<object>;
  columns: Array<object>;
  pageSize?: number;
  style?: object;
  sortable?: boolean;
  filterable?: boolean;
  className?: string;
  title?: string;
  isHeader?: boolean;
  activeRowIndex?: number;
  isSmaller?: boolean;
  isScrollbar?: boolean;
}

export const Table: React.FC<TableProps> = props => {
  const {
    sortable = false,
    filterable = false,
    isHeader = true,
    isScrollbar = true,
    data,
    pageSize = 10,
    activeRowIndex,
    isSmaller,
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

  const renderTable = () => (
    <TableStyled
      activeRowIndex={activeRowIndex}
      isSmaller={isSmaller}
      ref={tableRef}
      minHeight={height}
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
        resizable={true}
        NoDataComponent={TableNoData}
        TheadComponent={
          isHeader && data && data.length > 0
            ? ReactTableDefaults.TheadComponent
            : () => null
        }
      />
    </TableStyled>
  );

  return (
    <TableWrapper>
      {isScrollbar
        ? (
          <PerfectScrollbar>{renderTable()}</PerfectScrollbar>
        )
        : renderTable()
      }
    </TableWrapper>
  );
};
