import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { Hr, ISpinner, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import {
  HandleGetProductServices,
  HandleUpdateCardService,
} from 'store';

import { Services } from 'containers/ProductDesigner/Products/components';
import { ISelectValue } from 'types';

interface IServicesForm extends ISpinner {
  onCancel?: () => void;
  currentUsersGroupId: number;
  currentInstitutionId: number;
  updateCardService: HandleUpdateCardService;
  productEndpointsServiceOptions: Array<ISelectValue>;
  productInterfacesServiceOptions: Array<ISelectValue>;
  getProductServices: HandleGetProductServices;
  isLoadingInterfaces: boolean;
  isLoadingEndpoints: boolean;
  isReadOnly: boolean;
}

type TServicesForm = IServicesForm & InjectedFormProps<{}, IServicesForm>;

const ServicesForm: React.FC<TServicesForm> = ({
  currentUsersGroupId,
  currentInstitutionId,
  updateCardService,
  handleSubmit,
  onCancel,
  productEndpointsServiceOptions,
  productInterfacesServiceOptions,
  getProductServices,
  isLoadingInterfaces,
  isLoadingEndpoints,
  dirty,
  pristine,
  isReadOnly,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateCardService({
      ...data,
      id: currentUsersGroupId,
    })),
    [handleSubmit, updateCardService]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <Services
        productEndpointsServiceOptions={productEndpointsServiceOptions}
        productInterfacesServiceOptions={productInterfacesServiceOptions}
        getProductServices={getProductServices}
        isLoadingInterfaces={isLoadingInterfaces}
        isLoadingEndpoints={isLoadingEndpoints}
        currentInstitutionId={currentInstitutionId}
        isReadOnly={isReadOnly}
      />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        withCancelConfirmation={dirty}
        onCancel={onCancel}
        disabledOk={pristine}
        hideOk={isReadOnly}
      />
    </form>
  );
};

export default reduxForm<{}, IServicesForm>({
  form: formNamesConst.PRODUCT_SERVICES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(ServicesForm));
