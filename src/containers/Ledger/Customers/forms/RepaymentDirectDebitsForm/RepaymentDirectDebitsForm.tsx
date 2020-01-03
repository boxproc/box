import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import { formNamesConst } from 'consts';

import {
  RepaymentDirectDebits,
  RepaymentDirectDebitsTable,
} from 'containers/Ledger/Customers/components';
import { HandleAddRepaymentDirectDebit } from 'store/domains';

import { SelectValues } from 'types';

interface RepaymentDirectDebitsFormProps {
  isLoading: boolean;
  onCancel: () => void;
  isReadOnly: boolean;
  addRepaymentDirectDebit: HandleAddRepaymentDirectDebit;
  interfacesOptions: Array<SelectValues>;
  isInterfacesLoading: boolean;
}

type RepaymentDirectDebitsFormAllProps = RepaymentDirectDebitsFormProps
  & InjectedFormProps<{}, RepaymentDirectDebitsFormProps>;

const RepaymentDirectDebitsForm: React.FC<RepaymentDirectDebitsFormAllProps> = ({
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
          <Box mx="-10px">
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

export default reduxForm<{}, RepaymentDirectDebitsFormProps>({
  form: formNamesConst.LEDGER_REPAYMENT_DIRECT_DEBITS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(RepaymentDirectDebitsForm);
