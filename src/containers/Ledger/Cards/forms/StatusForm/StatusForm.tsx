import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, SelectField, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { HandleChangeLedgerCardStatus, HandleGetDictionaryCardStatuses } from 'store/domains';
import { SelectValue } from 'types';

interface StatusFormProps {
  getDictionaryCardStatuses: HandleGetDictionaryCardStatuses;
  changeLedgerCardStatus: HandleChangeLedgerCardStatus;
  cardStatusesOptions: Array<SelectValue>;
  isStatusesLoading: boolean;
  currentCardId: number;
  statusValue: SelectValue;
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
      <Box mx="-8px" >
        <Flex alignItems="flex-end">
          <Box width={[1 / 2]} p="8px">
            <Field
              id="status"
              name="status"
              component={SelectField}
              label="Status"
              placeholder="Select Status"
              isClearable={false}
              options={cardStatusesOptions}
              isLoading={isStatusesLoading}
            />
          </Box>
          <Box width={[1 / 2]} p="8px" pl="0">
            <Button
              text="Change Status"
              disabled={pristine}
            />
          </Box>
        </Flex>
      </Box>
    </form >
  );
};

export default withSpinner()(reduxForm<{}, StatusFormProps>({
  form: formNamesConst.CHANGE_CARD_STATUS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(StatusForm));
