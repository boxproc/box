import React from 'react';
import { RowInfo } from 'react-table';

import { theme } from 'theme';

import { Button } from 'components/Buttons';
import { CheckedBoxIcon, UncheckedBoxIcon } from 'components/Icon';
import { Cell, Header, Table, TableNoData } from 'components/Table';

import { withSpinner } from 'components/Spinner';

import { yesNoTypes } from 'consts';

import { AdminSysPropsItem, HandleDeleteAdminSysProp, HandleGetAdminSysProps } from 'store/domains';

import { TableCell } from 'types';

interface SystemPropertiesProps {
  deleteAdminSysProp: HandleDeleteAdminSysProp;
  getAdminSysProps: HandleGetAdminSysProps;
  adminSysPropsItems: Array<AdminSysPropsItem>;
}

const SysPropsNoData = () => (
  <TableNoData
    title="System Properties"
    hint="No rows found"
  />
);

export const SystemProperties: React.FC<SystemPropertiesProps> = ({
  adminSysPropsItems,
  deleteAdminSysProp,
  getAdminSysProps,
}) => {
  React.useEffect(
    () => {
      getAdminSysProps();
    },
    [getAdminSysProps]
  );

  const [activeRow, setActiveRow] = React.useState();

  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return { onClick: (e: React.MouseEvent<HTMLElement>) =>
        (e.target as any).classList.contains('delete-button')
          ? deleteAdminSysProp(rowInfo.original.propertyName)
          : setActiveRow(rowInfo.original),
      };
    },
    [deleteAdminSysProp]
  );

  console.log('---activeRow', activeRow);

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
        <Cell value={props.value} color={theme.grayColor} />,
    },
    {
      maxWidth: 130,
      Header: <Header title="Locked Flag" />,
      accessor: 'lockedFlag',
      Cell: (props: SPCell<'lockedFlag'>) =>
        props.value === yesNoTypes.No ? <UncheckedBoxIcon /> : <CheckedBoxIcon />,
    },
    {
      maxWidth: 100,
      accessor: 'deleteRow',
      Cell: () => (
        <Button
          text="Delete"
          transparent={true}
          className="delete-button"
        />
      ),
    },
  ];

  return (
    <React.Fragment>
      <Table
        title="System Properties"
        data={data}
        columns={columns}
        getTrGroupProps={handleOnClickRow}
        NoDataComponent={SysPropsNoData}
      />
    </React.Fragment>
  );
};

export default withSpinner({
  isFixed: true,
})(SystemProperties);
