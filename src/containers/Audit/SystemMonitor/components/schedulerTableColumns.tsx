import React from 'react';
import { CellInfo } from 'react-table';

import { Button, TableCell, TableHeader } from 'components';

import { iconNamesConst, stringsConst } from 'consts';

import { HandleGetLogData, SystemMonitorSchedulerItem } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof SystemMonitorSchedulerItem> =
  TableCellType<SystemMonitorSchedulerItem[T]>;

export const schedulerTableColumns = (getLogData: HandleGetLogData, name: string) => [
  {
    maxWidth: 125,
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
    maxWidth: 90,
    accessor: 'showLogButton',
    Cell: (cellInfo: CellInfo) => (
      <Button
        iconName={iconNamesConst.SHORT_TEXT}
        text={stringsConst.SHOW_LOG}
        size="10"
        onClick={() => getLogData({
          name,
          id: cellInfo.original.id,
          title: cellInfo.original.name,
        })}
      />
    ),
  },
];
