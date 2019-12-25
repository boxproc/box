import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, OkCancelButtons, withSpinner } from 'components';

import { actionTypesCodeKeys, eventTypesCodeKeys, formNamesConst } from 'consts';

import { ProductRules } from 'containers/ProductDesigner/Products/components';

import { HandleGetProductRule, HandleUpdateProductRules } from 'store/domains';

import { SelectValues } from 'types';

interface RulesFormProps extends ExternalSpinnerProps {
  onCancel?: () => void;
  getProductRule: HandleGetProductRule;
  updateProductRules: HandleUpdateProductRules;
  isReadOnly: boolean;
  actionTypesOptions: Array<SelectValues>;
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
  actionTypesOptions,
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

  const actionTypesOptionsPrepared = React.useMemo(
    () => {
      let filteredActionTypes;

      if (eventId && (eventId.value === eventTypesCodeKeys.ACCOUNT_CREATE
        || eventId.value === eventTypesCodeKeys.DAILY_SETTLEMENT)) {

        filteredActionTypes = actionTypesOptions
          .filter(el => el.value !== actionTypesCodeKeys.APPROVE_DENY
            && el.value !== actionTypesCodeKeys.SET_APR);

        if (actionType) {
          if (actionType.value === actionTypesCodeKeys.APPROVE_DENY
            || actionType.value === actionTypesCodeKeys.SET_APR) {
            change('actionType', filteredActionTypes[0]);
          }
        }

      } else if (eventId && (eventId.value === eventTypesCodeKeys.ACCOUNT_CLOSE)) {

        filteredActionTypes = actionTypesOptions
          .filter(el => el.value !== actionTypesCodeKeys.APPROVE_DENY
            && el.value !== actionTypesCodeKeys.SET_APR
            && el.value !== actionTypesCodeKeys.ADD_REWARD
            && el.value !== actionTypesCodeKeys.ADD_FEE);

        if (actionType) {
          if (actionType.value === actionTypesCodeKeys.APPROVE_DENY
            || actionType.value === actionTypesCodeKeys.SET_APR
            || actionType.value === actionTypesCodeKeys.ADD_REWARD
            || actionType.value === actionTypesCodeKeys.ADD_FEE) {
            change('actionType', filteredActionTypes[0]);
          }
        }

      } else {
        filteredActionTypes = actionTypesOptions;
      }

      return filteredActionTypes;
    },
    [eventId, actionType, actionTypesOptions, change]
  );

  const handleGetRule = React.useCallback(
    (value: SelectValues, val: SelectValues, prevVal: SelectValues, fieldName: string) => {
      if (value && (eventId || actionType)) {
        change(fieldName, value);
        setTimeout(() => getProductRule(), 50);
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
        actionTypesOptions={actionTypesOptionsPrepared}
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
