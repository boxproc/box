import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import { SelectField } from 'components/Form';

import { HandleFilterAdminEventDataElems } from 'store/domains';

import { formNames } from 'consts';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface EventsDataElemsFilterProps {
  eventOptions: Array<SelectValues>;
  filterAdminEventDataElems: HandleFilterAdminEventDataElems;
  isDirty: boolean;
}

type EventsDataElemsFilterAllProps = EventsDataElemsFilterProps &
  InjectedFormProps<{}, EventsDataElemsFilterProps>;

const EventsDataElemsFilter: React.FC<EventsDataElemsFilterAllProps> = ({
  handleSubmit,
  eventOptions,
  filterAdminEventDataElems,
  isDirty,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => filterAdminEventDataElems(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width={[700]} mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 3]} p="10px">
            <Field
              id="eventId"
              name="eventId"
              component={SelectField}
              label="Event"
              placeholder="Select Event"
              options={eventOptions}
              isDisabled={false}
              validate={[formErrorUtil.required]}
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

export default reduxForm<{}, EventsDataElemsFilterProps>({
  form: formNames.ADMIN_EVENT_DATA_ELEMS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(EventsDataElemsFilter);
