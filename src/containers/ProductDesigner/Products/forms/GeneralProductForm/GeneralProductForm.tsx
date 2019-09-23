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

import { formNamesConst, iconNamesConst } from 'consts';

import { ProductGeneralInfo } from 'containers/ProductDesigner/Products/components';

import { HandleDeleteProduct, HandleGetProduct, HandleUpdateProduct } from 'store/domains';

interface GeneralProductFormProps extends ExternalSpinnerProps {
  onCancel?: () => void;
  updateProduct: HandleUpdateProduct;
  deleteProduct: HandleDeleteProduct;
  getProduct: HandleGetProduct;
  currentProductName: string;
}

type GeneralProductFormAllProps = GeneralProductFormProps &
  InjectedFormProps<{}, GeneralProductFormProps>;

const GeneralProductForm: React.FC<GeneralProductFormAllProps> = ({
  handleSubmit,
  onCancel,
  deleteProduct,
  updateProduct,
  getProduct,
  currentProductName,
  dirty,
  pristine,
  submitting,
}) => {
  React.useEffect(
    () => {
      getProduct();
    },
    [getProduct]
  );
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateProduct(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <ProductGeneralInfo isEditMode={true} />
      <Hr />
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          text="delete"
          iconName={iconNamesConst.DELETE}
          type="reset"
          withConfirmation={true}
          confirmationText={`Delete product "${currentProductName}"?`}
          onClick={deleteProduct}
        />
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          onCancel={onCancel}
          rightPosition={true}
          withCancelConfirmation={dirty}
          disabledOk={pristine || submitting}
        />
      </Flex>
    </form>
  );
};

export default reduxForm<{}, GeneralProductFormProps>({
  form: formNamesConst.GENERAL_PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(GeneralProductForm));
