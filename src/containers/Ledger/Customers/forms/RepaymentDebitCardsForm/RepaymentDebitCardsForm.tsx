import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import { formNamesConst } from 'consts';

import {
  RepaymentDebitCards,
  RepaymentDebitCardsTable,
} from 'containers/Ledger/Customers/components';
import { HandleAddRepaymentDebitCard } from 'store/domains';
import { SelectValue } from 'types';

interface RepaymentDebitCardsFormProps {
  isLoading: boolean;
  onCancel: () => void;
  isReadOnly: boolean;
  addRepaymentDebitCard: HandleAddRepaymentDebitCard;
  interfacesOptions: Array<SelectValue>;
  isInterfacesLoading: boolean;
}

type RepaymentDebitCardsFormAllProps = RepaymentDebitCardsFormProps
  & InjectedFormProps<{}, RepaymentDebitCardsFormProps>;

const RepaymentDebitCardsForm: React.FC<RepaymentDebitCardsFormAllProps> = ({
  onCancel,
  handleSubmit,
  pristine,
  dirty,
  isLoading,
  isReadOnly,
  addRepaymentDebitCard,
  interfacesOptions,
  isInterfacesLoading,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(addRepaymentDebitCard),
    [handleSubmit]
  );

  return (
    <React.Fragment>
      {!isReadOnly && (
        <form onSubmit={handleSubmitForm}>
          <Box mx="-8px">
            <Flex alignItems="flex-end" flexWrap="wrap">
              <RepaymentDebitCards
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
        <RepaymentDebitCardsTable />
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

export default reduxForm<{}, RepaymentDebitCardsFormProps>({
  form: formNamesConst.REPAYMENT_DEBIT_CARDS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(RepaymentDebitCardsForm);
