import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import OkCancelButtons from 'components/Buttons/OkCancelButtons';
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
      <Flex alignItems="flex-end">
        <Box width="200px" mr="20px">
          <Field
            id="name"
            name="name"
            placeholder="Enter Name"
            component={InputField}
            label="Name"
          />
        </Box>
        <Box>
          <Field
            id="lockedFlag"
            name="lockedFlag"
            component={CheckboxField}
            label="Show active"
            disabled={false}
          />
        </Box>
      </Flex>
      <OkCancelButtons
        okText="Search"
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
