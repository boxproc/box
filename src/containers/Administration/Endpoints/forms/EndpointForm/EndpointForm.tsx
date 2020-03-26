import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';
import { formNamesConst, iconNamesConst } from 'consts';
import { EndpointFields } from 'containers/Administration/Endpoints/components';

import {
  THandleAddEndpoint,
  THandleDeleteEndpoint,
  THandleGetDictionaryEndpointTypes,
  THandleUpdateEndpoint,
} from 'store';

import { ISelectValue } from 'types';

interface IEndpointForm extends ExternalSpinnerProps {
  addEndpoint: THandleAddEndpoint;
  currentEndpointId: number;
  currentEndpointName: string;
  deleteEndpoint: THandleDeleteEndpoint;
  endpointTypesOptions: Array<ISelectValue>;
  getDictionaryEndpointTypes: THandleGetDictionaryEndpointTypes;
  isEditMode?: boolean;
  isLoadingTypesSelector: boolean;
  isReadOnly: boolean;
  onCancel: () => void;
  updateEndpoint: THandleUpdateEndpoint;
}

type TEndpointForm = IEndpointForm & InjectedFormProps<{}, IEndpointForm>;

const EndpointForm: React.FC<TEndpointForm> = ({
  addEndpoint,
  currentEndpointId,
  currentEndpointName,
  deleteEndpoint,
  dirty,
  endpointTypesOptions,
  getDictionaryEndpointTypes,
  handleSubmit,
  isEditMode,
  isLoadingTypesSelector,
  isReadOnly,
  onCancel,
  pristine,
  updateEndpoint,
}) => {
  React.useEffect(
    () => {
      getDictionaryEndpointTypes();
    },
    [getDictionaryEndpointTypes]
  );

  const submitFormAction = React.useMemo(
    () => isEditMode ? updateEndpoint : addEndpoint,
    [isEditMode, updateEndpoint, addEndpoint]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitFormAction),
    [handleSubmit, submitFormAction]
  );

  const handleDeleteEndpoint = React.useCallback(
    () => deleteEndpoint(currentEndpointId),
    [deleteEndpoint, currentEndpointId]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <EndpointFields
        endpointTypesOptions={endpointTypesOptions}
        isEditMode={isEditMode}
        isLoadingTypesSelector={isLoadingTypesSelector}
        isReadOnly={isReadOnly}
      />
      <Hr />
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
              confirmationText={`Delete endpoint "${currentEndpointName}"?`}
              onClick={handleDeleteEndpoint}
            />
          )}
        </div>
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          onCancel={onCancel}
          disabledOk={pristine}
          withCancelConfirmation={dirty}
          hideOk={isReadOnly}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, IEndpointForm>({
  form: formNamesConst.ENDPOINT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EndpointForm));
