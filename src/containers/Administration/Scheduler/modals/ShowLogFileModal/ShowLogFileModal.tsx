import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Modal, PrismCode, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';
import { HandleGetSchedulerLogFile } from 'store/domains';

interface ShowLogFileModalProps extends WithModalProps {
  schedulerName: string;
  getSchedulerLogFile: HandleGetSchedulerLogFile;
  logFile: string;
}

const modalName = modalNamesConst.SHOW_SCHEDULER_LOG_FILE;

const ShowLogFileModal: React.FC<ShowLogFileModalProps> = ({
  closeModal,
  schedulerName,
  getSchedulerLogFile,
  logFile,
}) => {
  React.useEffect(
    () => {
      getSchedulerLogFile();
    },
    [getSchedulerLogFile]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const currentName = schedulerName ? `: "${schedulerName}"` : '';

  return (
    <Modal
      name={modalName}
      title={`Log file${currentName}`}
      maxContainerWidth={500}
    >
      {logFile && logFile.split('/n').map((line: string, index: number) => (
        <PrismCode key={index} code={line} />
      ))}
      <Flex justifyContent="flex-end">
        <Button
          text="close"
          onClick={handleOnCancel}
        />
      </Flex>
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(
  withModal(ShowLogFileModal)
);
