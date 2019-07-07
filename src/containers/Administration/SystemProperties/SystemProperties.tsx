import React from 'react';

import { CheckedBoxIcon, UncheckedBoxIcon } from 'components/Icon';
import { Cell, Header, Table } from 'components/Table';
import { T2 } from 'components/Text';

import { withSpinner } from 'components/Spinner';

import { AdminSysPropsItem, HandleGetAdminSysProps } from 'store/domains';

import { TableCell } from 'types';
import { theme } from 'theme';

interface SystemPropertiesProps {
  getAdminSysProps: HandleGetAdminSysProps;
  adminSysPropsItems: Array<AdminSysPropsItem>;
}

export const SystemProperties: React.FC<SystemPropertiesProps> = ({
  adminSysPropsItems,
  getAdminSysProps,
}) => {
  React.useEffect(
    () => {
      getAdminSysProps();
    },
    [getAdminSysProps]
  );

  const data = adminSysPropsItems ? adminSysPropsItems : [];

  type SPCell<T extends keyof AdminSysPropsItem> = TableCell<AdminSysPropsItem[T]>;

  const columns = [
    {
      sortable: true,
      Header: <Header title="Property Name" showSortIcons={true} />,
      accessor: 'propertyName',
      Cell: (props: SPCell<'propertyName'>) =>
        <Cell value={props.value} />,
    },
    {
      sortable: true,
      Header: <Header title="Current Value" showSortIcons={true} />,
      accessor: 'currentValue',
      Cell: (props: SPCell<'currentValue'>) =>
        <Cell value={props.value} />,
    },
    {
      sortable: true,
      Header: <Header title="Previous Value" showSortIcons={true} />,
      accessor: 'previousValue',
      Cell: (props: SPCell<'previousValue'>) =>
        <Cell value={props.value} />,
    },
    {
      sortable: true,
      Header: <Header title="Last Datetime" showSortIcons={true} />,
      accessor: 'lastDatetime',
      Cell: (props: SPCell<'lastDatetime'>) =>
        <Cell value={props.value} color={theme.grayColor}/>,
    },
    {
      maxWidth: 130,
      Header: <Header title="Locked Flag"/>,
      accessor: 'lockedFlag',
      Cell: (props: SPCell<'lockedFlag'>) =>
        props.value === 'N' ? <UncheckedBoxIcon/> : <CheckedBoxIcon/>,
    },
  ];

  return (
    <React.Fragment>
      <T2>System Properties</T2>
      <Table
        data={data}
        columns={columns}
      />
    </React.Fragment>
  );
};

export default withSpinner({
  isFixed: true,
})(SystemProperties);
