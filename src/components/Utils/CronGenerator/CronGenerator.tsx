import React from 'react';
import CronBuilder from 'react-cron-builder';

import { CronGeneratorStyled } from './CronGeneratorStyled';

import { ChangeFiledValue } from 'types';

interface CronGeneratorProps {
  initialValue?: string;
  formName?: string;
  fieldName?: string;
  onChange: ChangeFiledValue;
  action?: () => void;
}

const CronGenerator: React.FC<CronGeneratorProps> = ({
  initialValue,
  formName,
  fieldName,
  onChange,
  action,
}) => {
  const handleChange = React.useCallback(
    value => {
      onChange(formName, fieldName, value);
      if (action) {
        action();
      }
    },
    [formName, fieldName, action, onChange]
  );

  return (
    <CronGeneratorStyled>
      <CronBuilder
        cronExpression={initialValue}
        onChange={handleChange}
        showResult={false}
      />
    </CronGeneratorStyled>
  );
};

export default CronGenerator;
