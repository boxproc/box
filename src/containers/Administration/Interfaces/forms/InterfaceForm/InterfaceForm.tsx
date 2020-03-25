import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import { Button, ExternalSpinnerProps, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { InterfaceFields } from 'containers/Administration/Interfaces/components';

import {
  HandleAddAdminInterface,
  HandleDeleteAdminInterface,
  HandleUpdateAdminInterface,
  THandleGetDictionaryInterfaceTypes
} from 'store';
import { ISelectValue } from 'types';

interface InterfaceFormProps extends ExternalSpinnerProps {
  interfaceTypesOptions: Array<ISelectValue>;
  currentInterfaceName?: string;
  currentInterfaceId: number;
  isReadOnly: boolean;
  isLoadingTypesSelector: boolean;
  isEditMode?: boolean;
  updateInterface: HandleUpdateAdminInterface;
  addInterface: HandleAddAdminInterface;
  deleteInterface: HandleDeleteAdminInterface;
  getDictionaryInterfaceTypes: THandleGetDictionaryInterfaceTypes;
  onCancel: () => void;
}

type InterfaceFormAllProps = InterfaceFormProps &
  InjectedFormProps<{}, InterfaceFormProps>;

const InterfaceForm: React.FC<InterfaceFormAllProps> = ({
  onCancel,
  handleSubmit,
  deleteInterface,
  updateInterface,
  addInterface,
  currentInterfaceName,
  isEditMode,
  dirty,
  pristine,
  isReadOnly,
  getDictionaryInterfaceTypes,
  isLoadingTypesSelector,
  interfaceTypesOptions,
  currentInterfaceId,
}) => {
  React.useEffect(
    () => {
      getDictionaryInterfaceTypes();
    },
    [getDictionaryInterfaceTypes]
  );

  const submitFormAction = React.useMemo(
    () => isEditMode ? updateInterface : addInterface,
    [isEditMode, updateInterface, addInterface]
  );

  const deleteConfirmationText = React.useMemo(
    () => `Delete interface: "${currentInterfaceName}"?`,
    [currentInterfaceName]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitFormAction),
    [handleSubmit, submitFormAction]
  );

  const handleDeleteInterface = React.useCallback(
    () => deleteInterface(currentInterfaceId),
    [deleteInterface, currentInterfaceId]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <InterfaceFields
        interfaceTypesOptions={interfaceTypesOptions}
        isEditMode={isEditMode}
        isLoadingTypesSelector={isLoadingTypesSelector}
        isReadOnly={isReadOnly}
      />
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <div>
          {isEditMode && !isReadOnly && (
            <Button
              text="delete"
              iconName={iconNamesConst.DELETE}
              type="reset"
              withConfirmation={true}
              confirmationText={deleteConfirmationText}
              onClick={handleDeleteInterface}
            />
          )}
        </div>
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          onCancel={onCancel}
          withCancelConfirmation={dirty}
          disabledOk={pristine}
          hideOk={isReadOnly}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, InterfaceFormProps>({
  form: formNamesConst.INTERFACE,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(InterfaceForm));
