import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { Hr, ISpinner, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { ProductDetails } from 'containers/ProductDesigner/Products/components';

import {
  HandleGetProductDetails,
  HandleUpdateProductDetails,
} from 'store';

import { ISelectValue } from 'types';

interface IProductDetailsForm extends ISpinner {
  onCancel?: () => void;
  productType: string;
  getProductDetails: HandleGetProductDetails;
  updateProductDetails: HandleUpdateProductDetails;
  isReadOnly: boolean;
  isUpdating: boolean;
  interestDistributionValue: ISelectValue;
  currentProductId: number;
}

type TProductDetailsForm = IProductDetailsForm & InjectedFormProps<{}, IProductDetailsForm>;

const ProductDetailsForm: React.FC<TProductDetailsForm> = ({
  handleSubmit,
  onCancel,
  productType,
  getProductDetails,
  updateProductDetails,
  dirty,
  pristine,
  interestDistributionValue,
  isReadOnly,
  isUpdating,
  currentProductId,
}) => {
  React.useEffect(
    () => {
      getProductDetails(currentProductId);
    },
    [getProductDetails, currentProductId]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(updateProductDetails),
    [handleSubmit, updateProductDetails]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <ProductDetails
        interestDistributionValue={interestDistributionValue}
        productType={productType}
        isReadOnly={isReadOnly}
        isUpdating={isUpdating}
      />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        withCancelConfirmation={dirty}
        hideOk={isReadOnly}
        disabledOk={pristine}
      />
    </form>
  );
};

export default reduxForm<{}, IProductDetailsForm>({
  form: formNamesConst.PRODUCT_DETAILS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(ProductDetailsForm));
