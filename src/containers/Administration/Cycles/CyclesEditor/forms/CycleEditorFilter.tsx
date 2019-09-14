import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, CheckboxField, SelectField } from 'components';

import { formNames } from 'consts';

import { HandleFilterCycles } from 'store/domains';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface CycleEditorFilterProps {
  institutionsOptions: Array<SelectValues>;
  filterCycles: HandleFilterCycles;
  isDirty: boolean;
}

type CyclesEditorFilterAllProps = CycleEditorFilterProps &
  InjectedFormProps<{}, CycleEditorFilterProps>;

const CyclesEditorFilter: React.FC<CyclesEditorFilterAllProps> = ({
  handleSubmit,
  institutionsOptions,
  filterCycles,
  isDirty,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(filterCycles),
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
              isMulti={false}
              isClearable={true}
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
          disabled={!isDirty}
        />
      </Box>
    </form >
  );
};

export default reduxForm<{}, CycleEditorFilterProps>({
  form: formNames.CYCLES_EDITOR_FILTER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(CyclesEditorFilter);
