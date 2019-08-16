import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';

import { formNames } from 'consts';

import { ProductRules } from 'containers/ProductDesigner/Products/components';

import {
  HandleGetProductRules,
  HandleUpdateProductRules,
} from 'store/domains';

import { SelectValues } from 'types';

interface ProductRulesForm extends ExternalSpinnerProps {
  onCancel?: () => void;
  currentProductId: number;
  getProductRules: HandleGetProductRules;
  updateProductRules: HandleUpdateProductRules;
  eventValue: SelectValues;
}

type EditProductRulesFormAllProps = ProductRulesForm &
  InjectedFormProps<{}, ProductRulesForm>;

const EditProductRulesForm: React.FC<EditProductRulesFormAllProps> = ({
  handleSubmit,
  onCancel,
  currentProductId,
  getProductRules,
  updateProductRules,
  eventValue,
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
      <ProductRules
        eventValue={eventValue}
      />
      <OkCancelButtons
        okText="Save Rules"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
      />
    </form>
  );
};

export default reduxForm<{}, ProductRulesForm>({
  form: formNames.PRODUCT_RULES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditProductRulesForm));
