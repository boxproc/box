import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import {
  ProductGeneralInfo,
} from 'containers/ProductDesigner/Products/ProductComponents';

import { HandleDeleteProduct, HandleUpdateProduct } from 'store/domains';

import { SelectValues } from 'types';

interface EditGeneralProductFormProps {
  onCancel?: () => void;
  productTypeValue?: SelectValues;
  updateProduct: HandleUpdateProduct;
  deleteProduct: HandleDeleteProduct;
  currentProductId: number;
}

type EditGeneralProductFormAllProps = EditGeneralProductFormProps &
  InjectedFormProps<{}, EditGeneralProductFormProps>;

const EditGeneralProductForm: React.FC<EditGeneralProductFormAllProps> = ({
  handleSubmit,
  onCancel,
  deleteProduct,
  currentProductId,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
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

export default reduxForm<{}, EditGeneralProductFormProps>({
  form: formNames.EDIT_GENERAL_PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(EditGeneralProductForm);
