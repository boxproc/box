import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Hr, ISpinner, OkCancelButtons, withSpinner } from 'components';
import { formNamesConst } from 'consts';
import { Services } from 'containers/ProductDesigner/Products/components';
import { THandleGetProductServices, THandleUpdateProductServices } from 'store';
import { ISelectValue } from 'types';

interface IServicesForm extends ISpinner {
  currentInstitutionId: number;
  currentUsersGroupId: number;
  getProductServices: THandleGetProductServices;
  isLoadingEndpoints: boolean;
  isLoadingInterfaces: boolean;
  isReadOnly: boolean;
  onCancel?: () => void;
  servicesEndpointsOptions: Array<ISelectValue>;
  servicesInterfacesOptions: Array<ISelectValue>;
  updateProductServices: THandleUpdateProductServices;
}

type TServicesForm = IServicesForm & InjectedFormProps<{}, IServicesForm>;

const ServicesForm: React.FC<TServicesForm> = ({
  currentInstitutionId,
  currentUsersGroupId,
  dirty,
  getProductServices,
  handleSubmit,
  isLoadingEndpoints,
  isLoadingInterfaces,
  isReadOnly,
  onCancel,
  pristine,
  servicesEndpointsOptions,
  servicesInterfacesOptions,
  updateProductServices,
}) => {
  React.useEffect(
    () => {
      getProductServices(currentInstitutionId);
    },
    [getProductServices, currentInstitutionId]
  );

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
        isLoadingInterfaces={isLoadingInterfaces}
        isLoadingEndpoints={isLoadingEndpoints}
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
