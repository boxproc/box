import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import { Button, Hr, OkCancelButtons, SmallText } from 'components';

import { formNamesConst } from 'consts';

import { LedgerConvertToLoan } from 'containers/Ledger/Transactions/components';
import { SelectValue } from 'types';

interface LedgerConvertToLoanFormProps {
  onCancel: () => void;
  isReadOnly: boolean;
  loanProductsOptions: Array<SelectValue>;
}

type TransactionsFilterFormAllProps = LedgerConvertToLoanFormProps &
  InjectedFormProps<{}, LedgerConvertToLoanFormProps>;

const LedgerConvertToLoanForm: React.FC<TransactionsFilterFormAllProps> = ({
  onCancel,
  isReadOnly,
  handleSubmit,
  loanProductsOptions,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log('---data', data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <SmallText>(In Progress)</SmallText>
      <LedgerConvertToLoan loanProductsOptions={loanProductsOptions} />
      <Hr />
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          text="Illustrate"
          type="reset"
          onClick={() => console.log('---illustrate')}
        />
        <OkCancelButtons
          okText="Confirm"
          onOk={() => console.log('---Confirm')}
          onCancel={onCancel}
          hideOk={isReadOnly}
        />
      </Flex>
    </form>
  );
};

export default reduxForm<{}, LedgerConvertToLoanFormProps>({
  form: formNamesConst.LEDGER_CONVERT_TO_LOAN_FORM,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(LedgerConvertToLoanForm);
