import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, OkCancelButtons, withSpinner } from 'components';

import { formNames } from 'consts';

import { ProductRules } from 'containers/ProductDesigner/Products/components';

import {
  HandleGetProductRules,
  HandleGetRuleByActionType,
  HandleGetRuleByEvent,
  HandleUpdateProductRules,
} from 'store/domains';

import { SelectValues } from 'types';

interface ProductRulesForm extends ExternalSpinnerProps {
  onCancel?: () => void;
  getProductRules: HandleGetProductRules;
  updateProductRules: HandleUpdateProductRules;
  eventValue: SelectValues;
  actionTypeValue: SelectValues;
  isDirty: boolean;
  getRuleByEvent: HandleGetRuleByEvent;
  getRuleByActionType: HandleGetRuleByActionType;
}

type EditProductRulesFormAllProps = ProductRulesForm &
  InjectedFormProps<{}, ProductRulesForm>;

const EditProductRulesForm: React.FC<EditProductRulesFormAllProps> = ({
  handleSubmit,
  onCancel,
  getProductRules,
  updateProductRules,
  eventValue,
  actionTypeValue,
  isDirty,
  getRuleByEvent,
  getRuleByActionType,
}) => {
  React.useEffect(
    () => {
      getProductRules();
    },
    [getProductRules]
  );

  React.useEffect(
    () => {
      if (actionTypeValue) {
        getRuleByActionType(actionTypeValue.value);
      }
    },
    [actionTypeValue, getRuleByActionType]
  );

  React.useEffect(
    () => {
      if (eventValue) {
        getRuleByEvent(eventValue.value);
      }
    },
    [eventValue, getRuleByEvent]
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
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={isDirty}
        disabledOk={!isDirty}
      />
    </form>
  );
};

export default reduxForm<{}, ProductRulesForm>({
  form: formNames.PRODUCT_RULES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditProductRulesForm));
