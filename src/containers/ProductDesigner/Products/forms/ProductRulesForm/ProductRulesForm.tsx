import React from 'react';

import { rulesInitialFormValues } from 'containers/ProductDesigner/Products/consts';
import RulesForm from './RulesForm';

import { actionTypesCodeKeys, eventTypesCodeKeys, productTypesCodes } from 'consts';

import { HandleGetProductRule, HandleUpdateProductRules, ProductRulesItem } from 'store/domains';

import { SelectValue } from 'types';

interface ProductRulesFormProps {
  onCancel?: () => void;
  getProductRule: HandleGetProductRule;
  updateProductRules: HandleUpdateProductRules;
  currentProductScript: string;
  initialValues: ProductRulesItem;
  isLoading: boolean;
  isReadOnly: boolean;
  actionTypesOptions: Array<SelectValue>;
  currentProductType: SelectValue;
  rulesValues: {
    eventId: SelectValue;
    actionType: SelectValue;
  };
}

const ProductRulesForm: React.FC<ProductRulesFormProps> = ({
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
    () => {
      if (!currentProductType) {
        return false;
      }

      return currentProductType.value === productTypesCodes.REVOLVING_CREDIT;
    },
    [currentProductType]
  );

  React.useEffect(
    () => {
      if (eventId && actionType) {
        if (eventId.value === eventTypesCodeKeys.TRANSACTION
          && actionType.value === actionTypesCodeKeys.APPROVE_DENY) {
          setInitialScript(rulesInitialFormValues.transactionApproveDeny);
        } else if (eventId.value === eventTypesCodeKeys.TRANSACTION
          && actionType.value === actionTypesCodeKeys.SET_APR) {
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
