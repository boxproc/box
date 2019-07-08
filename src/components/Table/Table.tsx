import React from 'react';
import ReactTable, {
  ComponentDecoratorProps,
  ReactTableDefaults,
} from 'react-table';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { T2 } from 'components/Text';
import { ChevronIcon } from '../Icon';

import { TableStyled } from './TableStyled';

import { stateClasses } from 'consts';

interface TableItemWrapperProps {
  color?: string;
}

export const TableItemWrapper = styled.div<TableItemWrapperProps>`
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  font-size: 15px;

  .title {
    color: ${({ theme, color }) => theme.blackColorOpacity8 };
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &.${stateClasses.IS_FOCUSED} {
    border: 1px solid ${({ theme, color }) => theme.normalAccentColor };
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
  );

interface CellProps {
  value: string | number;
  style?: object;
  contentEditable?: boolean;
  suppressContentEditableWarning?: boolean;
  onBlur?: any;
  onFocus?: any;
  onKeyUp?: any;
}

export const Cell: React.FC<CellProps> = ({
  value,
  style,
  contentEditable,
  suppressContentEditableWarning,
  onBlur,
  onFocus,
  onKeyUp,
}) => (
  <TableItemWrapper
    style={style}
    contentEditable={contentEditable}
    suppressContentEditableWarning={suppressContentEditableWarning}
    onBlur={onBlur}
    onFocus={onFocus}
    onKeyUp={onKeyUp}
  >
    {value}
  </TableItemWrapper>
);

const TableTitle = styled(T2)`
  color: ${({ theme }) => theme.blackColorOpacity5};
`;

export interface TableProps extends Partial<ComponentDecoratorProps> {
  data: Array<object>;
  columns: Array<object>;
  NoDataComponent?: React.FC;
  style?: object;
  sortable?: boolean;
  className?: string;
  title?: string;
}

export const Table: React.FC<TableProps> = props => {
  const { sortable = false, data, title } = props;

  return (
    <React.Fragment>
      <TableTitle>{title}</TableTitle>
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
    </React.Fragment>
  );
};
