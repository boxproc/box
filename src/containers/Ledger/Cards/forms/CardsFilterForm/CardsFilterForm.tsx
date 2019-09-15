import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField } from 'components';

import { formNamesConst, maskFormat } from 'consts';

import { HandleFilterLedgerCards } from 'store/domains';
import { formErrorUtil } from 'utils';

interface CardsFilterFormProps {
  filterLedgerCards: HandleFilterLedgerCards;
  isDirty: boolean;
}

type CardsFilterFormAllProps = CardsFilterFormProps &
  InjectedFormProps<{}, CardsFilterFormProps>;

const CardsFilterForm: React.FC<CardsFilterFormAllProps> = ({
  handleSubmit,
  filterLedgerCards,
  isDirty,
}) => {

  const handleSubmitForm = React.useCallback(
    handleSubmit(filterLedgerCards),
    [handleSubmit, filterLedgerCards]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width="700px" mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width="150px" p="10px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="Card ID"
              placeholder="Card ID"
              isDisabled={false}
            />
          </Box>
          <Box width="150px" p="10px">
            <Field
              id="accountId"
              name="accountId"
              component={InputField}
              label="Account ID"
              placeholder="Account ID"
              isDisabled={false}
            />
          </Box>
          <Box width="150px" p="10px">
            <Field
              id="customerId"
              name="customerId"
              component={InputField}
              label="Customer ID"
              placeholder="Customer ID"
              isDisabled={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width="200px" p="10px">
            <Field
              id="panAlias"
              name="panAlias"
              component={InputField}
              label="PAN Alias"
              placeholder="PAN Alias"
              mask={maskFormat.DATE_TIME}
              maskChar={null}
            />
          </Box>
        </Flex>
        <Button
          text="Show"
          disabled={!isDirty}
        />
      </Box>
    </form >
  );
};

export default reduxForm<{}, CardsFilterFormProps>({
  form: formNamesConst.LEDGER_CARDS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(CardsFilterForm);
