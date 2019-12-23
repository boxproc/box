import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { ProductRules } from 'containers/ProductDesigner/Products/components';

import { HandleGetProductRule, HandleUpdateProductRules } from 'store/domains';

import { SelectValues } from 'types';

interface RulesFormProps extends ExternalSpinnerProps {
  onCancel?: () => void;
  getProductRule: HandleGetProductRule;
  updateProductRules: HandleUpdateProductRules;
  isReadOnly: boolean;
  rulesValues: {
    eventId: SelectValues;
    actionType: SelectValues;
  };
}

type RulesFormPropsAllProps = RulesFormProps &
  InjectedFormProps<{}, RulesFormProps>;

const RulesForm: React.FC<RulesFormPropsAllProps> = ({
  handleSubmit,
  onCancel,
  getProductRule,
  updateProductRules,
  dirty,
  pristine,
  rulesValues,
  change,
  isReadOnly,
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
    (value: SelectValues, val: SelectValues, prevVal: SelectValues, fieldName: string) => {
      if (value && (eventId || actionType)) {
        change(fieldName, value);
        getProductRule();
      }
    },
    [getProductRule, change, eventId, actionType]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(updateProductRules),
    [handleSubmit, updateProductRules]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <ProductRules
        eventValue={eventId}
        onChangeValues={handleGetRule}
        changeFormField={change}
        isReadOnly={isReadOnly}
      />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={dirty}
        disabledOk={pristine}
        hideOk={isReadOnly}
      />
    </form>
  );
};

export default reduxForm<{}, RulesFormProps>({
  form: formNamesConst.PRODUCT_RULES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(RulesForm));
