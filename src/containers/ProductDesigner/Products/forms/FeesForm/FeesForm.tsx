import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import { feeRewardsTypesConst, formNamesConst } from 'consts';

import { FeesTable, ProductFees } from 'containers/ProductDesigner/Products/components';

import { HandleAddProductFee } from 'store';

import { SelectValue } from 'types';

interface FeesFormProps {
  addProductFee: HandleAddProductFee;
  isLoading: boolean;
  isAprsLoading: boolean;
  feeApplicationConditionValue: SelectValue;
  aprsOptions: Array<SelectValue>;
  onCancel: () => void;
  isReadOnly: boolean;
}

type FeesFormAllProps = FeesFormProps & InjectedFormProps<{}, FeesFormProps>;

const FeesForm: React.FC<FeesFormAllProps> = ({
  onCancel,
  addProductFee,
  handleSubmit,
  pristine,
  dirty,
  isLoading,
  isAprsLoading,
  feeApplicationConditionValue,
  aprsOptions,
  change,
  isReadOnly,
}) => {
  const isOnlyAmount = React.useMemo(
    () => {
      return feeApplicationConditionValue
        && feeApplicationConditionValue.value === feeRewardsTypesConst.APPLY_ONLY_FIXED_AMOUNT;
    },
    [feeApplicationConditionValue]
  );

  const isOnlyRate = React.useMemo(
    () => {
      return feeApplicationConditionValue
        && feeApplicationConditionValue.value === feeRewardsTypesConst.APPLY_ONLY_RATE;
    },
    [feeApplicationConditionValue]
  );

  React.useEffect(
    () => {
      if (isOnlyAmount) {
        change('rate', '');
      }
    },
    [isOnlyAmount, change]
  );

  React.useEffect(
    () => {
      if (isOnlyRate) {
        change('amount', '');
      }
    },
    [isOnlyRate, change]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(addProductFee),
    [handleSubmit, addProductFee]
  );

  return (
    <React.Fragment>
      {!isReadOnly && (
        <form onSubmit={handleSubmitForm}>
          <ProductFees
            isAprsLoading={isAprsLoading}
            isLoading={isLoading}
            isDisabled={isLoading}
            pristine={pristine}
            isOnlyAmount={isOnlyAmount}
            isOnlyRate={isOnlyRate}
            aprsOptions={aprsOptions}
          />
        </form>
      )}
      <Box pt="10px">
        <FeesTable isReadOnly={isReadOnly} />
      </Box>
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={onCancel}
          withConfirmation={dirty}
        />
      </Flex>
    </React.Fragment>
  );
};

export default reduxForm<{}, FeesFormProps>({
  form: formNamesConst.PRODUCT_FEES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(FeesForm);
