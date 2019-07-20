import React from 'react';

import { Button } from 'components/Buttons';
import { Dropdown, Option } from 'components/Dropdown';

const SchedulerButtonsDropdown = () => {
  return (
    <Dropdown>
      <Option>
        <Button
          text="Execute Now"
          size="11"
          onClick={() => console.log('--- click on Execute Now')}
        />
      </Option>
      <Option>
        <Button
          text="Button 2"
          size="11"
          onClick={() => console.log('--- click on Button 2')}
        />
      </Option>
      <Option>
        <Button
          text="Button 3"
          size="11"
          onClick={() => console.log('--- click on Button 3')}
        />
      </Option>
    </Dropdown>
  );
};

export default SchedulerButtonsDropdown;
