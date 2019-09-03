import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';

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
  currentProductId: number;
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
  currentProductId,
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
      getProductRules(currentProductId);
    },
    [getProductRules, currentProductId]
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
      />
    </form>
  );
};

export default reduxForm<{}, ProductRulesForm>({
  form: formNames.PRODUCT_RULES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditProductRulesForm));
