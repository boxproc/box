import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import { feeRewardsTypesCodes, formNamesConst } from 'consts';

import { FeesTable, ProductFees } from 'containers/ProductDesigner/Products/components';

import { HandleAddProductFee } from 'store/domains';

import { SelectValues } from 'types';

interface FeesFormProps {
  addProductFee: HandleAddProductFee;
  isLoading: boolean;
  isAprDescriptionLoading: boolean;
  feeApplicationConditionValue: SelectValues;
  aprDescriptionsOptions: Array<SelectValues>;
  onCancel: () => void;
}

type FeesFormAllProps = FeesFormProps & InjectedFormProps<{}, FeesFormProps>;

const FeesForm: React.FC<FeesFormAllProps> = ({
  onCancel,
  addProductFee,
  handleSubmit,
  pristine,
  dirty,
  isLoading,
  isAprDescriptionLoading,
  feeApplicationConditionValue,
  aprDescriptionsOptions,
  change,
}) => {
  const isOnlyAmount = React.useMemo(
    () => {
      return feeApplicationConditionValue
        && feeApplicationConditionValue.value === feeRewardsTypesCodes.APPLY_ONLY_FIXED_AMOUNT;
    },
    [feeApplicationConditionValue]
  );

  const isOnlyRate = React.useMemo(
    () => {
      return feeApplicationConditionValue
        && feeApplicationConditionValue.value === feeRewardsTypesCodes.APPLY_ONLY_RATE;
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
      <Box pb="10px">
        <form onSubmit={handleSubmitForm}>
          <ProductFees
            isAprDescriptionLoading={isAprDescriptionLoading}
            isLoading={isLoading}
            isDisabled={isLoading}
            pristine={pristine}
            isOnlyAmount={isOnlyAmount}
            isOnlyRate={isOnlyRate}
            aprDescriptionsOptions={aprDescriptionsOptions}
          />
        </form>
      </Box>
      <FeesTable />
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
