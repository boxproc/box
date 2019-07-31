import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';

import {
  ProductGeneralInfo,
} from 'containers/ProductDesigner/Products/ProductComponents';

import { HandleDeleteProduct, HandleGetProduct, HandleUpdateProduct } from 'store/domains';

interface EditGeneralProductFormProps extends ExternalSpinnerProps {
  onCancel?: () => void;
  updateProduct: HandleUpdateProduct;
  deleteProduct: HandleDeleteProduct;
  getProduct: HandleGetProduct;
  currentProductId: number;
}

type EditGeneralProductFormAllProps = EditGeneralProductFormProps &
  InjectedFormProps<{}, EditGeneralProductFormProps>;

const EditGeneralProductForm: React.FC<EditGeneralProductFormAllProps> = ({
  handleSubmit,
  onCancel,
  deleteProduct,
  currentProductId,
  updateProduct,
  getProduct,
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
        <OkCancelButtons
          okText="Save Product"
          cancelText="Close"
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

export default reduxForm<{}, EditGeneralProductFormProps>({
  form: formNames.EDIT_GENERAL_PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditGeneralProductForm));
