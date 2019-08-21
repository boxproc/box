import React from 'react';
import CronBuilder from 'react-cron-builder';

import { CronGeneratorStyled } from './CronGeneratorStyled';

const CronGenerator: React.FC = () => {
  const [value, setValue] = React.useState(null);

  React.useEffect(
    () => {
      const result = document.querySelector('.cron-builder__result');
      result && result.addEventListener('click', () => document.execCommand('copy'));
    },
    [value]
  );

  return (
    <CronGeneratorStyled>
      <CronBuilder
        cronExpression="*/4 2,12,22 * * 1-5"
        onChange={(e: React.MouseEvent) => setValue(e)}
        showResult={true}
      />
    </CronGeneratorStyled>
  );
};

export default CronGenerator;
