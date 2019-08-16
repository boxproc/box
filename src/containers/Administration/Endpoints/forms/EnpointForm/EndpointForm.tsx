import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import {
  HandleAddAdminEndpoint,
  HandleDeleteAdminEndpoint,
  HandleUpdateAdminEndpoint
} from 'store/domains';
import { SelectValues } from 'types';
import GeneralEndpointsInfo from '../../components/GeneralEndpointsInfo';

interface EndpointFormProps extends ExternalSpinnerProps {
  institutionsOptions: Array<SelectValues>;
  updateAdminEndpoint: HandleUpdateAdminEndpoint;
  addAdminEndpoint: HandleAddAdminEndpoint;
  currentEndpointId: number;
  deleteEndpoint: HandleDeleteAdminEndpoint;
  onCancel: () => void;
  mode: 'add' | 'edit';
}

type EndpointFormAllProps = EndpointFormProps &
  InjectedFormProps<{}, EndpointFormProps>;

const EndpointForm: React.FC<EndpointFormAllProps> = ({
  onCancel,
  handleSubmit,
  currentEndpointId,
  deleteEndpoint,
  updateAdminEndpoint,
  addAdminEndpoint,
  institutionsOptions,
  mode,
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
      <Hr/>
      {isEditMode && (
        <Button
          text="delete"
          iconName="delete"
          type="reset"
          withConfirmation={true}
          onClick={() => deleteEndpoint(currentEndpointId)}
        />
        )}
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
      />
    </form >
  );
};

export default reduxForm<{}, EndpointFormProps>({
  form: formNames.ADMIN_ENDPOINT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EndpointForm));
