import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  Hr,
  ISpinner,
  NumberFormatField,
  withSpinner,
} from 'components';
import { formNamesConst } from 'consts';
import { THandleGetCurrencyLimit, THandleUpdateCurrencyLimit } from 'store';
import { formErrorUtil } from 'utils';

interface ICurrencyLimitForm extends ISpinner {
  currencyLimitLabel: string;
  getCurrencyLimit: THandleGetCurrencyLimit;
  isReadOnly: boolean;
  isUpdating: boolean;
  onCancel: () => void;
  updateCurrencyLimit: THandleUpdateCurrencyLimit;
}

type TCurrencyLimitForm = ICurrencyLimitForm & InjectedFormProps<{}, ICurrencyLimitForm>;

const CurrencyLimitForm: React.FC<TCurrencyLimitForm> = ({
  currencyLimitLabel,
  dirty,
  getCurrencyLimit,
  isReadOnly,
  isUpdating,
  onCancel,
  pristine,
  updateCurrencyLimit,
  handleSubmit,
}) => {
  React.useEffect(
    () => {
      getCurrencyLimit();
    },
    [getCurrencyLimit]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(updateCurrencyLimit),
    [handleSubmit, updateCurrencyLimit]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <Flex alignItems="flex-end" mx="-8px">
        <Box width={[1 / 5]} p="8px">
          <Field
            id="customerLimit"
            name="customerLimit"
            component={NumberFormatField}
            label={currencyLimitLabel || 'Limit'}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            disabled={isUpdating || isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        {!isReadOnly && (
          <Box p="8px">
            <Button
              text={isUpdating ? 'Save...' : 'Save'}
              disabled={pristine}
            />
          </Box>
        )}
      </Flex>
      <Hr />
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={onCancel}
          withConfirmation={dirty}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, ICurrencyLimitForm>({
  form: formNamesConst.CURRENCY_LIMIT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(CurrencyLimitForm));
