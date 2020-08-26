import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { SelectField } from 'components';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

const InstitutionsWrapper = styled(Box)`
  max-width: 50%;
  min-width: 300px;
  padding: 8px;
`;

interface IUiSessionsFilter {
  institutionsOptions: Array<ISelectValue>;
  isDisabled: boolean;
}

const UiSessionsFilter: React.FC<IUiSessionsFilter> = ({
  institutionsOptions,
  isDisabled,
}) => {
  return (
    <React.Fragment>
      <InstitutionsWrapper>
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          placeholder="Select Institution"
          options={institutionsOptions}
          isMulti={true}
          isDisabled={isDisabled}
          isRequired={true}
          validate={[formErrorUtil.isRequired]}
        />
      </InstitutionsWrapper>
    </React.Fragment>
  );
};

export default UiSessionsFilter;
