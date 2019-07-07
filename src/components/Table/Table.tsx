import React from 'react';
import ReactTable, {
  ComponentDecoratorProps,
  ReactTableDefaults,
} from 'react-table';

import styled from 'theme';

import { ChevronIcon } from '../Icon';

import 'react-table/react-table.css';

import { TableStyled } from './TableStyled';

interface TableItemWrapperProps {
  color?: string;
}

export const TableItemWrapper = styled.div<TableItemWrapperProps>`
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: ${({ theme, color }) => color ? color : theme.blackColor };

  .title {
    margin-right: 3px;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 15px;
  }

  &:hover {
    .icon path {
      stroke: ${({ theme }) => theme.normalAccentColor};
    }
  }
`;

const SortIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 7px;

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
    <TableItemWrapper>
      <div className="title">{title}</div>
      <SortIconsWrapper>
        {showSortIcons &&
          <React.Fragment>
            <ChevronIcon className="icon up-icon" />
            <ChevronIcon className="icon down-icon" />
          </React.Fragment>
        }
      </SortIconsWrapper>
    </TableItemWrapper>
  );

interface CellProps {
  value: string | number;
  color?: string;
}

export const Cell: React.FC<CellProps> = ({ value, color }) => (
  <TableItemWrapper color={color}>
    {value}
  </TableItemWrapper>
);

export interface TableProps extends Partial<ComponentDecoratorProps> {
  data: Array<object>;
  columns: Array<object>;
  NoDataComponent?: React.FC;
  style?: object;
  sortable?: boolean;
  className?: string;
}

export const Table: React.FC<TableProps> = props => {
  const { sortable = false, data } = props;

  return (
    <TableStyled>
      <ReactTable
        {...props as TableProps}
        sortable={sortable}
        minRows={0}
        showPagination={false}
        multiSort={false}
        resizable={false}
        TheadComponent={data && data.length > 0 ? ReactTableDefaults.TheadComponent : () => null}
      />
    </TableStyled>
  );
};
