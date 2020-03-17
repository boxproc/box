import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { EndpointFields } from 'containers/Administration/Endpoints/components';

import {
  HandleAddAdminEndpoint,
  HandleDeleteAdminEndpoint,
  HandleGetDictionaryEndpointTypes,
  HandleUpdateAdminEndpoint
} from 'store';

import { SelectValue } from 'types';

interface EndpointFormProps extends ExternalSpinnerProps {
  endpointTypesOptions: Array<SelectValue>;
  currentEndpointName: string;
  currentEndpointId: number;
  isReadOnly: boolean;
  isLoadingTypesSelector: boolean;
  isEditMode?: boolean;
  updateEndpoint: HandleUpdateAdminEndpoint;
  addEndpoint: HandleAddAdminEndpoint;
  deleteEndpoint: HandleDeleteAdminEndpoint;
  getDictionaryEndpointTypes: HandleGetDictionaryEndpointTypes;
  onCancel: () => void;
}

type EndpointFormAllProps = EndpointFormProps &
  InjectedFormProps<{}, EndpointFormProps>;

const EndpointForm: React.FC<EndpointFormAllProps> = ({
  onCancel,
  handleSubmit,
  deleteEndpoint,
  updateEndpoint,
  addEndpoint,
  pristine,
  dirty,
  isEditMode,
  currentEndpointName,
  isReadOnly,
  endpointTypesOptions,
  getDictionaryEndpointTypes,
  isLoadingTypesSelector,
  currentEndpointId,
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

export default reduxForm<{}, EndpointFormProps>({
  form: formNamesConst.ENDPOINT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EndpointForm));
