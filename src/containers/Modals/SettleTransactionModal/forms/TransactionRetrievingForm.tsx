import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField, OkCancelButtons } from 'components';

import { formNamesConst } from 'consts';

import { HandleRetrieveTransaction } from 'store/domains';

import { formErrorUtil } from 'utils';

interface TransactionRetrievingFormProps {
  retrieveTransaction: HandleRetrieveTransaction;
  isRetrieving: boolean;
  isRetrieved: boolean;
  onCancel: () => void;
}

type TransactionRetrievingFormPropsAllProps = TransactionRetrievingFormProps
  & InjectedFormProps<{}, TransactionRetrievingFormProps>;

const TransactionRetrievingForm: React.FC<TransactionRetrievingFormPropsAllProps> = ({
  retrieveTransaction,
  handleSubmit,
  isRetrieving,
  isRetrieved,
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
            validate={[
              formErrorUtil.required,
              formErrorUtil.isInteger,
            ]}
            autoFocus={true}
          />
        </Box>
        <Box pb="7px">
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

export default reduxForm<{}, TransactionRetrievingFormProps>({
  form: formNamesConst.TRANSACTION_RETRIEVING_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(TransactionRetrievingForm);
