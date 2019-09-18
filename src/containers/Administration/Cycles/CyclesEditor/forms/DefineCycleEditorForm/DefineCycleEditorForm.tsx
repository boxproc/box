import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  ExternalSpinnerProps,
  Hr,
  InputField,
  OkCancelButtons,
  SelectField,
  TextField,
  withSpinner
} from 'components';

import {
  cycleTypesConst,
  executableTypeOptions,
  formNamesConst,
  iconNamesConst,
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
import { formErrorUtil } from 'utils';

interface DefineCyclesEditorFormProps extends ExternalSpinnerProps {
  institutionsOptions: Array<SelectValues>;
  cyclesEditorValue: SelectValues;
  addAdminCyclesEditor: HandleAddAdminCyclesEditor;
  updateAdminCyclesEditor: HandleUpdateAdminCyclesEditor;
  deleteAdminCyclesEditor: HandleDeleteAdminCycleEditor;
  onCancel: () => void;
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
  onCancel,
  institutionsOptions,
  mode,
  pristine,
  invalid,
  dirty,
}) => {
  const isEditMode = mode === 'edit';

  const defineAdminCyclesEditor = isEditMode
    ? updateAdminCyclesEditor
    : addAdminCyclesEditor;

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => defineAdminCyclesEditor(data)),
    [handleSubmit, defineAdminCyclesEditor]
  );

  const isMonthlyCycleFirstDay = cyclesEditorValue
    && (cyclesEditorValue.value === cycleTypesConst.BI_MONTHLY
      || cyclesEditorValue.value === cycleTypesConst.MONTHLY);

  const isWeeklyCycleFirstDay = cyclesEditorValue
    && (cyclesEditorValue.value === cycleTypesConst.BI_WEEKLY
      || cyclesEditorValue.value === cycleTypesConst.WEEKLY);

  const isFixedCycleNumberOfDays = cyclesEditorValue
    && cyclesEditorValue.value === cycleTypesConst.FIXED_NUMBER_OF_DAYS;

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
              isDisabled={isEditMode}
              validate={[formErrorUtil.required]}
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
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="description"
              name="description"
              placeholder="Enter Cycles Editor Description"
              component={TextField}
              label="Cycles Editor Description"
              validate={[formErrorUtil.required]}
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
              isDisabled={isEditMode}
              validate={[formErrorUtil.required]}
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
        <div>
          {mode === 'edit' && (
            <Button
              text="delete"
              iconName={iconNamesConst.DELETE}
              type="reset"
              withConfirmation={true}
              confirmationText={`Delete cycle editor record?`}
              onClick={() => deleteAdminCyclesEditor()}
            />
          )}
        </div>
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          onCancel={onCancel}
          withCancelConfirmation={dirty}
          disabledOk={pristine || invalid}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, DefineCyclesEditorFormProps>({
  form: formNamesConst.DEFINE_ADMIN_CYCLE_EDITOR,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(DefineCycleEditorForm));
