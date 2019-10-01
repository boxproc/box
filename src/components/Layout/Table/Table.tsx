import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ReactTable, { ComponentDecoratorProps, ReactTableDefaults } from 'react-table';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { TableNoData } from 'components';

import { schedulerStatusTypesOptions, statusTypesCodes } from 'consts';

import { TableStyled } from './TableStyled';

interface TableItemWrapperProps {
  color?: string;
  textRight?: boolean;
  isDate?: boolean;
  isAccentColor?: boolean;
  textCenter?: boolean;
}

export const TableItemWrapper = styled.div<TableItemWrapperProps>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  font-size: ${({ isDate }) => isDate ? '12px' : '13px'};
  line-height: 1.5;
  white-space: normal;
  border: 1px solid transparent;
  color: inherit;

  ${({ textRight }) => textRight && `
    justify-content: flex-end};
  `}

  ${({ textCenter }) => textCenter && `
    justify-content: center};
  `}

  ${({ isDate, theme }) => isDate && `
    color: ${theme.colors.gray};
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
        <Box className="title">
          {title}
        </Box>
      </TableItemWrapper>
    </Flex>
  );
};

interface TableCellProps {
  value: string | number;
  style?: object;
  contentEditable?: boolean;
  suppressContentEditableWarning?: boolean;
  onBlur?: any;
  onKeyUp?: (e: React.KeyboardEvent) => void;
  isDate?: boolean;
  isNumber?: boolean;
  onCenter?: boolean;
}

export const TableCell: React.FC<TableCellProps> = ({
  value,
  style,
  contentEditable,
  suppressContentEditableWarning,
  onBlur,
  onKeyUp,
  isDate = false,
  isNumber = false,
  onCenter = false,
}) => {
  const isPendingStatus = value === schedulerStatusTypesOptions
    .find(status => status.value === statusTypesCodes.EXECUTION_PENDING).label;

  return (
    <TableItemWrapper
      style={style}
      textRight={isNumber}
      contentEditable={contentEditable}
      suppressContentEditableWarning={suppressContentEditableWarning}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      isDate={isDate}
      textCenter={onCenter}
      isAccentColor={isPendingStatus}
    >
      {value}
    </TableItemWrapper>
  );
};

const TableWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.normalBox};

  .ps__thumb-x,
  .ps__thumb-y {
    background-color: #ffa400;
  }

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
}

export const Table: React.FC<TableProps> = props => {
  const {
    sortable = false,
    filterable = false,
    isHeader = true,
    data,
    pageSize = 10,
    activeRowIndex,
  } = props;

  return (
    <TableWrapper>
      <PerfectScrollbar>
        <TableStyled activeRowIndex={activeRowIndex}>
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
