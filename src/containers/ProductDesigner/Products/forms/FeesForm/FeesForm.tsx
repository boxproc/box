import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';
import { feeRewardsTypesConst, formNamesConst } from 'consts';
import { FeesTable, ProductFees } from 'containers/ProductDesigner/Products/components';
import { THandleAddProductFee } from 'store';
import { ISelectValue } from 'types';

interface IFeesForm {
  addProductFee: THandleAddProductFee;
  isLoading: boolean;
  isAprsLoading: boolean;
  feeApplicationConditionValue: ISelectValue;
  aprsOptions: Array<ISelectValue>;
  onCancel: () => void;
  isReadOnly: boolean;
}

type TFeesForm = IFeesForm & InjectedFormProps<{}, IFeesForm>;

const FeesForm: React.FC<TFeesForm> = ({
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

export default reduxForm<{}, IFeesForm>({
  form: formNamesConst.PRODUCT_FEES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(FeesForm);
