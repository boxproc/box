import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components';

import { actionTypesConst, eventTypesCodeKeys, formNamesConst } from 'consts';

import { ProductRules } from 'containers/ProductDesigner/Products/components';

import { HandleGetProductRule, HandleUpdateProductRules } from 'store';

import { ISelectValue } from 'types';

interface IRulesForm {
  onCancel?: () => void;
  getProductRule: HandleGetProductRule;
  updateProductRules: HandleUpdateProductRules;
  isReadOnly: boolean;
  actionTypesOptions: Array<ISelectValue>;
  initialActionType: string | number;
  isRevolvingCredit: boolean;
  rulesValues: {
    eventId: ISelectValue;
    actionType: ISelectValue;
  };
  isLoading: boolean;
}

type TRulesForm = IRulesForm & InjectedFormProps<{}, IRulesForm>;

const RulesForm: React.FC<TRulesForm> = ({
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
  isRevolvingCredit,
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
      const isDailySettlement = eventId && (eventId.value === eventTypesCodeKeys.DAILY_SETTLEMENT);
      const isAccountCreate = eventId && (eventId.value === eventTypesCodeKeys.ACCOUNT_CREATE);
      const isAccountClose = eventId && (eventId.value === eventTypesCodeKeys.ACCOUNT_CLOSE);

      const isApproveDeny = actionType && (actionType.value === actionTypesConst.APPROVE_DENY);
      const isSetApr = actionType && (actionType.value === actionTypesConst.SET_APR);
      const isAddReward = actionType && (actionType.value === actionTypesConst.ADD_REWARD);
      const isAddFee = actionType && (actionType.value === actionTypesConst.ADD_FEE);

      let filteredActionTypes;

      if (isAccountCreate || isDailySettlement) {

        filteredActionTypes = actionTypesOptions
          .filter(el => el.value !== actionTypesConst.APPROVE_DENY
            && el.value !== actionTypesConst.SET_APR);

        if (actionType) {
          if (isApproveDeny || isSetApr) {
            change('actionType', filteredActionTypes[0]);
          }
        }

      } else if (isAccountClose) {

        filteredActionTypes = actionTypesOptions
          .filter(el => el.value !== actionTypesConst.APPROVE_DENY
            && el.value !== actionTypesConst.SET_APR
            && el.value !== actionTypesConst.ADD_REWARD
            && el.value !== actionTypesConst.ADD_FEE);

        if (actionType) {
          if (isApproveDeny || isSetApr || isAddReward || isAddFee) {
            change('actionType', filteredActionTypes[0]);
          }
        }

      } else {
        filteredActionTypes = actionTypesOptions;
      }

      if (!isRevolvingCredit || !isDailySettlement) {
        filteredActionTypes = filteredActionTypes
          .filter(el => el.value !== actionTypesConst.MINIMUM_REPAYMENT_CALC);
      }

      return filteredActionTypes;
    },
    [eventId, actionType, actionTypesOptions, change, isRevolvingCredit]
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
    (value: ISelectValue, val: ISelectValue, prevVal: ISelectValue, fieldName: string) => {
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
        withCancelConfirmation={dirty}
        disabledOk={pristine}
        hideOk={isReadOnly}
      />
    </form>
  );
};

export default reduxForm<{}, IRulesForm>({
  form: formNamesConst.PRODUCT_RULES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(RulesForm);
