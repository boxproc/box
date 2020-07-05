import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import { Button, ISpinner, OkCancelButtons, withSpinner } from 'components';
import { formNamesConst, iconNamesConst } from 'consts';
import { InterfaceFields } from './../../components';

import {
  THandleAddInterface,
  THandleDeleteInterface,
  THandleGetDictionaryInterfaceTypes,
  THandleUpdateInterface,
} from 'store';
import { ISelectValue } from 'types';

interface IInterfaceForm extends ISpinner {
  interfaceTypesOptions: Array<ISelectValue>;
  institutionsOptions: Array<ISelectValue>;
  currentInterfaceName?: string;
  currentInterfaceId: number;
  isReadOnly?: boolean;
  isLoadingTypesSelector: boolean;
  isEditMode?: boolean;
  updateInterface: THandleUpdateInterface;
  addInterface: THandleAddInterface;
  deleteInterface: THandleDeleteInterface;
  getDictionaryInterfaceTypes: THandleGetDictionaryInterfaceTypes;
  onCancel: () => void;
}

type TInterfaceForm = IInterfaceForm & InjectedFormProps<{}, IInterfaceForm>;

const InterfaceForm: React.FC<TInterfaceForm> = ({
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
  institutionsOptions,
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
        institutionsOptions={institutionsOptions}
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
              classNames={['is-bordered']}
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

export default reduxForm<{}, IInterfaceForm>({
  form: formNamesConst.INTERFACE,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(InterfaceForm));
