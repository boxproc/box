import React from 'react';

import {
  renderCheckBoxIconTableCell,
  renderEditableTableCell,
  TableCell,
  TableHeader,
  TablePage,
  withSpinner,
} from 'components';

import { SystemPropertyFilter } from 'containers/Administration/SystemProperties/forms';

import { modalNamesConst } from 'consts';

import {
  AdminSysPropsItem,
  HandleDeleteAdminSysProp,
  HandleFilterAdminSysProps,
  HandleUpdateAdminSysProps,
} from 'store/domains';

import { TableCellType } from 'types';

interface SystemPropertiesProps {
  deleteAdminSysProp: HandleDeleteAdminSysProp;
  filterAdminSysProps: HandleFilterAdminSysProps;
  updateAdminSysProps: HandleUpdateAdminSysProps;
  adminSysPropsItems: Array<AdminSysPropsItem>;
  currentSysPropId: number | string;
}

type TCell<T extends keyof AdminSysPropsItem> = TableCellType<AdminSysPropsItem[T]>;

export const SystemProperties: React.FC<SystemPropertiesProps> = ({
  adminSysPropsItems,
  deleteAdminSysProp,
  filterAdminSysProps,
  updateAdminSysProps,
  currentSysPropId,
}) => {
  const columns = [
    {
      maxWidth: 300,
      sortable: true,
      Header: <TableHeader title="Property Name" />,
      accessor: 'id',
      Cell: (props: TCell<'id'>) => (
        <TableCell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      Header: <TableHeader title="Current Value" />,
      accessor: 'currentValue',
      Cell: renderEditableTableCell(updateAdminSysProps),
    },
    {
      sortable: true,
      Header: <TableHeader title="Previous Value" />,
      accessor: 'previousValue',
      Cell: (props: TCell<'previousValue'>) => (
        <TableCell
          value={props.value}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 200,
      sortable: true,
      Header: <TableHeader title="Last Datetime" />,
      accessor: 'lastDatetime',
      Cell: (props: TCell<'lastDatetime'>) => (
        <TableCell
          value={props.value}
          isDate={true}
        />
      ),
    },
    {
      maxWidth: 100,
      sortable: true,
      Header: <TableHeader title="Locked" />,
      accessor: 'lockedFlag',
      Cell: renderCheckBoxIconTableCell(),
    },
  ];
  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Delete',
        icon: 'delete',
        action: deleteAdminSysProp,
        withConfirmation: true,
        confirmationText: `Delete system property "${currentSysPropId}"?`,
      },
      {
        name: 'Lock',
        icon: 'lock',
        action: () => updateAdminSysProps({
          lockedFlag: true,
        }),
        withConfirmation: true,
        confirmationText: `Lock system property "${currentSysPropId}"?`,
      },
    ],
    [deleteAdminSysProp, currentSysPropId, updateAdminSysProps]
  );

  return (
    <TablePage
      title="System Properties"
      data={adminSysPropsItems}
      columns={columns}
      addNewModalName={modalNamesConst.ADD_ADMIN_SYSTEM_PROPERTY}
      contextMenuItems={contextMenuItems}
      filterAction={filterAdminSysProps}
      FilterForm={
        <SystemPropertyFilter />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(SystemProperties);
