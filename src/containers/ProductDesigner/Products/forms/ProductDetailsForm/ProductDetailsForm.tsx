import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

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
  isReadOnly: boolean;
  interestDistributionEditorValue: SelectValues;
}

type ProductDetailsFormAllProps = ProductDetailsFormProps &
  InjectedFormProps<{}, ProductDetailsFormProps>;

const ProductDetailsForm: React.FC<ProductDetailsFormAllProps> = ({
  handleSubmit,
  onCancel,
  productType,
  getProductDetails,
  updateProductDetails,
  dirty,
  interestDistributionEditorValue,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getProductDetails();
    },
    [getProductDetails]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(updateProductDetails),
    [handleSubmit, updateProductDetails]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <ProductDetails
        interestDistributionEditorValue={interestDistributionEditorValue}
        productType={productType && productType.value}
        isReadOnly={isReadOnly}
      />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={dirty}
        hideOk={isReadOnly}
      />
    </form>
  );
};

export default reduxForm<{}, ProductDetailsFormProps>({
  form: formNamesConst.PRODUCT_DETAILS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(ProductDetailsForm));
