import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import {
  ExternalSpinnerProps,
  Hr,
  OkCancelButtons,
  withSpinner,
} from 'components';

import { formNamesConst } from 'consts';

import {
  HandleGetProductServices,
  HandleUpdateCardService,
} from 'store/domains';

import { Services } from 'containers/ProductDesigner/Products/components';
import { SelectValues } from 'types';

interface ServicesFormProps extends ExternalSpinnerProps {
  onCancel?: () => void;
  currentGroupId: number;
  currentInstitutionId: number;
  updateCardService: HandleUpdateCardService;
  productEndpointsServiceOptions: Array<SelectValues>;
  productInterfacesServiceOptions: Array<SelectValues>;
  getProductServices: HandleGetProductServices;
  isLoadingInterfaces: boolean;
  isLoadingEndpoints: boolean;
  isReadOnly: boolean;
}

type ServicesFormAllProps = ServicesFormProps &
  InjectedFormProps<{}, ServicesFormProps>;

const ServicesForm: React.FC<ServicesFormAllProps> = ({
  currentGroupId,
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
      id: currentGroupId,
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
        rightPosition={true}
        disabledOk={pristine}
        hideOk={isReadOnly}
      />
    </form>
  );
};

export default reduxForm<{}, ServicesFormProps>({
  form: formNamesConst.PRODUCT_SERVICES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(ServicesForm));
