import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { CheckboxField, InputField } from 'components/Form';

import { formNames } from 'consts';

interface SchedulerFilterProps { }

type SchedulerFilterAllProps = SchedulerFilterProps &
  InjectedFormProps<{}, SchedulerFilterProps>;

const SchedulerFilter: React.FC<SchedulerFilterAllProps> = ({
  handleSubmit,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log('---', data)),
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
              id="name"
              name="name"
              placeholder="Enter Name"
              component={InputField}
              label="Name"
            />
          </Box>
          <Box width={[ 1 ]} p="10px">
            <Field
              id="lockedFlag"
              name="lockedFlag"
              component={CheckboxField}
              label="Only &quot;Active&quot;"
              disabled={false}
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

export default reduxForm<{}, SchedulerFilterProps>({
  form: formNames.SCHEDULER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(SchedulerFilter);
