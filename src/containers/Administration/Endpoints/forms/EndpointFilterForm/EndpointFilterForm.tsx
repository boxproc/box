import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { SelectField } from 'components/Form';

import { formNames } from 'consts';

import { HandleFilterAdminEndpoint } from 'store/domains';

import { SelectValues } from 'types';

interface EndpointFilterFormProps {
  institutionsOptions: Array<SelectValues>;
  filterAdminEndpoint: HandleFilterAdminEndpoint;
  isLoadingInstitutionProducts: boolean;
}

type EndpointsFilterFormAllProps = EndpointFilterFormProps &
  InjectedFormProps<{}, EndpointFilterFormProps>;

const EndpointsFilterForm: React.FC<EndpointsFilterFormAllProps> = ({
  handleSubmit,
  institutionsOptions,
  filterAdminEndpoint,
}) => {

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => filterAdminEndpoint(data)),
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

export default reduxForm<{}, EndpointFilterFormProps>({
  form: formNames.ADMIN_ENDPOINT_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(EndpointsFilterForm);
