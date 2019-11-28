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
          isClearable={false}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width={[2 / 7]} p="10px" >
        <Field
          id="scheduler"
          name="scheduler"
          component={SelectField}
          options={schedulerNameOptions}
          label="Scheduler"
          placeholder="Select Scheduler"
          isLoading={isLoadingSchedulerNames}
        />
      </Box>
      <Box width="200px" p="10px" >
        <Field
          id="scheduledJobsDateTimeFrom"
          name="scheduledJobsDateTimeFrom"
          component={MaskField}
          label="Start Date&nbsp;/&nbsp;Time"
          placeholder={dateFormat.DATE_TIME}
          maskPlaceholder={dateFormat.DATE_TIME}
          mask={maskFormat.DATE_TIME}
          validate={[formErrorUtil.required, formErrorUtil.isDateTime]}
        />
      </Box>
      <Box width="200px" p="10px" >
        <Field
          id="scheduledJobsDateTimeTo"
          name="scheduledJobsDateTimeTo"
          component={MaskField}
          label="Finish Date&nbsp;/&nbsp;Time"
          placeholder={dateFormat.DATE_TIME}
          maskPlaceholder={dateFormat.DATE_TIME}
          mask={maskFormat.DATE_TIME}
          validate={[formErrorUtil.required, formErrorUtil.isDateTime]}
        />
      </Box>
    </React.Fragment>
  );
};

export default ScheduledJobsFilter;
