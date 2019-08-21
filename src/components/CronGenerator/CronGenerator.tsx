import React from 'react';
import CronBuilder from 'react-cron-builder';

import 'react-cron-builder/dist/bundle.css';
import './styles.css';

const CronGenerator: React.FC = () => {
  const [value, setValue] = React.useState(null);

  console.log('---value', value);

  return (
    <React.Fragment>
      <CronBuilder
        cronExpression="*/4 2,12,22 * * 1-5"
        onChange={(e: React.MouseEvent) => setValue(e)}
        showResult={true}
      />
    </React.Fragment>
  );
};

export default CronGenerator;
