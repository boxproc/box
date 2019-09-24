import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { ProductRules } from 'containers/ProductDesigner/Products/components';

import { HandleGetProductRule, HandleUpdateProductRules } from 'store/domains';

import { SelectValues } from 'types';

interface ProductRulesForm extends ExternalSpinnerProps {
  onCancel?: () => void;
  getProductRule: HandleGetProductRule;
  updateProductRules: HandleUpdateProductRules;
  rulesValues: {
    eventId: SelectValues;
    actionType: SelectValues;
  };
}

type EditProductRulesFormAllProps = ProductRulesForm &
  InjectedFormProps<{}, ProductRulesForm>;

const EditProductRulesForm: React.FC<EditProductRulesFormAllProps> = ({
  handleSubmit,
  onCancel,
  getProductRule,
  updateProductRules,
  dirty,
  pristine,
  submitting,
  rulesValues,
  change,
}) => {
  const { eventId, actionType } = rulesValues;

  React.useEffect(
    () => {
      if (!eventId && !actionType) {
        getProductRule();
      }
    },
    [getProductRule, eventId, actionType]
  );

  const handleGetRule = React.useCallback(
    () => getProductRule(),
    [getProductRule]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(updateProductRules),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <ProductRules
        eventValue={eventId}
        onChangeValues={handleGetRule}
        changeFormField={change}
      />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={dirty}
        disabledOk={pristine || submitting}
      />
    </form>
  );
};

export default reduxForm<{}, ProductRulesForm>({
  form: formNamesConst.PRODUCT_RULES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditProductRulesForm));
