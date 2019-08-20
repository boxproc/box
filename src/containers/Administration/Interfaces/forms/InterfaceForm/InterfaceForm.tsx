import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

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
  currentInterfaceId: number;
  deleteInterface: HandleDeleteAdminInterface;
  onCancel: () => void;
  mode: 'add' | 'edit';
  isDirty: boolean;
}

type InterfaceFormAllProps = InterfaceFormProps &
  InjectedFormProps<{}, InterfaceFormProps>;

const InterfaceForm: React.FC<InterfaceFormAllProps> = ({
  onCancel,
  handleSubmit,
  currentInterfaceId,
  deleteInterface,
  updateAdminInterface,
  addAdminInterface,
  institutionsOptions,
  isDirty,
  mode,
}) => {
  const isEditMode = mode === 'edit';
  const action = isEditMode ? updateAdminInterface : addAdminInterface;

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => action(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <GeneralInterfacesInfo
        institutionsOptions={institutionsOptions}
        isEditMode={isEditMode}
      />
      <Hr />
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        {isEditMode && (
          <Button
            text="delete"
            iconName="delete"
            type="reset"
            withConfirmation={true}
            confirmationText="Delete interface?"
            onClick={() => deleteInterface(currentInterfaceId)}
          />
        )}
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          onCancel={onCancel}
          rightPosition={true}
          withCancelConfirmation={isDirty}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, InterfaceFormProps>({
  form: formNames.ADMIN_INTERFACE,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(InterfaceForm));
