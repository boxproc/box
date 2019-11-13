import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ReactTable, { ComponentDecoratorProps, ReactTableDefaults } from 'react-table';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { NumberFormatInput, TableNoData, TextInput } from 'components';

import { schedulerStatusTypesOptions, statusTypesCodes } from 'consts';

import { TableStyled } from './TableStyled';

interface TableItemWrapperProps {
  color?: string;
  textRight?: boolean;
  isDate?: boolean;
  isAccentColor?: boolean;
  textCenter?: boolean;
  isSmaller?: boolean;
}

export const TableItemWrapper = styled.div<TableItemWrapperProps>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  font-size: 13px;
  line-height: 1.5;
  white-space: normal;
  border: 1px solid transparent;
  color: inherit;

  ${({ isSmaller }) => isSmaller && `
    font-size: 12px;
  `};

  ${({ textRight }) => textRight && `
    justify-content: flex-end;
  `}

  ${({ textCenter }) => textCenter && `
    justify-content: center;
  `}

  ${({ isDate, theme, isSmaller }) => isDate && `
    color: ${theme.colors.gray};
    font-size: ${isSmaller ? '10px' : '12px'}
  `}

  ${({ isAccentColor, theme }) => isAccentColor && `
    color: ${theme.colors.normalAccent};
  `}

  .title {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
    font-size: 11px;
    line-height: 1.6;
    text-align: center;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.normalAccent};
  }
`;

interface TableHeaderProps {
  title: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ title }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <TableItemWrapper>
        <Box className="title">{title}</Box>
      </TableItemWrapper>
    </Flex>
  );
};

interface TableCellProps {
  value: string | number;
  style?: object;
  onBlur?: any;
  onKeyUp?: (e: React.KeyboardEvent) => void;
  isDate?: boolean;
  isNumber?: boolean;
  isDecimalNumber?: boolean;
  onCenter?: boolean;
  isSmaller?: boolean;
  isEditable?: boolean;
}

export const TableCell: React.FC<TableCellProps> = ({
  value,
  style,
  onBlur,
  onKeyUp,
  isDate = false,
  isNumber = false,
  isDecimalNumber = false,
  onCenter = false,
  isSmaller = false,
  isEditable = false,
}) => {
  const isPendingStatus = value === schedulerStatusTypesOptions
    .find(status => status.value === statusTypesCodes.EXECUTION_PENDING).label;

  return (
    <TableItemWrapper
      style={style}
      textRight={isNumber || isDecimalNumber}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      isDate={isDate}
      textCenter={onCenter}
      isAccentColor={isPendingStatus}
      isSmaller={isSmaller}
    >
      {isEditable
        ? isDecimalNumber
          ? (
            <NumberFormatInput
              value={value}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              isEditableCellStyle={true}
            />
          )
          : (
            <TextInput
              value={value}
              isNumber={isNumber}
              isEditableCellStyle={true}
            />
          )
        : value
      }
    </TableItemWrapper>
  );
};

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
}

export const Table: React.FC<TableProps> = props => {
  const {
    sortable = false,
    filterable = false,
    isHeader = true,
    data,
    pageSize = 10,
    activeRowIndex,
    isSmaller,
  } = props;
  const [height, setHeight] = React.useState(null);
  const tableRef = React.useRef(null);

  React.useEffect(
    () => {
      if (data && data.length) {
        setHeight(tableRef.current.clientHeight);
      }
    },
    [tableRef, data]
  );

  return (
    <TableWrapper>
      <PerfectScrollbar className="visible">
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
      </PerfectScrollbar>
    </TableWrapper>
  );
};
