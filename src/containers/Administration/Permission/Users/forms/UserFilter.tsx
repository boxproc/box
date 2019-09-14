import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, CheckboxField } from 'components';

import { formNames } from 'consts';

import { HandleFilterUsers } from 'store/domains';

import { SelectValues } from 'types';

interface UserFilterProps {
  institutionsOptions: Array<SelectValues>;
  filterUsers: HandleFilterUsers;
 }

type UserFilterAllProps = UserFilterProps &
  InjectedFormProps<{}, UserFilterProps>;

const UserFilter: React.FC<UserFilterAllProps> = ({
  handleSubmit,
  filterUsers,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(filterUsers),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width="700px" mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1]} p="10px">
            <Field
              id="statusActiveFlag"
              name="statusActiveFlag"
              component={CheckboxField}
              label="Only &quot;Active&quot;"
              disabled={false}
            />
          </Box>
        </Flex>
        <Button
          text="Show"
        />
      </Box>
    </form >
  );
};

export default reduxForm<{}, UserFilterProps>({
  form: formNames.USER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(UserFilter);
