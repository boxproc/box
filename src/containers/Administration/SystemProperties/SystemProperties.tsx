import React from 'react';

import {
  renderCheckBoxIconTableCell,
  renderEditableTableCell,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';

import PageTemplate from 'containers/PageTemplate';
import { SystemPropertyFilter } from './forms';

import { modalNamesConst } from 'consts';

import {
  AdminSysPropsItem,
  HandleDeleteAdminSysProp,
  HandleFilterAdminSysProps,
  HandleUpdateAdminSysProps,
  ResetSystemProperties,
} from 'store/domains';

import { TableCellType } from 'types';

interface SystemPropertiesProps {
  deleteAdminSysProp: HandleDeleteAdminSysProp;
  filterAdminSysProps: HandleFilterAdminSysProps;
  updateAdminSysProps: HandleUpdateAdminSysProps;
  adminSysPropsItems: Array<AdminSysPropsItem>;
  currentSysPropId: number | string;
  resetSystemProperties: ResetSystemProperties;
}

type TCell<T extends keyof AdminSysPropsItem> = TableCellType<AdminSysPropsItem[T]>;

export const SystemProperties: React.FC<SystemPropertiesProps> = ({
  adminSysPropsItems,
  deleteAdminSysProp,
  filterAdminSysProps,
  updateAdminSysProps,
  currentSysPropId,
  resetSystemProperties,
}) => {
  React.useEffect(
    () => {
      return () => resetSystemProperties();
    },
    [resetSystemProperties]
  );

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
      maxWidth: 300,
      sortable: true,
      Header: <TableHeader title="Current Value" />,
      accessor: 'currentValue',
      Cell: renderEditableTableCell(updateAdminSysProps),
    },
    {
      maxWidth: 300,
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
      maxWidth: 80,
      sortable: true,
      Header: <TableHeader title="Locked" />,
      accessor: 'lockedFlag',
      Cell: renderCheckBoxIconTableCell(updateAdminSysProps),
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
    <PageTemplate
      title="System Properties"
      data={adminSysPropsItems}
      columns={columns}
      newModalName={modalNamesConst.ADD_ADMIN_SYSTEM_PROPERTY}
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
