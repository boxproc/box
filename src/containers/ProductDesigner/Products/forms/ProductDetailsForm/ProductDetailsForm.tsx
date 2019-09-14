import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNames } from 'consts';

import { ProductDetails } from 'containers/ProductDesigner/Products/components';

import {
  HandleGetProductDetails,
  HandleUpdateProductDetails,
} from 'store/domains';

import { SelectValues } from 'types';

interface ProductDetailsFormProps extends ExternalSpinnerProps {
  onCancel?: () => void;
  productType: SelectValues;
  getProductDetails: HandleGetProductDetails;
  updateProductDetails: HandleUpdateProductDetails;
  isDirty: boolean;
}

type ProductDetailsFormAllProps = ProductDetailsFormProps &
  InjectedFormProps<{}, ProductDetailsFormProps>;

const ProductDetailsForm: React.FC<ProductDetailsFormAllProps> = ({
  handleSubmit,
  onCancel,
  productType,
  getProductDetails,
  updateProductDetails,
  isDirty,
}) => {
  React.useEffect(
    () => {
      getProductDetails();
    },
    [getProductDetails]
  );
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateProductDetails(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <ProductDetails
        productType={productType && productType.value}
      />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={isDirty}
      />
    </form>
  );
};

export default reduxForm<{}, ProductDetailsFormProps>({
  form: formNames.PRODUCT_DETAILS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(ProductDetailsForm));
