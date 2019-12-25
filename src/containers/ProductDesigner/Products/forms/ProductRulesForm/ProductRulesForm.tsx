import React from 'react';

import { ExternalSpinnerProps, withSpinner } from 'components';
import { rulesInitialFormValues } from 'containers/ProductDesigner/Products/consts';
import RulesForm from './RulesForm';

import { actionTypesCodeKeys, eventTypesCodeKeys } from 'consts';

import { HandleGetProductRule, HandleUpdateProductRules } from 'store/domains';

import { SelectValues } from 'types';

interface ProductRulesFormProps extends ExternalSpinnerProps {
  onCancel?: () => void;
  getProductRule: HandleGetProductRule;
  updateProductRules: HandleUpdateProductRules;
  currentProductScript: string;
  initialValues: any;
  isLoading: boolean;
  isReadOnly: boolean;
  actionTypesOptions: Array<SelectValues>;
  rulesValues: {
    eventId: SelectValues;
    actionType: SelectValues;
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
}) => {
  const [initialScript, setInitialScript] = React.useState(null);

  const { eventId, actionType } = rulesValues;

  const script = React.useMemo(
    () => currentProductScript ? currentProductScript : initialScript,
    [currentProductScript, initialScript]
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

  return (
    <RulesForm
      initialValues={{
        ...initialValues,
        script,
      }}
      isLoading={isLoading}
      onCancel={onCancel}
      getProductRule={getProductRule}
      updateProductRules={updateProductRules}
      rulesValues={rulesValues}
      actionTypesOptions={actionTypesOptions}
      isReadOnly={isReadOnly}
    />
  );
};

export default withSpinner()(ProductRulesForm);
