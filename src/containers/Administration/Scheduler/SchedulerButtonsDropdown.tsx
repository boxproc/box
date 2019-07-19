import React from 'react';

import { Button } from 'components/Buttons';
import { Dropdown, Option } from 'components/Dropdown';

const SchedulerButtonsDropdown = () => {
  return (
    <Dropdown>
      <Option>
        <Button
          text="Execute Now"
          onClick={() => console.log('--- click on Execute Now')}
        />
      </Option>
      <Option>
        <Button
          text="Stop Job"
          onClick={() => console.log('--- click on Button 2')}
        />
      </Option>
      <Option>
        <Button
          text="Start Job"
          onClick={() => console.log('--- click on Button 3')}
        />
      </Option>
      <Option>
        <Button
          text="Pause Job"
          onClick={() => console.log('--- click on Button 3')}
        />
      </Option>
      <Option>
        <Button
          text="Resume Job"
          onClick={() => console.log('--- click on Button 3')}
        />
      </Option>
    </Dropdown>
  );
};

export default SchedulerButtonsDropdown;
