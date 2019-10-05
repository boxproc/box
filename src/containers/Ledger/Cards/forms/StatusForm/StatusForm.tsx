import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, SelectField } from 'components';

import { formNamesConst } from 'consts';

import { HandleChangeLedgerCardStatus, HandleGetDictionaryCardStatuses } from 'store/domains';
import { SelectValues } from 'types';

interface StatusFormProps {
  getDictionaryCardStatuses: HandleGetDictionaryCardStatuses;
  changeLedgerCardStatus: HandleChangeLedgerCardStatus;
  cardStatusesOptions: Array<SelectValues>;
  isStatusesLoading: boolean;
  currentCardId: number;
  statusValue: SelectValues;
  isLoading: boolean;
}

type StatusFormAllProps = StatusFormProps & InjectedFormProps<{}, StatusFormProps>;

const StatusForm: React.FC<StatusFormAllProps> = ({
  getDictionaryCardStatuses,
  cardStatusesOptions,
  changeLedgerCardStatus,
  isStatusesLoading,
  pristine,
  handleSubmit,
  statusValue,
  currentCardId,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getDictionaryCardStatuses();
    },
    [getDictionaryCardStatuses]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(() => changeLedgerCardStatus({
      cardStatusId: statusValue && statusValue.value,
      cardId: currentCardId,
    })),
    [changeLedgerCardStatus, currentCardId, statusValue]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box mx="-10px" >
        <Flex alignItems="flex-end">
          <Box width={[1 / 2]} p="10px">
            <Field
              id="status"
              name="status"
              component={SelectField}
              label="Status"
              placeholder="Select Status"
              isClearable={false}
              options={cardStatusesOptions}
              isLoading={isStatusesLoading}
              isDisabled={isLoading}
            />
          </Box>
          <Box width={[1 / 2]} p="10px" pl="0">
            <Button
              text={isLoading ? 'Changing...' : 'Change Status'}
              disabled={pristine || isLoading}
            />
          </Box>
        </Flex>
      </Box>
    </form >
  );
};

export default reduxForm<{}, StatusFormProps>({
  form: formNamesConst.LEDGER_CHANGE_CARD_STATUS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(StatusForm);
