import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons/OkCancelButtons';
import { InputField, SelectField } from 'components/Form';

import {
  executableTypeOptions,
  formNames,
  statusTypeCyclesOptions,
  typeOfCyclesEditorOptions,
  weeklyCycleTypeOptions
} from 'consts';

import { HandleAddAdminCyclesEditor, HandleUpdateAdminCyclesEditor } from 'store/domains';

import { formErrorUtil } from 'utils';

import { SelectValues } from 'types';

interface DefineCyclesEditorFormProps {
  defineAdminCyclesEditor?: HandleAddAdminCyclesEditor|HandleUpdateAdminCyclesEditor;
  institutionsOptions?: Array<SelectValues>;
  isDisabledInstitutions?: boolean;
  isDisabledStatus?: boolean;
  onCancel?: () => void;
}

type DefineSchedulerJobFormAllProps = DefineCyclesEditorFormProps &
  InjectedFormProps<{}, DefineCyclesEditorFormProps>;

const DefineSchedulerJobForm: React.FC<DefineSchedulerJobFormAllProps> = ({
  handleSubmit,
  defineAdminCyclesEditor,
  isDisabledInstitutions,
  institutionsOptions,
  isDisabledStatus,
  onCancel,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => defineAdminCyclesEditor(data)),
    [handleSubmit, defineAdminCyclesEditor]
  );

  return (
    <form onSubmit={handleSubmitForm}>
          <Box mx="-10px" >
            <Flex
              flexWrap="wrap"
            >
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="institutionId"
                  name="institutionId"
                  isSearchable={true}
                  component={SelectField}
                  label="Institution"
                  placeholder="Select Institution"
                  options={institutionsOptions}
                  isDisabled={isDisabledInstitutions}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="description"
                  name="description"
                  placeholder="Enter Cycles Editor Description"
                  component={InputField}
                  label="Cycles Editor Description"
                  validate={[formErrorUtil.required]}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="cycleType"
                  name="cycleType"
                  placeholder="Enter  Cycles Type"
                  component={SelectField}
                  options={typeOfCyclesEditorOptions}
                  label="Cycles Editor Type"
                  disabled={false}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="status"
                  name="status"
                  component={SelectField}
                  isSearchable={true}
                  label="Status"
                  placeholder="Select Cycles Editor Status"
                  options={statusTypeCyclesOptions}
                  isDisabled={isDisabledStatus}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="monthlyCycleFirstDay"
                  name="monthlyCycleFirstDay"
                  isSearchable={true}
                  placeholder="Enter Monthly Cycle first day "
                  component={InputField}
                  label="Cycles Editor Monthly Cycle first day"
                  disabled={false}
                  options={executableTypeOptions}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="weeklyCycleFirstDay"
                  name="weeklyCycleFirstDay"
                  placeholder="Enter Weekly Cycle first day "
                  component={SelectField}
                  options={weeklyCycleTypeOptions}
                  label="Cycles Editor Weekly Cycle first day"
                  disabled={false}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="fixedCycleNumberOfDays"
                  name="fixedCycleNumberOfDays"
                  placeholder="Enter  fixed Cycle number of days"
                  component={InputField}
                  label="Cycles Editor fixed  number of days  "
                  disabled={false}
                />
              </Box>
            </Flex>
          </Box>
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
      />
    </form >
  );
};

export default reduxForm<{}, DefineCyclesEditorFormProps>({
  form: formNames.DEFINE_ADMIN_CYCLE_EDITOR,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(DefineSchedulerJobForm);
