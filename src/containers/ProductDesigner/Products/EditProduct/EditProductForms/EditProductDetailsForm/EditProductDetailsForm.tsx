import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import { ProductDetails } from 'containers/ProductDesigner/Products/ProductComponents';

import {
  HandleDeleteProduct,
  HandleGetProductDetails,
  HandleUpdateProductDetails,
} from 'store/domains';

import { SelectValues } from 'types';

interface EditProductDetailsFormProps extends ExternalSpinnerProps {
  onCancel?: () => void;
  productType: SelectValues;
  deleteProduct: HandleDeleteProduct;
  currentProductId: number;
  getProductDetails: HandleGetProductDetails;
  updateProductDetails: HandleUpdateProductDetails;
}

type EditProductDetailsFormAllProps = EditProductDetailsFormProps &
  InjectedFormProps<{}, EditProductDetailsFormProps>;

const EditProductDetailsForm: React.FC<EditProductDetailsFormAllProps> = ({
  handleSubmit,
  onCancel,
  productType,
  deleteProduct,
  currentProductId,
  getProductDetails,
  updateProductDetails,
}) => {
  React.useEffect(
    () => {
      getProductDetails(currentProductId);
    },
    [getProductDetails, currentProductId]
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
      <Flex
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <OkCancelButtons
          okText="Save"
          cancelText="Cancel"
          onCancel={onCancel}
        />
        <Button
          text="delete"
          iconName="delete"
          type="reset"
          onClick={() => deleteProduct(currentProductId)}
        />
      </Flex>
    </form>
  );
};

export default reduxForm<{}, EditProductDetailsFormProps>({
  form: formNames.EDIT_PRODUCT_DETAILS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditProductDetailsForm));
