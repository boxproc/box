import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { SelectField } from 'components/Form';

import { HandleFilterAdminEventDataElems } from 'store/domains';

import { formNames } from 'consts';

import { SelectValues } from 'types';

interface EventsDataElemsFilterProps {
  eventOptions: Array<SelectValues>;
  filterAdminEventDataElems: HandleFilterAdminEventDataElems;
}

type EventsDataElemsFilterAllProps = EventsDataElemsFilterProps &
  InjectedFormProps<{}, EventsDataElemsFilterProps>;

const EventsDataElemsFilter: React.FC<EventsDataElemsFilterAllProps> = ({
  handleSubmit,
  eventOptions,
  filterAdminEventDataElems,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => filterAdminEventDataElems(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width={[ 1, 1, 1, 700]} mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[ 1, 1 / 2]} p="10px">
            <Field
              id="eventId"
              name="eventId"
              isSearchable={true}
              component={SelectField}
              label="Event"
              placeholder="Select Event"
              options={eventOptions}
              isDisabled={false}
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

export default reduxForm<{}, EventsDataElemsFilterProps>({
  form: formNames.ADMIN_EVENT_DATA_ELEMS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(EventsDataElemsFilter);
