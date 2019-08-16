import React from 'react';
import Cron from 'react-cron-generator';

import { CronGeneratorStyled } from './CronGeneratorStyled';

const CronGenerator: React.FC = () => {
  const [value, setValue] = React.useState(null);

  return (
    <CronGeneratorStyled>
      <Cron
        onChange={(e: React.MouseEvent) => setValue(e)}
        value={value}
        showResultText={true}
        showResultCron={true}
      />

    </CronGeneratorStyled>
  );
};

export default CronGenerator;
