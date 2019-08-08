import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { CalendarField, SelectField } from 'components/Form';

import { formNames, } from 'consts';

import { SelectValues } from 'types';

interface UserActivitiesFilterFormProps {
  institutionsOptions: Array<SelectValues>;
  // filterLedgerAccounts: HandleFilterLedgerAccounts;
}

type UserActivitiesFilterFormAllProps = UserActivitiesFilterFormProps &
  InjectedFormProps<{}, UserActivitiesFilterFormProps>;

const UserActivitiesFilterForm: React.FC<UserActivitiesFilterFormAllProps> = ({
  handleSubmit,
  institutionsOptions,
 // filterLedgerAccounts,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log()),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width={[1, 1, 1, 1, 1000]} mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 4]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              component={SelectField}
              label="Institution"
              placeholder="Select Institution"
              options={institutionsOptions}
              isDisabled={false}
              isClearable={false}
            />
          </Box>
          <Box width={[1 / 4]} p="10px">
            <Field
              id="username"
              name="username"
              component={SelectField}
              label="Username"
              placeholder="Select Username"
              isDisabled={false}
              isMulti={true}
            />
          </Box>
          <Box width="175px" p="10px" >
            <Field
              id="datetimeFrom"
              name="datetimeFrom"
              placeholder="dd/mm/yyyy"
              component={CalendarField}
              label="Date From"
              isDisabled={false}
            />
          </Box>
          <Box width="175px" p="10px" >
            <Field
              id="datetimeTo"
              name="datetimeTo"
              placeholder="dd/mm/yyyy"
              component={CalendarField}
              label="Date To"
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

export default reduxForm<{}, UserActivitiesFilterFormProps>({
  form: formNames.AUDIT_USER_ACTIVITIES_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(UserActivitiesFilterForm);
