import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { SelectField } from 'components';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface EventsDataElemsFilterProps {
  eventOptions: Array<ISelectValue>;
  isDisabled: boolean;
}

const EventsDataElemsFilter: React.FC<EventsDataElemsFilterProps> = ({
  eventOptions,
  isDisabled,
}) => {
  return (
    <Box width={[1 / 4]} p="8px">
      <Field
        id="eventId"
        name="eventId"
        component={SelectField}
        label="Event"
        placeholder="Select Event"
        options={eventOptions}
        isDisabled={isDisabled}
        isRequired={true}
        validate={[formErrorUtil.isRequired]}
      />
    </Box>
  );
};

export default EventsDataElemsFilter;
