import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { CalendarField, InputField, SelectField } from 'components/Form';

import { DateFormat, formNames, productTypesOptions } from 'consts';

import { HandleFilterLedgerTransactions } from 'store/domains';

interface TransactionsFilterFormProps {
  filterLedgerTransactions: HandleFilterLedgerTransactions;
}

type TransactionsFilterFormAllProps = TransactionsFilterFormProps &
  InjectedFormProps<{}, TransactionsFilterFormProps>;

const TransactionsFilterForm: React.FC<TransactionsFilterFormAllProps> = ({
  handleSubmit,
  filterLedgerTransactions,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => filterLedgerTransactions(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width={[1, 1, 1, 1, 990]} mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width="100px" p="10px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="Transaction ID"
              placeholder="Enter ID"
              isDisabled={false}
            />
          </Box>
          <Box width="100px" p="10px">
            <Field
              id="customerId"
              name="customerId"
              component={InputField}
              label="Customer ID"
              placeholder="Enter ID"
              isDisabled={false}
            />
          </Box>
          <Box width={[1, 1 / 3]} p="10px">
            <Field
              id="productType"
              name="productType"
              component={SelectField}
              label="Product Type"
              placeholder="Select Product Type"
              options={productTypesOptions}
              isDisabled={false}
            />
          </Box>
          <Box width="175px" p="10px">
            <Field
              id="datetimeFrom"
              name="datetimeFrom"
              component={CalendarField}
              label="Date From"
              placeholder={DateFormat.FORMAT}
            />
          </Box>
          <Box width="175px" p="10px">
            <Field
              id="datetimeTo"
              name="datetimeTo"
              component={CalendarField}
              label="Date To"
              placeholder={DateFormat.FORMAT}
            />
          </Box>
        </Flex>
      </Box>
      <OkCancelButtons
        okText="Show"
        cancelText="Reset"
        disabledCancel={true}
      />
    </form >
  );
};

export default reduxForm<{}, TransactionsFilterFormProps>({
  form: formNames.LEDGER_TRANSACTIONS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(TransactionsFilterForm);
