import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import {
  Button,
  ExternalSpinnerProps,
  Hr,
  OkCancelButtons,
  withSpinner,
} from 'components';

import { formNames } from 'consts';

import { GeneralEndpointsInfo } from 'containers/Administration/Endpoints/components';

import {
  HandleAddAdminEndpoint,
  HandleDeleteAdminEndpoint,
  HandleUpdateAdminEndpoint
} from 'store/domains';

import { SelectValues } from 'types';

interface EndpointFormProps extends ExternalSpinnerProps {
  institutionsOptions: Array<SelectValues>;
  updateAdminEndpoint: HandleUpdateAdminEndpoint;
  addAdminEndpoint: HandleAddAdminEndpoint;
  deleteEndpoint: HandleDeleteAdminEndpoint;
  isDirty: boolean;
  onCancel: () => void;
  mode: 'add' | 'edit';
  currentEndpointName: string;
}

type EndpointFormAllProps = EndpointFormProps &
  InjectedFormProps<{}, EndpointFormProps>;

const EndpointForm: React.FC<EndpointFormAllProps> = ({
  onCancel,
  handleSubmit,
  deleteEndpoint,
  updateAdminEndpoint,
  addAdminEndpoint,
  institutionsOptions,
  isDirty,
  mode,
  currentEndpointName,
}) => {
  const isEditMode = mode === 'edit';
  const action = isEditMode ? updateAdminEndpoint : addAdminEndpoint;

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => action(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <GeneralEndpointsInfo
        institutionsOptions={institutionsOptions}
        isEditMode={isEditMode}
      />
      <Hr />
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <div>
          {isEditMode && (
            <Button
              text="delete"
              iconName="delete"
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
          disabledOk={!isDirty}
          withCancelConfirmation={isDirty}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, EndpointFormProps>({
  form: formNames.ADMIN_ENDPOINT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EndpointForm));
