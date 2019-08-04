import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { CheckboxField, SelectField } from 'components/Form';

import { formNames } from 'consts';

import { SelectValues } from 'types';

interface CycleEditorFilterProps {
  institutionsOptions: Array<SelectValues>;
}

type CyclesEditorFilterAllProps = CycleEditorFilterProps &
  InjectedFormProps<{}, CycleEditorFilterProps>;

const CyclesEditorFilter: React.FC<CyclesEditorFilterAllProps> = ({
  handleSubmit,
  institutionsOptions,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width={[1, 1, 1, 700]} mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1, 1 / 2]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              isSearchable={true}
              component={SelectField}
              label="Institution"
              placeholder="Select Institution"
              options={institutionsOptions}
              isDisabled={false}
              isMulti={false}
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
      </Box>
      <OkCancelButtons
        okText="Show"
        cancelText="Reset"
        disabledCancel={true}
      />
    </form >
  );
};

export default reduxForm<{}, CycleEditorFilterProps>({
  form: formNames.SCHEDULER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(CyclesEditorFilter);
