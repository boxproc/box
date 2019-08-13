import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import { ProductRules } from 'containers/ProductDesigner/Products/components';

import {
  HandleGetProductRules,
  HandleUpdateProductRules,
} from 'store/domains';

interface ProductRulesForm extends ExternalSpinnerProps {
  onCancel?: () => void;
  currentProductId: number;
  getProductRules: HandleGetProductRules;
  updateProductRules: HandleUpdateProductRules;
}

type EditProductRulesFormAllProps = ProductRulesForm &
  InjectedFormProps<{}, ProductRulesForm>;

const EditProductRulesForm: React.FC<EditProductRulesFormAllProps> = ({
  handleSubmit,
  onCancel,
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
          okText="Save Rules"
          cancelText="Close"
          onCancel={onCancel}
        />
      </Flex>
    </form>
  );
};

export default reduxForm<{}, ProductRulesForm>({
  form: formNames.PRODUCT_RULES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditProductRulesForm));
