import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField, OkCancelButtons } from 'components';

import { formNamesConst } from 'consts';

import { HandleRetrieveTransaction } from 'store';

import { formErrorUtil } from 'utils';

interface ITransactionRetrievingForm {
  retrieveTransaction: HandleRetrieveTransaction;
  isRetrieving: boolean;
  isRetrieved: boolean;
  isReadonly: boolean;
  onCancel: () => void;
}

type TTransactionRetrievingForm = ITransactionRetrievingForm
  & InjectedFormProps<{}, ITransactionRetrievingForm>;

const TransactionRetrievingForm: React.FC<TTransactionRetrievingForm> = ({
  retrieveTransaction,
  handleSubmit,
  isRetrieving,
  isRetrieved,
  isReadonly,
  onCancel,
}) => {
  const buttonText = React.useMemo(
    () => isRetrieving ? 'Retrieving...' : 'Retrieve',
    [isRetrieving]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(retrieveTransaction),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end" mx="-8px">
        <Box width="180px" p="8px">
          <Field
            id="id"
            name="id"
            placeholder="Enter ID"
            label="Transaction ID"
            component={InputField}
            isNumber={true}
            readOnly={isReadonly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isInteger,
            ]}
            autoFocus={true}
          />
        </Box>
        <Box ml="10px" pb="7px">
          <OkCancelButtons
            okText={buttonText}
            hideCancel={isRetrieved}
            onCancel={onCancel}
            focusedButton="none"
          />
        </Box>
      </Flex>
    </form>
  );
};

export default reduxForm<{}, ITransactionRetrievingForm>({
  form: formNamesConst.TRANSACTION_RETRIEVING_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(TransactionRetrievingForm);
