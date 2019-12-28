import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { GeneralEndpointsInfo } from 'containers/Administration/Endpoints/components';

import {
  HandleAddAdminEndpoint,
  HandleDeleteAdminEndpoint,
  HandleGetDictionaryEndpointTypes,
  HandleUpdateAdminEndpoint
} from 'store/domains';

import { SelectValues } from 'types';

interface EndpointFormProps extends ExternalSpinnerProps {
  endpointTypesOptions: Array<SelectValues>;
  updateAdminEndpoint: HandleUpdateAdminEndpoint;
  addAdminEndpoint: HandleAddAdminEndpoint;
  deleteEndpoint: HandleDeleteAdminEndpoint;
  getDictionaryEndpointTypes: HandleGetDictionaryEndpointTypes;
  onCancel: () => void;
  mode: 'add' | 'edit';
  currentEndpointName: string;
  isReadOnly: boolean;
  isLoadingTypesSelector: boolean;
}

type EndpointFormAllProps = EndpointFormProps &
  InjectedFormProps<{}, EndpointFormProps>;

const EndpointForm: React.FC<EndpointFormAllProps> = ({
  onCancel,
  handleSubmit,
  deleteEndpoint,
  updateAdminEndpoint,
  addAdminEndpoint,
  pristine,
  dirty,
  mode,
  currentEndpointName,
  isReadOnly,
  endpointTypesOptions,
  getDictionaryEndpointTypes,
  isLoadingTypesSelector,
}) => {
  React.useEffect(
    () => {
      getDictionaryEndpointTypes();
    },
    [getDictionaryEndpointTypes]
  );

  const isEditMode = React.useMemo(
    () => mode === 'edit',
    [mode]
  );

  const submitFormAction = React.useMemo(
    () => isEditMode ? updateAdminEndpoint : addAdminEndpoint,
    [isEditMode, updateAdminEndpoint, addAdminEndpoint]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitFormAction),
    [handleSubmit, submitFormAction]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <GeneralEndpointsInfo
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
              onClick={deleteEndpoint}
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
