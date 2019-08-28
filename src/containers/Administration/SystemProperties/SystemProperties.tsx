import React from 'react';
import { CellInfo } from 'react-table';

import { Cell, Header } from 'components/Table/Table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { Button } from 'components/Buttons';
import {
  renderCheckBoxIcon,
  renderEditable,
} from 'components/Table/utils';
import { SystemPropertyFilter } from 'containers/Administration/SystemProperties/forms';

import { cookiesExpires, cookiesNames, modalNames } from 'consts';

import {
  AdminSysPropFilterParams,
  AdminSysPropsItem,
  HandleDeleteAdminSysProp,
  HandleFilterAdminSysProps,
  HandleGetAdminSysProps,
  HandleUpdateAdminSysProps,
} from 'store/domains';

import { TableCell } from 'types';

import { cookiesUtil } from 'utils';

interface SystemPropertiesProps {
  deleteAdminSysProp: HandleDeleteAdminSysProp;
  getAdminSysProps: HandleGetAdminSysProps;
  filterAdminSysProps: HandleFilterAdminSysProps;
  updateAdminSysProps: HandleUpdateAdminSysProps;
  adminSysPropsItems: Array<AdminSysPropsItem>;
  sysPropsFilterParams: AdminSysPropFilterParams;
}

type SPCell<T extends keyof AdminSysPropsItem> = TableCell<AdminSysPropsItem[T]>;

const renderDeleteButton = (deleteAction: (name: string) => void) =>
  (cellInfo: CellInfo) => {
    const isLocked = cellInfo.row.lockedFlag;
    const propName = cellInfo.original.propertyName;

    return !isLocked && (
      <Button
        text="Delete"
        iconName="delete"
        withConfirmation={true}
        confirmationText={`Delete "${propName}" system property?`}
        onClick={() => deleteAction(propName)}
      />
    );
  };

export const SystemProperties: React.FC<SystemPropertiesProps> = ({
  adminSysPropsItems,
  deleteAdminSysProp,
  getAdminSysProps,
  filterAdminSysProps,
  updateAdminSysProps,
  sysPropsFilterParams,
}) => {

  React.useEffect(
    () => {
      getAdminSysProps();
    },
    [getAdminSysProps]
  );

  React.useEffect(
    () => {
      if (sysPropsFilterParams) {
        cookiesUtil.set(
          cookiesNames.SYSTEM_PROPERTIES_FILTER,
          JSON.stringify(sysPropsFilterParams), {
            expires: cookiesExpires.WEEK,
          }
        );
      }
    },
    [sysPropsFilterParams]
  );

  const columns = [
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Property Name" />,
      accessor: 'propertyName',
      Cell: (props: SPCell<'propertyName'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Current Value" />,
      accessor: 'currentValue',
      Cell: renderEditable(updateAdminSysProps),
    },
    {
      sortable: true,
      filterable: true,
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
      sortable: true,
      filterable: true,
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
      Cell: renderCheckBoxIcon(updateAdminSysProps),
    },
    {
      maxWidth: 100,
      accessor: 'deleteButton',
      Cell: renderDeleteButton(deleteAdminSysProp),
    },
  ];

  const systemPropsParams = cookiesUtil.get(cookiesNames.SYSTEM_PROPERTIES_FILTER);
  const initialFilterValues = systemPropsParams && JSON.parse(systemPropsParams);

  return (
    <TablePage
      title="System Properties"
      data={adminSysPropsItems}
      columns={columns}
      hint="Cannot Edit or Delete Locked Property"
      addNewModalName={modalNames.ADD_ADMIN_SYSTEM_PROPERTY}
      FilterForm={
        <SystemPropertyFilter
          filterAdminSysProps={filterAdminSysProps}
          initialValues={initialFilterValues}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(SystemProperties);
