import React from 'react';

import { Button } from 'components/Buttons';
import { Dropdown, Option } from 'components/Dropdown';
import { HandleSendAdminSchedulerAction } from 'store/domains';

interface SchedulerButtonsDropdownProps {
  currentId: number;
  sendAdminSchedulerAction: HandleSendAdminSchedulerAction;
}

const SchedulerButtonsDropdown: React.FC<SchedulerButtonsDropdownProps> = ({
  currentId,
  sendAdminSchedulerAction,
}) => {
  return (
    <Dropdown>
      <Option>
        <Button
          text="Execute Now"
          size="11"
          onClick={() => sendAdminSchedulerAction({
            taskId: currentId,
            taskCommand: 'execute_task',
          })}
        />
      </Option>
      <Option>
        <Button
          text="Stop Job"
          size="11"
          onClick={() => sendAdminSchedulerAction({
            taskId: currentId,
            taskCommand: 'stop',
          })}
        />
      </Option>
      <Option>
        <Button
          text="Start Job"
          size="11"
          onClick={() => sendAdminSchedulerAction({
            taskId: currentId,
            taskCommand: 'start',
          })}
        />
      </Option>
      <Option>
        <Button
          text="Pause Job"
          size="11"
          onClick={() => sendAdminSchedulerAction({
            taskId: currentId,
            taskCommand: 'pause',
          })}
        />
      </Option>
      <Option>
        <Button
          text="Resume Job"
          size="11"
          onClick={() => sendAdminSchedulerAction({
            taskId: currentId,
            taskCommand: 'resume',
          })}
        />
      </Option>
    </Dropdown>

  );
};

export default SchedulerButtonsDropdown;
