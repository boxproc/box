import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import { formNamesConst } from 'consts';

import {
  RepaymentDirectDebits,
  RepaymentDirectDebitsTable,
} from './../../components';

import { THandleAddRepaymentDirectDebit } from 'store';

import { ISelectValue } from 'types';

interface IRepaymentDirectDebitsForm {
  isLoading: boolean;
  onCancel: () => void;
  isReadOnly: boolean;
  addRepaymentDirectDebit: THandleAddRepaymentDirectDebit;
  interfacesOptions: Array<ISelectValue>;
  isInterfacesLoading: boolean;
}

type TRepaymentDirectDebitsForm = IRepaymentDirectDebitsForm
  & InjectedFormProps<{}, IRepaymentDirectDebitsForm>;

const RepaymentDirectDebitsForm: React.FC<TRepaymentDirectDebitsForm> = ({
  onCancel,
  handleSubmit,
  pristine,
  dirty,
  isLoading,
  isReadOnly,
  addRepaymentDirectDebit,
  interfacesOptions,
  isInterfacesLoading,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(addRepaymentDirectDebit),
    [handleSubmit]
  );

  return (
    <React.Fragment>
      {!isReadOnly && (
        <form onSubmit={handleSubmitForm}>
          <Box mx="-8px">
            <Flex alignItems="flex-end" flexWrap="wrap">
              <RepaymentDirectDebits
                isDisabled={isLoading}
                isLoading={isLoading}
                pristine={pristine}
                interfacesOptions={interfacesOptions}
                isInterfacesLoading={isInterfacesLoading}
              />
            </Flex>
          </Box>
        </form>
      )}
      <Box pt="10px">
        <RepaymentDirectDebitsTable />
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

export default reduxForm<{}, IRepaymentDirectDebitsForm>({
  form: formNamesConst.REPAYMENT_DIRECT_DEBITS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(RepaymentDirectDebitsForm);
