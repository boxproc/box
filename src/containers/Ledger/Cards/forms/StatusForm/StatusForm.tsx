import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, SelectField, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { THandleChangeCardStatus, THandleGetDictionaryCardStatuses } from 'store';
import { ISelectValue } from 'types';

interface IStatusForm {
  getDictionaryCardStatuses: THandleGetDictionaryCardStatuses;
  changeCardStatus: THandleChangeCardStatus;
  cardStatusesOptions: Array<ISelectValue>;
  isStatusesLoading: boolean;
  isReadOnly: boolean;
  currentCardId: number;
  statusValue: ISelectValue;
}

type TStatusForm = IStatusForm & InjectedFormProps<{}, IStatusForm>;

const StatusForm: React.FC<TStatusForm> = ({
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
          <Box width={[2 / 3]} p="8px">
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
            <Box width={[1 / 2]} p="8px">
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

export default withSpinner()(reduxForm<{}, IStatusForm>({
  form: formNamesConst.CHANGE_CARD_STATUS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(StatusForm));
