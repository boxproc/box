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
  cycleTypesCodes,
  executableTypeOptions,
  formNamesConst,
  iconNamesConst,
  statusTypeCyclesOptions,
  typeOfCyclesEditorOptions,
  weeklyCycleTypeOptions
} from 'consts';

import {
  HandleAddCyclesEditor,
  HandleDeleteCycleEditor,
  HandleUpdateCyclesEditor,
} from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface DefineCyclesEditorFormProps extends ExternalSpinnerProps {
  institutionsOptions: Array<SelectValues>;
  cyclesEditorValue: SelectValues;
  addCyclesEditor: HandleAddCyclesEditor;
  updateCyclesEditor: HandleUpdateCyclesEditor;
  deleteCyclesEditor: HandleDeleteCycleEditor;
  onCancel: () => void;
  mode: 'add' | 'edit';
}

type DefineCycleEditorFormAllProps = DefineCyclesEditorFormProps &
  InjectedFormProps<{}, DefineCyclesEditorFormProps>;

const DefineCycleEditorForm: React.FC<DefineCycleEditorFormAllProps> = ({
  handleSubmit,
  addCyclesEditor,
  updateCyclesEditor,
  deleteCyclesEditor,
  cyclesEditorValue,
  onCancel,
  institutionsOptions,
  mode,
  pristine,
  dirty,
}) => {
  const isEditMode = React.useMemo(
    () => mode === 'edit',
    [mode]
  );

  const submitFormAction = React.useMemo(
    () => isEditMode ? updateCyclesEditor : addCyclesEditor,
    [isEditMode, updateCyclesEditor, addCyclesEditor]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitFormAction),
    [handleSubmit, submitFormAction]
  );

  const isMonthlyCycleFirstDay = React.useMemo(
    () => cyclesEditorValue
      && (cyclesEditorValue.value === cycleTypesCodes.BI_MONTHLY
        || cyclesEditorValue.value === cycleTypesCodes.MONTHLY),
    [cyclesEditorValue]
  );

  const isWeeklyCycleFirstDay = React.useMemo(
    () => cyclesEditorValue
      && (cyclesEditorValue.value === cycleTypesCodes.BI_WEEKLY
        || cyclesEditorValue.value === cycleTypesCodes.WEEKLY),
    [cyclesEditorValue]
  );

  const isFixedCycleNumberOfDays = React.useMemo(
    () => cyclesEditorValue
      && cyclesEditorValue.value === cycleTypesCodes.FIXED_NUMBER_OF_DAYS,
    [cyclesEditorValue]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box mx="-10px" >
        <Flex flexWrap="wrap">
          <Box width={[1 / 2]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              component={SelectField}
              label="Institution"
              placeholder="Select Institution"
              options={institutionsOptions}
              isDisabled={isEditMode}
              isClearable={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="status"
              name="status"
              component={SelectField}
              label="Status"
              placeholder="Select Status"
              options={statusTypeCyclesOptions}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="description"
              name="description"
              placeholder="Enter Description"
              component={TextField}
              label="Description"
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="cycleType"
              name="cycleType"
              placeholder="Select Cycles Type"
              component={SelectField}
              options={typeOfCyclesEditorOptions}
              label="Cycles Type"
              isDisabled={isEditMode}
              validate={[formErrorUtil.required]}
            />
          </Box>
          {isMonthlyCycleFirstDay && (
            <Box width={[1 / 2]} p="10px">
              <Field
                id="monthlyCycleFirstDay"
                name="monthlyCycleFirstDay"
                placeholder="Enter Monthly First Day "
                component={InputField}
                label="Monthly Cycle First Day"
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
                placeholder="Enter Weekly First Day "
                component={SelectField}
                options={weeklyCycleTypeOptions}
                label="Weekly First Day"
              />
            </Box>
          )}
          {isFixedCycleNumberOfDays && (
            <Box width={[1 / 2]} p="10px">
              <Field
                id="fixedCycleNumberOfDays"
                name="fixedCycleNumberOfDays"
                placeholder="Enter Fixed Number of Days"
                component={InputField}
                label="Fixed Number of Days"
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
              confirmationText={`Delete cycle record?`}
              onClick={deleteCyclesEditor}
            />
          )}
        </div>
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          onCancel={onCancel}
          withCancelConfirmation={dirty}
          disabledOk={pristine}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, DefineCyclesEditorFormProps>({
  form: formNamesConst.DEFINE_CYCLE_EDITOR,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(DefineCycleEditorForm));
