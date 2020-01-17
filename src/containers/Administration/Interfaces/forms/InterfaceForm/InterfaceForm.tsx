import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import { Button, ExternalSpinnerProps, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { GeneralInterfacesInfo } from 'containers/Administration/Interfaces/components';

import {
  HandleAddAdminInterface,
  HandleDeleteAdminInterface,
  HandleGetDictionaryInterfaceTypes,
  HandleUpdateAdminInterface
} from 'store/domains';
import { SelectValue } from 'types';

interface InterfaceFormProps extends ExternalSpinnerProps {
  interfaceTypesOptions: Array<SelectValue>;
  updateAdminInterface: HandleUpdateAdminInterface;
  addAdminInterface: HandleAddAdminInterface;
  deleteInterface: HandleDeleteAdminInterface;
  getDictionaryInterfaceTypes: HandleGetDictionaryInterfaceTypes;
  onCancel: () => void;
  mode: 'add' | 'edit';
  currentInterfaceName?: string;
  isReadOnly: boolean;
  isLoadingTypesSelector: boolean;
}

type InterfaceFormAllProps = InterfaceFormProps &
  InjectedFormProps<{}, InterfaceFormProps>;

const InterfaceForm: React.FC<InterfaceFormAllProps> = ({
  onCancel,
  handleSubmit,
  deleteInterface,
  updateAdminInterface,
  addAdminInterface,
  currentInterfaceName,
  mode,
  dirty,
  pristine,
  isReadOnly,
  getDictionaryInterfaceTypes,
  isLoadingTypesSelector,
  interfaceTypesOptions,
}) => {
  React.useEffect(
    () => {
      getDictionaryInterfaceTypes();
    },
    [getDictionaryInterfaceTypes]
  );

  const isEditMode = React.useMemo(
    () => mode === 'edit',
    [mode]
  );

  const submitFormAction = React.useMemo(
    () => isEditMode ? updateAdminInterface : addAdminInterface,
    [isEditMode, updateAdminInterface, addAdminInterface]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitFormAction),
    [handleSubmit, submitFormAction]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <GeneralInterfacesInfo
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
              confirmationText={`Delete interface: "${currentInterfaceName}"?`}
              onClick={deleteInterface}
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
