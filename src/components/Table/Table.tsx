import React from 'react';
import ReactTable, {
  ComponentDecoratorProps,
  ReactTableDefaults,
} from 'react-table';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import Hint from 'components/Hint';
import { ChevronIcon } from 'components/Icon';

import { TableStyled } from './TableStyled';

import { stringsUtil } from 'utils';

interface TableItemWrapperProps {
  color?: string;
  textRight?: boolean;
  isDate?: boolean;
}

export const TableItemWrapper = styled.div<TableItemWrapperProps>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  font-size: ${({ isDate, theme }) => isDate ? '12px' : '13px'};
  line-height: 1.5;
  justify-content: ${({ textRight }) => textRight ? 'flex-end' : 'inherit'};
  white-space: normal;
  word-break: break-word;
  border: 1px solid transparent;
  color: ${({ isDate, theme }) => isDate ? theme.grayColor : 'inherit'};

  .title {
    color: ${({ theme }) => theme.blackColorOpacity8};
    font-weight: 500;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &:focus {
    border-color: ${({ theme }) => theme.normalAccentColor};
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
  padding: 3px 0;

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
  const headerCellRef = React.useRef(null);
  const [isOverflow, setIsOverflow] = React.useState(false);

  React.useEffect(
    () => {
      if (stringsUtil.isOverflow(headerCellRef.current)) {
        setIsOverflow(true);
      }
    },
    [headerCellRef]
  );

  return (
    <Flex justifyContent="center" alignItems="center">
      <TableItemWrapper>
        <Box
          className="title"
          ref={headerCellRef}
        >
          {title}
        </Box>
        <SortIconsWrapper>
          {showSortIcons &&
            <React.Fragment>
              <ChevronIcon className="icon up-icon" />
              <ChevronIcon className="icon down-icon" />
            </React.Fragment>
          }
        </SortIconsWrapper>
      </TableItemWrapper>
      {isOverflow && (
        <Hint
          text={title}
          position="bottom"
          icon={false}
        />
      )}
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
  hint?: string;
  isDate?: boolean;
}

export const Cell: React.FC<CellProps> = ({
  value,
  style,
  contentEditable,
  suppressContentEditableWarning,
  onBlur,
  onKeyUp,
  hint,
  isDate = false,
}) => (
    <TableItemWrapper
      style={style}
      textRight={typeof value === 'number'}
      contentEditable={contentEditable}
      suppressContentEditableWarning={suppressContentEditableWarning}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      isDate={isDate}
    >
      <div title={hint}>{value}</div>
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
  isHeader?: boolean;
}

export const Table: React.FC<TableProps> = props => {
  const {
    sortable = false,
    filterable = false,
    isHeader = true,
    data,
  } = props;

  return (
    <React.Fragment>
      <TableStyled>
        <ReactTable
          {...props as TableProps}
          sortable={sortable}
          filterable={filterable}
          minRows={0}
          showPagination={data && data.length > 10}
          showPageSizeOptions={false}
          defaultPageSize={10}
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
