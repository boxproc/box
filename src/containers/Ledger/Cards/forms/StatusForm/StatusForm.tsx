import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, SelectField, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { HandleChangeLedgerCardStatus, HandleGetDictionaryCardStatuses } from 'store/domains';
import { SelectValue } from 'types';

interface StatusFormProps {
  getDictionaryCardStatuses: HandleGetDictionaryCardStatuses;
  changeCardStatus: HandleChangeLedgerCardStatus;
  cardStatusesOptions: Array<SelectValue>;
  isStatusesLoading: boolean;
  isReadOnly: boolean;
  currentCardId: number;
  statusValue: SelectValue;
}

type StatusFormAllProps = StatusFormProps & InjectedFormProps<{}, StatusFormProps>;

const StatusForm: React.FC<StatusFormAllProps> = ({
  getDictionaryCardStatuses,
  cardStatusesOptions,
  changeCardStatus,
  isStatusesLoading,
  pristine,
  handleSubmit,
  statusValue,
  currentCardId,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getDictionaryCardStatuses();
    },
    [getDictionaryCardStatuses]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(() => changeCardStatus({
      cardStatusId: statusValue && statusValue.value,
      cardId: currentCardId,
    })),
    [changeCardStatus, currentCardId, statusValue]
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
              isDisabled={isReadOnly}
              options={cardStatusesOptions}
              isLoading={isStatusesLoading}
            />
          </Box>
          {!isReadOnly && (
            <Box width={[1 / 2]} p="8px" pl="0">
              <Button
                text="Change Status"
                disabled={pristine}
              />
            </Box>
          )}
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
