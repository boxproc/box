import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Delimiter';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';

import { formNames } from 'consts';

import { ProductGeneralInfo } from 'containers/ProductDesigner/Products/components';

import { HandleDeleteProduct, HandleGetProduct, HandleUpdateProduct } from 'store/domains';

interface GeneralProductFormProps extends ExternalSpinnerProps {
  onCancel?: () => void;
  updateProduct: HandleUpdateProduct;
  deleteProduct: HandleDeleteProduct;
  getProduct: HandleGetProduct;
  currentProductName: string;
  isDirty: boolean;
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
  isDirty,
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
          iconName="delete"
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
          withCancelConfirmation={isDirty}
          disabledOk={!isDirty}
        />
      </Flex>
    </form>
  );
};

export default reduxForm<{}, GeneralProductFormProps>({
  form: formNames.GENERAL_PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(GeneralProductForm));
