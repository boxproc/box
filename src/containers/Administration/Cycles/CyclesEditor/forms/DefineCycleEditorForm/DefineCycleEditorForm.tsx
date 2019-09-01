import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import { OkCancelButtons } from 'components/Buttons/OkCancelButtons';
import { InputField, SelectField } from 'components/Form';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import {
  cycleTypes,
  executableTypeOptions,
  formNames,
  statusTypeCyclesOptions,
  typeOfCyclesEditorOptions,
  weeklyCycleTypeOptions
} from 'consts';

import {
  HandleAddAdminCyclesEditor,
  HandleDeleteAdminCycleEditor,
  HandleUpdateAdminCyclesEditor,
} from 'store/domains';

import { SelectValues } from 'types';

interface DefineCyclesEditorFormProps extends ExternalSpinnerProps {
  addAdminCyclesEditor: HandleAddAdminCyclesEditor;
  updateAdminCyclesEditor: HandleUpdateAdminCyclesEditor;
  deleteAdminCyclesEditor: HandleDeleteAdminCycleEditor;
  institutionsOptions: Array<SelectValues>;
  onCancel: () => void;
  cyclesEditorValue: SelectValues;
  currentCycleEditorId: number;
  isDisabledInstitutions?: boolean;
  isDisabledType?: boolean;
  isDirty: boolean;
  mode: 'add' | 'edit';
}

type DefineCycleEditorFormAllProps = DefineCyclesEditorFormProps &
  InjectedFormProps<{}, DefineCyclesEditorFormProps>;

const DefineCycleEditorForm: React.FC<DefineCycleEditorFormAllProps> = ({
  handleSubmit,
  addAdminCyclesEditor,
  updateAdminCyclesEditor,
  deleteAdminCyclesEditor,
  cyclesEditorValue,
  currentCycleEditorId,
  onCancel,
  isDisabledInstitutions,
  institutionsOptions,
  isDisabledType,
  isDirty,
  mode,
}) => {
  const defineAdminCyclesEditor = mode === 'add'
    ? addAdminCyclesEditor
    : updateAdminCyclesEditor;

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => defineAdminCyclesEditor(data)),
    [handleSubmit, defineAdminCyclesEditor]
  );

  const isMonthlyCycleFirstDay = cyclesEditorValue
    && (cyclesEditorValue.value === cycleTypes.BI_MONTHLY
      || cyclesEditorValue.value === cycleTypes.MONTHLY);

  const isWeeklyCycleFirstDay = cyclesEditorValue
    && (cyclesEditorValue.value === cycleTypes.BI_WEEKLY
      || cyclesEditorValue.value === cycleTypes.WEEKLY);

  const isFixedCycleNumberOfDays = cyclesEditorValue
    && cyclesEditorValue.value === cycleTypes.FIXED_NUMBER_OF_DAYS;

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
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="status"
              name="status"
              component={SelectField}
              label="Status"
              placeholder="Select Cycles Editor Status"
              options={statusTypeCyclesOptions}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="cycleType"
              name="cycleType"
              placeholder="Enter Cycles Type"
              component={SelectField}
              options={typeOfCyclesEditorOptions}
              label="Cycles Editor Type"
              disabled={false}
              isDisabled={isDisabledType}
            />
          </Box>
          {isMonthlyCycleFirstDay && (
            <Box width={[1 / 2]} p="10px">
              <Field
                id="monthlyCycleFirstDay"
                name="monthlyCycleFirstDay"
                placeholder="Enter Monthly Cycle First Day "
                component={InputField}
                label="Cycles Editor Monthly Cycle First Day"
                disabled={false}
                options={executableTypeOptions}
                isNumber={true}
              />
            </Box>
          )}
          {isWeeklyCycleFirstDay && (
            <Box width={[1 / 2]} p="10px">
              <Field
                id="weeklyCycleFirstDay"
                name="weeklyCycleFirstDay"
                placeholder="Enter Weekly Cycle First Day "
                component={SelectField}
                options={weeklyCycleTypeOptions}
                label="Cycles Editor Weekly Cycle First Day"
                disabled={false}
              />
            </Box>
          )}
          {isFixedCycleNumberOfDays && (
            <Box width={[1 / 2]} p="10px">
              <Field
                id="fixedCycleNumberOfDays"
                name="fixedCycleNumberOfDays"
                placeholder="Enter fixed Cycle Number of Days"
                component={InputField}
                label="Cycles Editor fixed Number of Days"
                disabled={false}
                isNumber={true}
              />
            </Box>
          )}
        </Flex>
      </Box>
      <Hr />
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        {mode === 'edit' && (
          <Button
            text="delete"
            iconName="delete"
            type="reset"
            withConfirmation={true}
            confirmationText={`Delete cycle editor record?`}
            onClick={() => deleteAdminCyclesEditor(currentCycleEditorId)}
          />
        )}
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          onCancel={onCancel}
          rightPosition={true}
          withCancelConfirmation={isDirty}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, DefineCyclesEditorFormProps>({
  form: formNames.DEFINE_ADMIN_CYCLE_EDITOR,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(DefineCycleEditorForm));
