import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import {
  ProductDetails,
} from 'containers/ProductDesigner/Products/ProductComponents';

import { HandleDeleteProduct } from 'store/domains';

import { SelectValues } from 'types';

interface EditProductDetailsFormProps {
  onCancel?: () => void;
  productTypeValue: SelectValues;
  deleteProduct: HandleDeleteProduct;
  currentProductId: number;
}

type EditProductDetailsFormAllProps = EditProductDetailsFormProps &
  InjectedFormProps<{}, EditProductDetailsFormProps>;

const EditProductDetailsForm: React.FC<EditProductDetailsFormAllProps> = ({
  handleSubmit,
  onCancel,
  productTypeValue,
  deleteProduct,
  currentProductId,
}) => {
  React.useEffect(
    () => {
      console.log('--- load details');
    },
    []
  );
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <ProductDetails
        productTypeValue={productTypeValue}
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
})(EditProductDetailsForm);
