import React from 'react';
import { CellInfo } from 'react-table';

import { Flex } from '@rebass/grid';

import { Button, TableCell, TableHeader } from 'components';
import { HandleGetLogData, ISysMonitorItem } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof ISysMonitorItem> = ITableCell<ISysMonitorItem[T]>;

export const tableColumns = (getLogData: HandleGetLogData, name: string) => [
  {
    maxWidth: 130,
    Header: <TableHeader title="Institution" />,
    accessor: 'institutionName',
    Cell: (props: TCell<'institutionName'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 260,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: TCell<'name'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 140,
    Header: <TableHeader title="Last Message Date&nbsp;/&nbsp;Time" />,
    accessor: 'lastMessageDatetime',
    Cell: (props: TCell<'lastMessageDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 140,
    Header: <TableHeader title="Last Fault Date&nbsp;/&nbsp;Time" />,
    accessor: 'lastFaultDatetime',
    Cell: (props: TCell<'lastFaultDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 85,
    accessor: 'showLogButton',
    Cell: (cellInfo: CellInfo) => (
      <Flex
        alignItems="flex-start"
        p="7px 5px"
      >
        <Button
          text="Show log"
          size="10"
          classNames={['is-bordered']}
          onClick={() => getLogData({
            name,
            id: cellInfo.original.id,
            title: cellInfo.original.name,
          })}
        />
      </Flex>
    ),
  },
];
