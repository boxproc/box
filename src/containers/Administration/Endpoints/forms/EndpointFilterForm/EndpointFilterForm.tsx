import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, SelectField } from 'components';

import { formNamesConst } from 'consts';

import { HandleFilterAdminEndpoint } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface EndpointFilterFormProps {
  institutionsOptions: Array<SelectValues>;
  filterAdminEndpoint: HandleFilterAdminEndpoint;
  isLoadingInstitutionProducts: boolean;
  isDirty: boolean;
}

type EndpointsFilterFormAllProps = EndpointFilterFormProps &
  InjectedFormProps<{}, EndpointFilterFormProps>;

const EndpointsFilterForm: React.FC<EndpointsFilterFormAllProps> = ({
  handleSubmit,
  institutionsOptions,
  filterAdminEndpoint,
  isDirty,
}) => {

  const handleSubmitForm = React.useCallback(
    handleSubmit(filterAdminEndpoint),
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
              isClearable={true}
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

export default reduxForm<{}, EndpointFilterFormProps>({
  form: formNamesConst.ADMIN_ENDPOINT_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(EndpointsFilterForm);
