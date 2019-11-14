import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import { feeTypesCodes, formNamesConst, iconNamesConst } from 'consts';

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

  const handleSubmitForm = React.useCallback(
    handleSubmit(addProductFee),
    [handleSubmit]
  );

  return (
    <React.Fragment>
      <Box pb="10px">
        <form onSubmit={handleSubmitForm}>
          <Flex alignItems="flex-end">
            <ProductFees
              isOnlyAmount={isOnlyAmount}
              isOnlyRate={isOnlyRate}
              isDisabled={isLoading}
            />
            <Box width="90px" pb="20px">
              <Button
                text={isLoading ? 'Adding...' : 'Add Fee'}
                iconName={iconNamesConst.PLUS}
                disabled={pristine || isLoading}
              />
            </Box>
          </Flex>
        </form>
      </Box>
      <FeesTable
        isOnlyAmount={isOnlyAmount}
        isOnlyRate={isOnlyRate}
      />
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
