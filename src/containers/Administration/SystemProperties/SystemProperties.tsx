import React from 'react';
import { CellInfo } from 'react-table';

import { Box, Flex } from '@rebass/grid';

import { theme } from 'theme';

import { Button } from 'components/Buttons';
import { CheckedBoxIcon, UncheckedBoxIcon } from 'components/Icon';
import { Cell, Header, Table, TableNoData } from 'components/Table';
import { T2 } from 'components/Text';

import { withSpinner } from 'components/Spinner';

import { codeKeys, modalNames, yesNoTypes } from 'consts';

import SystemPropertyFilter from './SystemPropertyFilter';

import {
  AdminSysPropsItem,
  HandleDeleteAdminSysProp,
  HandleFilterAdminSysProps,
  HandleGetAdminSysProps,
  HandleResetFormByName,
  HandleUpdateAdminSysProps,
  OpenModal,
} from 'store/domains';

import { TableCell } from 'types';

interface SystemPropertiesProps {
  deleteAdminSysProp: HandleDeleteAdminSysProp;
  getAdminSysProps: HandleGetAdminSysProps;
  filterAdminSysProps: HandleFilterAdminSysProps;
  updateAdminSysProps: HandleUpdateAdminSysProps;
  adminSysPropsItems: Array<AdminSysPropsItem>;
  resetFormByName: HandleResetFormByName;
  openModal: OpenModal;
}

type SPCell<T extends keyof AdminSysPropsItem> = TableCell<AdminSysPropsItem[T]>;

const SysPropsNoData = () => (
  <TableNoData
    title="No rows found"
  />
);

export const SystemProperties: React.FC<SystemPropertiesProps> = ({
  adminSysPropsItems,
  deleteAdminSysProp,
  getAdminSysProps,
  filterAdminSysProps,
  resetFormByName,
  openModal,
  updateAdminSysProps,
}) => {
  React.useEffect(
    () => {
      getAdminSysProps();
    },
    [getAdminSysProps]
  );

  const renderEditable = (cellInfo: CellInfo) => {
    const isEditable = cellInfo.row.lockedFlag === yesNoTypes.NO;

    const editableCellStyles = {
      backgroundColor: isEditable && '#fafafa',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '0 7px',
      borderRadius: '2px',
    };

    const updateCellInfo = (e: any) => {
      const isChanged = cellInfo.value !== e.target.textContent;

      isChanged && updateAdminSysProps({
        ...cellInfo.original,
        [cellInfo.column.id]: e.target.textContent,
      });
    };

    return (
      <Cell
        style={editableCellStyles}
        value={cellInfo.value}
        contentEditable={isEditable}
        suppressContentEditableWarning={isEditable}
        onBlur={updateCellInfo}
        onKeyUp={(e: any) => {
          if (e.key === codeKeys.ENTER) {
            e.target.blur();
          }
        }}
      />
    );
  };

  const renderCheckBoxIcon = (cellInfo: CellInfo) => {
    const isLocked = cellInfo.value === yesNoTypes.YES;
    const propValues = cellInfo.original;

    return isLocked
      ? (<CheckedBoxIcon />)
      : (
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => updateAdminSysProps({
            ...propValues,
            lockedFlag: yesNoTypes.YES,
          })}
        >
          <UncheckedBoxIcon />
        </div>
      );
  };

  const renderDeleteButton = (cellInfo: CellInfo) => {
    const isLocked = cellInfo.row.lockedFlag === yesNoTypes.YES;
    const propName = cellInfo.original.propertyName;

    return !isLocked && (
      <Button
        text="Delete"
        transparent={true}
        onClick={() => deleteAdminSysProp(propName)}
      />
    );
  };

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
      Cell: renderEditable,
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
      maxWidth: 85,
      Header: <Header title="Locked" />,
      accessor: 'lockedFlag',
      Cell: renderCheckBoxIcon,
    },
    {
      maxWidth: 100,
      accessor: 'deleteButton',
      Cell: renderDeleteButton,
    },
  ];

  return (
    <React.Fragment>
      <T2>System Properties</T2>
      <SystemPropertyFilter
        resetFormByName={resetFormByName}
        filterAdminSysProps={filterAdminSysProps}
      />
      <Flex alignItems="flex-start">
        <Box mb="7px">
          <Button
            text="Add New"
            icon="&#43;"
            transparent={true}
            onClick={() => openModal({
              name: modalNames.ADD_ADMIN_SYSTEM_PROPERTY,
            })}
          />
        </Box>
      </Flex>
      <Table
        data={adminSysPropsItems}
        columns={columns}
        NoDataComponent={SysPropsNoData}
      />
    </React.Fragment >
  );
};

export default withSpinner({
  isFixed: true,
})(SystemProperties);
