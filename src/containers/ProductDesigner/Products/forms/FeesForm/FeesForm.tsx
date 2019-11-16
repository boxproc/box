import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import { feeTypesCodes, formNamesConst } from 'consts';

import { FeesTable, ProductFees } from 'containers/ProductDesigner/Products/components';

import { HandleAddProductFee } from 'store/domains';

import { SelectValues } from 'types';

interface FeesFormProps {
  addProductFee: HandleAddProductFee;
  isLoading: boolean;
  feeApplicationConditionValue: SelectValues;
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
  feeApplicationConditionValue,
  change,
}) => {
  const isOnlyAmount = React.useMemo(
    () => {
      return feeApplicationConditionValue
        && feeApplicationConditionValue.value === feeTypesCodes.APPLY_ONLY_FIXED_AMOUNT;
    },
    [feeApplicationConditionValue]
  );

  const isOnlyRate = React.useMemo(
    () => {
      return feeApplicationConditionValue
        && feeApplicationConditionValue.value === feeTypesCodes.APPLY_ONLY_RATE;
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
    [handleSubmit]
  );

  return (
    <React.Fragment>
      <Box pb="10px">
        <form onSubmit={handleSubmitForm}>
          <ProductFees
            isDisabled={isLoading}
            pristine={pristine}
            isOnlyAmount={isOnlyAmount}
            isOnlyRate={isOnlyRate}
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
