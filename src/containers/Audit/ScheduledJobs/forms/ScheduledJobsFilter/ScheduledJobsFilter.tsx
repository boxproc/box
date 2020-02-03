import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { MaskField, SelectField } from 'components';

import { dateFormat, maskFormat, } from 'consts';

import { HandleGetSchedulerNamesByInstitutionId } from 'store/domains';

import { SelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface ScheduledJobsFilterProps {
  institutionsOptions: Array<SelectValue>;
  getSchedulerNames: HandleGetSchedulerNamesByInstitutionId;
  institutionValue: SelectValue;
  schedulerNameOptions: Array<SelectValue>;
  isLoadingSchedulerNames: boolean;
  isDisabled: boolean;
}

const ScheduledJobsFilter: React.FC<ScheduledJobsFilterProps> = ({
  institutionsOptions,
  institutionValue,
  getSchedulerNames,
  schedulerNameOptions,
  isLoadingSchedulerNames,
  isDisabled,
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
          isDisabled={isDisabled}
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
          isDisabled={isDisabled}
        />
      </Box>
      <Box width="170px" p="10px" >
        <Field
          id="scheduledJobsDateTimeFrom"
          name="scheduledJobsDateTimeFrom"
          component={MaskField}
          label="Date&nbsp;/&nbsp;Time From"
          placeholder={dateFormat.DATE_TIME}
          mask={maskFormat.DATE_TIME}
          disabled={isDisabled}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
      <Box width="170px" p="10px" >
        <Field
          id="scheduledJobsDateTimeTo"
          name="scheduledJobsDateTimeTo"
          component={MaskField}
          label="Date&nbsp;/&nbsp;Time To"
          placeholder={dateFormat.DATE_TIME}
          mask={maskFormat.DATE_TIME}
          disabled={isDisabled}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
    </React.Fragment>
  );
};

export default ScheduledJobsFilter;
