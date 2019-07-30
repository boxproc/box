import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import { ProductRules } from 'containers/ProductDesigner/Products/ProductComponents';

import {
  HandleDeleteProduct,
  HandleGetProductRules,
  HandleUpdateProductRules,
} from 'store/domains';

interface EditProductRulesFormProps extends ExternalSpinnerProps {
  onCancel?: () => void;
  deleteProduct: HandleDeleteProduct;
  currentProductId: number;
  getProductRules: HandleGetProductRules;
  updateProductRules: HandleUpdateProductRules;
}

type EditProductRulesFormAllProps = EditProductRulesFormProps &
  InjectedFormProps<{}, EditProductRulesFormProps>;

const EditProductRulesForm: React.FC<EditProductRulesFormAllProps> = ({
  handleSubmit,
  onCancel,
  deleteProduct,
  currentProductId,
  getProductRules,
  updateProductRules,
}) => {
  React.useEffect(
    () => {
      getProductRules(currentProductId);
    },
    [getProductRules, currentProductId]
  );
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateProductRules(data)),
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
})(withSpinner()(EditProductRulesForm));
