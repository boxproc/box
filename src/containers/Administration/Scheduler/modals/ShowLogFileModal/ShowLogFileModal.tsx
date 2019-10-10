import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, HighlightCode, Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

interface ShowLogFileModalProps extends WithModalProps {
  schedulerName: string;
  logFile: string;
}

const modalName = modalNamesConst.SHOW_SCHEDULER_LOG_FILE;

const ShowLogFileModal: React.FC<ShowLogFileModalProps> = ({
  closeModal,
  schedulerName,
  logFile,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const currentName = schedulerName ? `: "${schedulerName}"` : '';
  const preparedLogFile = logFile.split('\\n').join('\n').trim();

  return (
    <Modal
      name={modalName}
      title={`Log file${currentName}`}
      containerWidthAuto={true}
    >
      <HighlightCode
        value={preparedLogFile}
        fontSize={9}
      />
      <Flex justifyContent="flex-end">
        <Button
          text="close"
          onClick={handleOnCancel}
        />
      </Flex>
    </Modal>
  );
};

export default withModal(ShowLogFileModal);
