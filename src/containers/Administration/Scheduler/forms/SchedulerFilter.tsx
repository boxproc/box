import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, CheckboxField, InputField } from 'components';

import { formNamesConst } from 'consts';
import { formErrorUtil } from 'utils';

interface SchedulerFilterProps { }

type SchedulerFilterAllProps = SchedulerFilterProps &
  InjectedFormProps<{}, SchedulerFilterProps>;

const SchedulerFilter: React.FC<SchedulerFilterAllProps> = ({
  handleSubmit,
  pristine,
  invalid,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log('---', data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width="700px" mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 3]} p="10px">
            <Field
              id="name"
              name="name"
              placeholder="Enter Name"
              component={InputField}
              label="Name"
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="activeStatusFlag"
              name="activeStatusFlag"
              component={CheckboxField}
              label="Only &quot;Active&quot;"
              disabled={false}
            />
          </Box>
        </Flex>
        <Button
          text="Show"
          disabled={pristine || invalid}
        />
      </Box>
    </form >
  );
};

export default reduxForm<{}, SchedulerFilterProps>({
  form: formNamesConst.SCHEDULER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(SchedulerFilter);
