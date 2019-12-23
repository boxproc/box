import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import { Button, ExternalSpinnerProps, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { GeneralInterfacesInfo } from 'containers/Administration/Interfaces/components';

import {
  HandleAddAdminInterface,
  HandleDeleteAdminInterface,
  HandleUpdateAdminInterface
} from 'store/domains';
import { SelectValues } from 'types';

interface InterfaceFormProps extends ExternalSpinnerProps {
  institutionsOptions: Array<SelectValues>;
  updateAdminInterface: HandleUpdateAdminInterface;
  addAdminInterface: HandleAddAdminInterface;
  deleteInterface: HandleDeleteAdminInterface;
  onCancel: () => void;
  mode: 'add' | 'edit';
  currentInterfaceName?: string;
  isReadOnly: boolean;
}

type InterfaceFormAllProps = InterfaceFormProps &
  InjectedFormProps<{}, InterfaceFormProps>;

const InterfaceForm: React.FC<InterfaceFormAllProps> = ({
  onCancel,
  handleSubmit,
  deleteInterface,
  updateAdminInterface,
  addAdminInterface,
  institutionsOptions,
  currentInterfaceName,
  mode,
  dirty,
  pristine,
  isReadOnly,
}) => {
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
        institutionsOptions={institutionsOptions}
        isEditMode={isEditMode}
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
