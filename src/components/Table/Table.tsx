import React from 'react';
import ReactTable, {
  ComponentDecoratorProps,
  ReactTableDefaults,
} from 'react-table';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { ChevronIcon } from 'components/Icon';

import { TableStyled } from './TableStyled';

interface TableItemWrapperProps {
  color?: string;
  textRight?: boolean;
  isDate?: boolean;
}

export const TableItemWrapper = styled.div<TableItemWrapperProps>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  font-size: ${({ isDate }) => isDate ? '12px' : '13px'};
  line-height: 1.5;
  justify-content: ${({ textRight }) => textRight ? 'flex-end' : 'inherit'};
  white-space: normal;
  border: 1px solid transparent;
  color: ${({ isDate, theme }) => isDate ? theme.grayColor : 'inherit'};

  .title {
    color: ${({ theme }) => theme.blackColorOpacity8};
    font-weight: 500;
    font-size: 11px;
    line-height: 1.6;
    text-align: center;
  }

  &:focus {
    border-color: ${({ theme }) => theme.normalAccentColor};
  }

  .icon path {
    stroke: ${({ theme }) => theme.grayColor};
  }
`;

const SortIconsWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2px 0;

  .up-icon {
    margin-bottom: 5px;
    transform: rotate(180deg);
  }
`;

interface HeaderProps {
  showSortIcons?: boolean;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showSortIcons = false,
}) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <TableItemWrapper>
        <Box
          className="title"
        >
          {title}
        </Box>
        {showSortIcons &&
          <SortIconsWrapper>
            <ChevronIcon className="icon up-icon" />
            <ChevronIcon className="icon down-icon" />
          </SortIconsWrapper>
        }
      </TableItemWrapper>
    </Flex>
  );
};

interface CellProps {
  value: string | number;
  style?: object;
  contentEditable?: boolean;
  suppressContentEditableWarning?: boolean;
  onBlur?: any;
  onKeyUp?: (e: React.KeyboardEvent) => void;
  isDate?: boolean;
  isNumber?: boolean;
}

export const Cell: React.FC<CellProps> = ({
  value,
  style,
  contentEditable,
  suppressContentEditableWarning,
  onBlur,
  onKeyUp,
  isDate = false,
  isNumber = false,
}) => (
    <TableItemWrapper
      style={style}
      textRight={isNumber}
      contentEditable={contentEditable}
      suppressContentEditableWarning={suppressContentEditableWarning}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      isDate={isDate}
    >
      {value}
    </TableItemWrapper>
  );

export interface TableProps extends Partial<ComponentDecoratorProps> {
  data: Array<object>;
  columns: Array<object>;
  pageSize?: number;
  NoDataComponent?: React.FC;
  style?: object;
  sortable?: boolean;
  filterable?: boolean;
  className?: string;
  title?: string;
  isHeader?: boolean;
}

export const Table: React.FC<TableProps> = props => {
  const {
    sortable = false,
    filterable = false,
    isHeader = true,
    data,
    pageSize = 10,
  } = props;

  return (
    <React.Fragment>
      <TableStyled>
        <ReactTable
          {...props as TableProps}
          sortable={sortable}
          filterable={filterable}
          minRows={0}
          showPagination={data && data.length > pageSize}
          showPageSizeOptions={false}
          defaultPageSize={pageSize}
          multiSort={false}
          resizable={false}
          TheadComponent={
            isHeader && data && data.length > 0
              ? ReactTableDefaults.TheadComponent
              : () => null
          }
        />
      </TableStyled>
    </React.Fragment>
  );
};
