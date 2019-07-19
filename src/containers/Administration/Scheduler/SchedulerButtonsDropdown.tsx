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
          text="Button 2"
          onClick={() => console.log('--- click on Button 2')}
        />
      </Option>
      <Option>
        <Button
          text="Button 3"
          onClick={() => console.log('--- click on Button 3')}
        />
      </Option>
    </Dropdown>
  );
};

export default SchedulerButtonsDropdown;
