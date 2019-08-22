import React from 'react';
import CronBuilder from 'react-cron-builder';

import { CronGeneratorStyled } from './CronGeneratorStyled';

interface CronGeneratorProps {
  initialValue?: string;
  setValue: (value: string) => void;
}

const CronGenerator: React.FC<CronGeneratorProps> = ({
  initialValue,
  setValue,
}) => {
  React.useEffect(
    () => {
      return () => {
        setValue(null);
      };
    },
    [setValue]
  );

  return (
    <CronGeneratorStyled>
      <CronBuilder
        cronExpression={initialValue}
        onChange={(value: string) => setValue(value)}
        showResult={true}
      />
    </CronGeneratorStyled>
  );
};

export default CronGenerator;
