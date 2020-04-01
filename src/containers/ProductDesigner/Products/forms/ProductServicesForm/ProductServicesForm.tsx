import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Hr, ISpinner, OkCancelButtons, withSpinner } from 'components';
import { formNamesConst } from 'consts';
import { Services } from 'containers/ProductDesigner/Products/components';
import { THandleGetProductServices, THandleUpdateProductServices } from 'store';
import { ISelectValue } from 'types';

interface IServicesForm extends ISpinner {
  onCancel?: () => void;
  currentUsersGroupId: number;
  currentInstitutionId: number;
  updateProductServices: THandleUpdateProductServices;
  servicesEndpointsOptions: Array<ISelectValue>;
  servicesInterfacesOptions: Array<ISelectValue>;
  getProductServices: THandleGetProductServices;
  isLoadingInterfaces: boolean;
  isLoadingEndpoints: boolean;
  isReadOnly: boolean;
}

type TServicesForm = IServicesForm & InjectedFormProps<{}, IServicesForm>;

const ServicesForm: React.FC<TServicesForm> = ({
  currentUsersGroupId,
  currentInstitutionId,
  updateProductServices,
  handleSubmit,
  onCancel,
  servicesEndpointsOptions,
  servicesInterfacesOptions,
  getProductServices,
  isLoadingInterfaces,
  isLoadingEndpoints,
  dirty,
  pristine,
  isReadOnly,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateProductServices({
      ...data,
      id: currentUsersGroupId,
    })),
    [handleSubmit, updateProductServices]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <Services
        servicesEndpointsOptions={servicesEndpointsOptions}
        servicesInterfacesOptions={servicesInterfacesOptions}
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
