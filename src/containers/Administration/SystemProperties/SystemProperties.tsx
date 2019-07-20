import React from 'react';

import { theme } from 'theme';

import { Cell, Header } from 'components/Table/Table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage/TablePage';

import {
  renderCheckBoxIcon,
  renderDeleteButton,
  renderEditable,
} from 'components/Table/utils';

import { cookiesExpires, cookiesNames, modalNames } from 'consts';

import {
  AdminSysPropFilterParams,
  AdminSysPropsItem,
  HandleDeleteAdminSysProp,
  HandleFilterAdminSysProps,
  HandleGetAdminSysProps,
  HandleUpdateAdminSysProps,
  OpenModal,
} from 'store/domains';

import SystemPropertyFilter from './SystemPropertyFilter';

import { TableCell } from 'types';

import { cookiesUtil } from 'utils';

interface SystemPropertiesProps {
  deleteAdminSysProp: HandleDeleteAdminSysProp;
  getAdminSysProps: HandleGetAdminSysProps;
  filterAdminSysProps: HandleFilterAdminSysProps;
  updateAdminSysProps: HandleUpdateAdminSysProps;
  adminSysPropsItems: Array<AdminSysPropsItem>;
  openModal: OpenModal;
  sysPropsFilterParams: AdminSysPropFilterParams;
}

type SPCell<T extends keyof AdminSysPropsItem> = TableCell<AdminSysPropsItem[T]>;

export const SystemProperties: React.FC<SystemPropertiesProps> = ({
  adminSysPropsItems,
  deleteAdminSysProp,
  getAdminSysProps,
  filterAdminSysProps,
  openModal,
  updateAdminSysProps,
  sysPropsFilterParams,
}) => {

  React.useEffect(
    () => {
      getAdminSysProps();

      if (sysPropsFilterParams) {
        cookiesUtil.set(
          cookiesNames.SYSTEM_PROPERTIES_FILTER,
          JSON.stringify(sysPropsFilterParams), {
            expires: cookiesExpires.WEEK,
          }
        );
      }
    },
    [getAdminSysProps, sysPropsFilterParams]
  );

  const systemPropsParams = cookiesUtil.get(cookiesNames.SYSTEM_PROPERTIES_FILTER);
  const initialFilterValues = systemPropsParams && JSON.parse(systemPropsParams);

  const columns = [
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Property Name" showSortIcons={true} />,
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
      Header: <Header title="Current Value" showSortIcons={true} />,
      accessor: 'currentValue',
      Cell: renderEditable(updateAdminSysProps),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Previous Value" showSortIcons={true} />,
      accessor: 'previousValue',
      Cell: (props: SPCell<'previousValue'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Last Datetime" showSortIcons={true} />,
      accessor: 'lastDatetime',
      Cell: (props: SPCell<'lastDatetime'>) => (
        <Cell
          value={props.value}
          style={{ color: theme.grayColor }}
        />
      ),
    },
    {
      maxWidth: 95,
      sortable: true,
      Header: <Header title="Locked" showSortIcons={true} />,
      accessor: 'lockedFlag',
      Cell: renderCheckBoxIcon(updateAdminSysProps),
    },
    {
      maxWidth: 100,
      accessor: 'deleteButton',
      Cell: renderDeleteButton(deleteAdminSysProp),
    },
  ];

  return (
    <React.Fragment>
      <TablePage
        title="System Properties"
        data={adminSysPropsItems}
        columns={columns}
        addNewModalName={modalNames.ADD_ADMIN_SYSTEM_PROPERTY}
        openModal={openModal}
        hint="Cannot Edit or Delete Locked Property"
        FilterForm={
          <SystemPropertyFilter
            filterAdminSysProps={filterAdminSysProps}
            initialValues={initialFilterValues}
          />
        }
      />
    </React.Fragment >
  );
};

export default withSpinner({
  isFixed: true,
})(SystemProperties);
