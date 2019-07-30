import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import { ProductRules } from 'containers/ProductDesigner/Products/ProductComponents';

import { HandleDeleteProduct, HandleUpdateProduct } from 'store/domains';

import { SelectValues } from 'types';

interface EditProductRulesFormProps {
  onCancel?: () => void;
  productTypeValue?: SelectValues;
  updateProduct?: HandleUpdateProduct;
  deleteProduct?: HandleDeleteProduct;
  currentProductId?: number;
}

type EditProductRulesFormAllProps = EditProductRulesFormProps &
  InjectedFormProps<{}, EditProductRulesFormProps>;

const EditProductRulesForm: React.FC<EditProductRulesFormAllProps> = ({
  handleSubmit,
  onCancel,
  deleteProduct,
  currentProductId,
}) => {
  React.useEffect(
    () => {
      console.log('--- load rules');
    },
    []
  );
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <ProductRules />
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

export default reduxForm<{}, EditProductRulesFormProps>({
  form: formNames.EDIT_PRODUCT_RULES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(EditProductRulesForm);
