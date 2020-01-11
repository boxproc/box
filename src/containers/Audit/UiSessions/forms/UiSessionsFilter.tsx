import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import styled from 'styled-components';

import { SelectField } from 'components';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

const InstitutionsWrapper = styled(Box)`
  max-width: 50%;
  min-width: 25%;
  padding: 10px;
`;

interface UiSessionsFilterProps {
  institutionsOptions: Array<SelectValues>;
}

const UiSessionsFilter: React.FC<UiSessionsFilterProps> = ({
  institutionsOptions,
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
          validate={[formErrorUtil.required]}
        />
      </InstitutionsWrapper>
    </React.Fragment>
  );
};

export default UiSessionsFilter;
