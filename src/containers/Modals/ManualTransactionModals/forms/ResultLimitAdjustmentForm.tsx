import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { NumberFormatField } from 'components';
import { formNamesConst } from 'consts';

interface ResultLimitAdjustmentFormProps { }

type ResultLimitAdjustmentFormAllProps = ResultLimitAdjustmentFormProps
  & InjectedFormProps<{}, ResultLimitAdjustmentFormProps>;

const ResultLimitAdjustmentForm: React.FC<ResultLimitAdjustmentFormAllProps> = () => {
  return (
    <form>
      <Box mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 4]} p="10px">
            <Field
              id="balanceLimit"
              name="balanceLimit"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance Limit"
              readOnly={true}
            />
          </Box>
          <Box width={[1 / 4]} p="10px">
            <Field
              id="balanceLimitShared"
              name="balanceLimitShared"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance Limit Shared"
              readOnly={true}
            />
          </Box>
        </Flex>
      </Box>
    </form>
  );
};

export default reduxForm<{}, ResultLimitAdjustmentFormProps>({
  form: formNamesConst.LEDGER_RESULT_LIMIT_ADJUSTMENT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ResultLimitAdjustmentForm);
