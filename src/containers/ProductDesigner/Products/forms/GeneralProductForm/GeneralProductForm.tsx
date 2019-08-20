import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';

import {
  ProductGeneralInfo,
} from 'containers/ProductDesigner/Products/components';

import { HandleDeleteProduct, HandleGetProduct, HandleUpdateProduct } from 'store/domains';

interface GeneralProductFormProps extends ExternalSpinnerProps {
  onCancel?: () => void;
  updateProduct: HandleUpdateProduct;
  deleteProduct: HandleDeleteProduct;
  getProduct: HandleGetProduct;
  currentProductId: number;
  currentProductName: string;
  isDirty: boolean;
}

type GeneralProductFormAllProps = GeneralProductFormProps &
  InjectedFormProps<{}, GeneralProductFormProps>;

const GeneralProductForm: React.FC<GeneralProductFormAllProps> = ({
  handleSubmit,
  onCancel,
  deleteProduct,
  currentProductId,
  updateProduct,
  getProduct,
  currentProductName,
  isDirty,
}) => {
  React.useEffect(
    () => {
      getProduct(currentProductId);
    },
    [getProduct, currentProductId]
  );
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateProduct(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <ProductGeneralInfo
        isDisabledStatus={true}
        isDisabledProductTypes={true}
        isDisabledInstitutions={true}
      />
      <Hr />
      <Flex
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Button
          text="delete"
          iconName="delete"
          type="reset"
          withConfirmation={true}
          confirmationText={`Delete "${currentProductName}" product?`}
          onClick={() => deleteProduct(currentProductId)}
        />
        <OkCancelButtons
          okText="Save Product"
          cancelText="Close"
          onCancel={onCancel}
          rightPosition={true}
          withCancelConfirmation={isDirty}
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
