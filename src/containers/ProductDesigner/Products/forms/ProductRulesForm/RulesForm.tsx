import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components';

import { actionTypesCodeKeys, eventTypesCodeKeys, formNamesConst } from 'consts';

import { ProductRules } from 'containers/ProductDesigner/Products/components';

import { HandleGetProductRule, HandleUpdateProductRules } from 'store/domains';

import { SelectValue } from 'types';

interface RulesFormProps {
  onCancel?: () => void;
  getProductRule: HandleGetProductRule;
  updateProductRules: HandleUpdateProductRules;
  isReadOnly: boolean;
  actionTypesOptions: Array<SelectValue>;
  initialActionType: string | number;
  rulesValues: {
    eventId: SelectValue;
    actionType: SelectValue;
  };
  isLoading: boolean;
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
  initialActionType,
  isLoading,
  isReadOnly,
}) => {
  const { eventId, actionType } = rulesValues;

  React.useEffect(
    () => {
      getProductRule();
    },
    [getProductRule]
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
    (fieldName, value) => {
      if (value) {
        change(fieldName, value);

        if (fieldName === 'eventId' && !actionType) {
          change('actionType', actionTypesOptionsPrepared[0]);
        }

        getProductRule();
      }
    },
    [getProductRule, actionType, change, actionTypesOptionsPrepared]
  );

  const handleGetRuleByChange = React.useCallback(
    (value: SelectValue, val: SelectValue, prevVal: SelectValue, fieldName: string) => {
      handleGetRule(fieldName, value);
    },
    [handleGetRule]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(updateProductRules),
    [handleSubmit, updateProductRules]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <ProductRules
        eventValue={eventId}
        onChangeValues={handleGetRuleByChange}
        changeFormField={change}
        handleGetRule={handleGetRule}
        actionTypesOptions={actionTypesOptionsPrepared}
        initialActionType={initialActionType}
        isLoading={isLoading}
        isReadOnly={isReadOnly}
        dirty={dirty}
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
})(RulesForm);
