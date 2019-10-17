import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { SelectField } from 'components';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface EventsDataElemsFilterProps {
  eventOptions: Array<SelectValues>;
}

const EventsDataElemsFilter: React.FC<EventsDataElemsFilterProps> = ({
  eventOptions,
}) => {
  return (
    <Box width={[1 / 4]} p="10px">
      <Field
        id="eventId"
        name="eventId"
        component={SelectField}
        label="Event"
        placeholder="Select Event"
        options={eventOptions}
        validate={[formErrorUtil.required]}
      />
    </Box>
  );
};

export default EventsDataElemsFilter;
