import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { SystemPropertyFilter } from './forms';

import { iconNamesConst, modalNamesConst } from 'consts';

import {
  ISysProp,
  THandleDeleteSysProp,
  THandleFilterSysProps,
  THandleUpdateSysProps,
  TResetSystemProperties,
} from 'store';

interface ISystemProperties {
  deleteSysProp: THandleDeleteSysProp;
  filterSysProps: THandleFilterSysProps;
  updateSysProps: THandleUpdateSysProps;
  sysPropsItems: ImmutableArray<ISysProp>;
  currentSysPropId: number | string;
  resetSystemProperties: TResetSystemProperties;
  isLoading: boolean;
  isReadOnly: boolean;
}

export const SystemProperties: React.FC<ISystemProperties> = ({
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
      viewingModalName={modalNamesConst.EDIT_SYSTEM_PROPERTY}
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
