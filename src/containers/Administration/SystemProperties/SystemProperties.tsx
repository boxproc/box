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
  deleteAdminSysProp: HandleDeleteAdminSysProp;
  filterAdminSysProps: HandleFilterAdminSysProps;
  updateAdminSysProps: HandleUpdateAdminSysProps;
  adminSysPropsItems: Array<AdminSysPropsItem>;
  currentSysPropId: number | string;
  resetSystemProperties: ResetSystemProperties;
  isLoading: boolean;
}

export const SystemProperties: React.FC<SystemPropertiesProps> = ({
  adminSysPropsItems,
  deleteAdminSysProp,
  filterAdminSysProps,
  updateAdminSysProps,
  currentSysPropId,
  resetSystemProperties,
  isLoading,
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
        action: deleteAdminSysProp,
        withConfirmation: true,
        confirmationText: `Delete system property "${currentSysPropId}"?`,
      },
      {
        name: 'Lock',
        icon: iconNamesConst.LOCK,
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
      columns={tableColumns}
      isDownloadButton={true}
      isLoading={isLoading}
      newModalName={modalNamesConst.ADD_SYSTEM_PROPERTY}
      editModalName={modalNamesConst.EDIT_SYSTEM_PROPERTY}
      contextMenuItems={contextMenuItems}
      filterAction={filterAdminSysProps}
      FilterForm={
        <SystemPropertyFilter
          isDisabled={isLoading}
        />
      }
    />
  );
};

export default SystemProperties;
