import React from 'react';

import { rulesInitialFormValues } from 'containers/ProductDesigner/Products/consts';
import RulesForm from './RulesForm';

import { actionTypesConst, eventTypesCodeKeys, productTypesConst } from 'consts';

import { HandleGetProductRule, HandleUpdateProductRules, ProductRulesItem } from 'store';

import { ISelectValue } from 'types';

interface IProductRulesForm {
  onCancel?: () => void;
  getProductRule: HandleGetProductRule;
  updateProductRules: HandleUpdateProductRules;
  currentProductScript: string;
  initialValues: ProductRulesItem;
  isLoading: boolean;
  isReadOnly: boolean;
  actionTypesOptions: Array<ISelectValue>;
  currentProductType: string | number;
  rulesValues: {
    eventId: ISelectValue;
    actionType: ISelectValue;
  };
}

const ProductRulesForm: React.FC<IProductRulesForm> = ({
  onCancel,
  getProductRule,
  updateProductRules,
  rulesValues,
  initialValues,
  isLoading,
  currentProductScript,
  isReadOnly,
  actionTypesOptions,
  currentProductType,
}) => {
  const [initialScript, setInitialScript] = React.useState(null);

  const { eventId, actionType } = rulesValues;

  const isRevolvingCredit = React.useMemo(
    () => currentProductType === productTypesConst.REVOLVING_CREDIT,
    [currentProductType]
  );

  React.useEffect(
    () => {
      if (eventId && actionType) {
        if (eventId.value === eventTypesCodeKeys.TRANSACTION
          && actionType.value === actionTypesConst.APPROVE_DENY) {
          setInitialScript(rulesInitialFormValues.transactionApproveDeny);
        } else if (eventId.value === eventTypesCodeKeys.TRANSACTION
          && actionType.value === actionTypesConst.SET_APR) {
          setInitialScript(rulesInitialFormValues.transactionSetTransactionApr);
        } else {
          setInitialScript(null);
        }
      }
    },
    [getProductRule, eventId, actionType, initialScript]
  );

  const initialActionType = React.useMemo(
    () => initialValues.actionType && initialValues.actionType.value,
    [initialValues]
  );

  const script = React.useMemo(
    () => currentProductScript ? currentProductScript : initialScript,
    [currentProductScript, initialScript]
  );

  return (
    <RulesForm
      initialValues={{
        ...initialValues,
        script,
      }}
      initialActionType={initialActionType}
      isLoading={isLoading}
      onCancel={onCancel}
      getProductRule={getProductRule}
      updateProductRules={updateProductRules}
      rulesValues={rulesValues}
      actionTypesOptions={actionTypesOptions}
      isRevolvingCredit={isRevolvingCredit}
      isReadOnly={isReadOnly}
    />
  );
};

export default ProductRulesForm;
