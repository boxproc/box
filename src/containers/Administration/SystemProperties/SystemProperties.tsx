import React from 'react';

import { Cell, Header } from 'components/Table/Table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { renderCheckBoxIcon, renderEditable } from 'components/Table/utils';
import { SystemPropertyFilter } from 'containers/Administration/SystemProperties/forms';

import { modalNames } from 'consts';

import {
  AdminSysPropsItem,
  HandleDeleteAdminSysProp,
  HandleFilterAdminSysProps,
  HandleSetAdminSysPropId,
  HandleUpdateAdminSysProps,
} from 'store/domains';

import { TableCell } from 'types';

interface SystemPropertiesProps {
  deleteAdminSysProp: HandleDeleteAdminSysProp;
  filterAdminSysProps: HandleFilterAdminSysProps;
  updateAdminSysProps: HandleUpdateAdminSysProps;
  adminSysPropsItems: Array<AdminSysPropsItem>;
  setAdminSysPropId: HandleSetAdminSysPropId;
  currentSysPropId: string;
  isFilterFormDirty: boolean;
}

type SPCell<T extends keyof AdminSysPropsItem> = TableCell<AdminSysPropsItem[T]>;

export const SystemProperties: React.FC<SystemPropertiesProps> = ({
  adminSysPropsItems,
  deleteAdminSysProp,
  filterAdminSysProps,
  updateAdminSysProps,
  setAdminSysPropId,
  currentSysPropId,
  isFilterFormDirty,
}) => {
  const columns = [
    {
      maxWidth: 300,
      sortable: true,
      Header: <Header title="Property Name" />,
      accessor: 'id',
      Cell: (props: SPCell<'id'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      Header: <Header title="Current Value" />,
      accessor: 'currentValue',
      Cell: renderEditable(updateAdminSysProps),
    },
    {
      sortable: true,
      Header: <Header title="Previous Value" />,
      accessor: 'previousValue',
      Cell: (props: SPCell<'previousValue'>) => (
        <Cell
          value={props.value}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 200,
      sortable: true,
      Header: <Header title="Last Datetime" />,
      accessor: 'lastDatetime',
      Cell: (props: SPCell<'lastDatetime'>) => (
        <Cell
          value={props.value}
          isDate={true}
        />
      ),
    },
    {
      maxWidth: 100,
      sortable: true,
      Header: <Header title="Locked" />,
      accessor: 'lockedFlag',
      Cell: renderCheckBoxIcon(),
    },
  ];

  const contextMenuItems = [
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
  ];

  return (
    <TablePage
      title="System Properties"
      data={adminSysPropsItems}
      columns={columns}
      addNewModalName={modalNames.ADD_ADMIN_SYSTEM_PROPERTY}
      contextMenuItems={contextMenuItems}
      setCurrentIdAction={setAdminSysPropId}
      FilterForm={
        <SystemPropertyFilter
          filterAdminSysProps={filterAdminSysProps}
          isDirty={isFilterFormDirty}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(SystemProperties);
