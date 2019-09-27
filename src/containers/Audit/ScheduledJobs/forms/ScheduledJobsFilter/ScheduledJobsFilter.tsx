import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { MaskField, SelectField } from 'components';

import { dateFormat, maskFormat, } from 'consts';

import { HandleGetSchedulerNamesByInstitutionId } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface ScheduledJobsFilterProps {
  institutionsOptions: Array<SelectValues>;
  getSchedulerNames: HandleGetSchedulerNamesByInstitutionId;
  institutionValue: SelectValues;
  schedulerNameOptions: Array<SelectValues>;
  isLoadingSchedulerNames: boolean;
}

const ScheduledJobsFilter: React.FC<ScheduledJobsFilterProps> = ({
  institutionsOptions,
  institutionValue,
  getSchedulerNames,
  schedulerNameOptions,
  isLoadingSchedulerNames,
}) => {
  const currentInstitutionId = institutionValue && institutionValue.value;

  React.useEffect(
    () => {
      if (currentInstitutionId) {
        getSchedulerNames(currentInstitutionId);
      }
    },
    [getSchedulerNames, currentInstitutionId]
  );

  return (
    <React.Fragment>
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
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width={[1 / 4]} p="10px" >
        <Field
          id="scheduler"
          name="scheduler"
          component={SelectField}
          options={schedulerNameOptions}
          label="Scheduler"
          placeholder="Select Scheduler"
          disabled={false}
          isLoading={isLoadingSchedulerNames}
        />
      </Box>
      <Box width="150px" p="10px" >
        <Field
          id="startDatetime"
          name="startDatetime"
          component={MaskField}
          label="Start Datetime"
          placeholder={dateFormat.DATE}
          mask={maskFormat.DATE}
          maskChar={null}
          disabled={false}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width="150px" p="10px" >
        <Field
          id="finishDatetime"
          name="finishDatetime"
          component={MaskField}
          label="Finish Date"
          placeholder={dateFormat.DATE}
          mask={maskFormat.DATE}
          maskChar={null}
          disabled={false}
          validate={[formErrorUtil.required]}
        />
      </Box>
    </React.Fragment>
  );
};

export default ScheduledJobsFilter;
