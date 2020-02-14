import React from 'react';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { SystemPropertyFilter } from './forms';

import { iconNamesConst, modalNamesConst } from 'consts';

import {
  AdminSysPropsItem,
  HandleDeleteAdminSysProp,
  HandleFilterAdminSysProps,
  HandleUpdateAdminSysProps,
  ResetSystemProperties,
} from 'store/domains';

interface SystemPropertiesProps {
  deleteSysProp: HandleDeleteAdminSysProp;
  filterSysProps: HandleFilterAdminSysProps;
  updateSysProps: HandleUpdateAdminSysProps;
  sysPropsItems: Array<AdminSysPropsItem>;
  currentSysPropId: number | string;
  resetSystemProperties: ResetSystemProperties;
  isLoading: boolean;
  isReadOnly: boolean;
}

export const SystemProperties: React.FC<SystemPropertiesProps> = ({
  sysPropsItems,
  deleteSysProp,
  filterSysProps,
  updateSysProps,
  currentSysPropId,
  resetSystemProperties,
  isLoading,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      return () => resetSystemProperties();
    },
    [resetSystemProperties]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Delete',
        icon: iconNamesConst.DELETE,
        isDisabled: isReadOnly,
        action: () => deleteSysProp(currentSysPropId),
        withConfirmation: true,
        confirmationText: `Delete system property "${currentSysPropId}"?`,
      },
      {
        name: 'Lock',
        icon: iconNamesConst.LOCK,
        isDisabled: isReadOnly,
        action: () => updateSysProps({ lockedFlag: true }),
        withConfirmation: true,
        confirmationText: `Lock system property "${currentSysPropId}"?`,
      },
    ],
    [deleteSysProp, currentSysPropId, updateSysProps, isReadOnly]
  );

  return (
    <PageTemplate
      title="System Properties"
      data={sysPropsItems}
      columns={tableColumns}
      isDownloadButton={true}
      isLoading={isLoading}
      newModalName={modalNamesConst.ADD_SYSTEM_PROPERTY}
      editModalName={modalNamesConst.EDIT_SYSTEM_PROPERTY}
      contextMenuItems={contextMenuItems}
      filterAction={filterSysProps}
      FilterForm={
        <SystemPropertyFilter
          isDisabled={isLoading}
        />
      }
    />
  );
};

export default SystemProperties;
