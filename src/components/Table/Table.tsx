import React from 'react';
import ReactTable, {
  ComponentDecoratorProps,
  ReactTableDefaults,
} from 'react-table';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { ChevronIcon } from '../Icon';

import { TableStyled } from './TableStyled';

interface TableItemWrapperProps {
  color?: string;
  textRight?: boolean;
}

export const TableItemWrapper = styled.div<TableItemWrapperProps>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  font-size: 15px;
  justify-content: ${({ textRight }) => textRight ? 'flex-end' : 'inherit'};

  .title {
    color: ${({ theme }) => theme.blackColorOpacity8};
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.lightGrayColor};
  }

  .icon path {
    stroke: ${({ theme }) => theme.grayColor};
  }
`;

const SortIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;

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
  title, showSortIcons = false,
}) => (
    <Flex justifyContent="center" alignItems="center">
      <TableItemWrapper>
        <Box className="title">{title}</Box>
        <SortIconsWrapper>
          {showSortIcons &&
            <React.Fragment>
              <ChevronIcon className="icon up-icon" />
              <ChevronIcon className="icon down-icon" />
            </React.Fragment>
          }
        </SortIconsWrapper>
      </TableItemWrapper>
    </Flex>
  );

interface CellProps {
  value: string | number;
  style?: object;
  contentEditable?: boolean;
  suppressContentEditableWarning?: boolean;
  onBlur?: any;
  onKeyUp?: any;
}

export const Cell: React.FC<CellProps> = ({
  value,
  style,
  contentEditable,
  suppressContentEditableWarning,
  onBlur,
  onKeyUp,
}) => (
    <TableItemWrapper
      style={style}
      textRight={typeof value === 'number'}
      contentEditable={contentEditable}
      suppressContentEditableWarning={suppressContentEditableWarning}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
    >
      {value}
    </TableItemWrapper>
  );

export interface TableProps extends Partial<ComponentDecoratorProps> {
  data: Array<object>;
  columns: Array<object>;
  NoDataComponent?: React.FC;
  style?: object;
  sortable?: boolean;
  filterable?: boolean;
  className?: string;
  title?: string;
  minRows?: number;
}

export const Table: React.FC<TableProps> = props => {
  const {
    sortable = false,
    filterable = false,
    data,
    minRows = 0,
  } = props;

  return (
    <React.Fragment>
      <TableStyled>
        <ReactTable
          {...props as TableProps}
          sortable={sortable}
          filterable={filterable}
          minRows={minRows}
          showPagination={false}
          multiSort={false}
          resizable={true}
          TheadComponent={data && data.length > 0 ? ReactTableDefaults.TheadComponent : () => null}
        />
      </TableStyled>
    </React.Fragment>
  );
};
