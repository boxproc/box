import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import { feeRewardsTypesCodes, formNamesConst } from 'consts';

import { ProductRewards, RewardsTable } from 'containers/ProductDesigner/Products/components';

import { HandleAddProductReward } from 'store/domains';

import { SelectValue } from 'types';

interface RewardsFormProps {
  addProductReward: HandleAddProductReward;
  isLoading: boolean;
  rewardApplicationConditionValue: SelectValue;
  onCancel: () => void;
  isReadOnly: boolean;
}

type RewardsFormAllProps = RewardsFormProps & InjectedFormProps<{}, RewardsFormProps>;

const RewardsForm: React.FC<RewardsFormAllProps> = ({
  onCancel,
  addProductReward,
  handleSubmit,
  pristine,
  dirty,
  isLoading,
  rewardApplicationConditionValue,
  change,
  isReadOnly,
}) => {
  const isOnlyAmount = React.useMemo(
    () => {
      return rewardApplicationConditionValue
        && rewardApplicationConditionValue.value === feeRewardsTypesCodes.APPLY_ONLY_FIXED_AMOUNT;
    },
    [rewardApplicationConditionValue]
  );

  const isOnlyRate = React.useMemo(
    () => {
      return rewardApplicationConditionValue
        && rewardApplicationConditionValue.value === feeRewardsTypesCodes.APPLY_ONLY_RATE;
    },
    [rewardApplicationConditionValue]
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
    handleSubmit(addProductReward),
    [handleSubmit, addProductReward]
  );

  return (
    <React.Fragment>
      {!isReadOnly && (
        <form onSubmit={handleSubmitForm}>
          <ProductRewards
            isDisabled={isLoading}
            isLoading={isLoading}
            pristine={pristine}
            isOnlyRate={isOnlyRate}
            isOnlyAmount={isOnlyAmount}
          />
        </form>
      )}
      <Box pt="10px">
        <RewardsTable isReadOnly={isReadOnly} />
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

export default reduxForm<{}, RewardsFormProps>({
  form: formNamesConst.PRODUCT_REWARDS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(RewardsForm);
