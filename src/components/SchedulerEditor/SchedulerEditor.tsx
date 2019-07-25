import React from 'react';
import Cron from 'react-cron-generator';
import 'react-cron-generator/dist/cron-builder.css';

const SchedulerEditor: React.FC = () => {
  const [value, setValue] = React.useState(null);

  return (
    <div>
      <Cron
        onChange={(e: React.MouseEvent) => setValue(e)}
        value={value}
        showResultText={true}
        showResultCron={true}
      />

    </div>
  );
};

export default SchedulerEditor;
