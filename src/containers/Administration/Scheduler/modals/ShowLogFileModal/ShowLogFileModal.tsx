import React from 'react';

import { Box, Flex } from '@rebass/grid';

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
      title={`Master log${currentName}`}
      maxContainerWidth={1400}
      containerHeightFull={true}
    >
      <HighlightCode
        value={preparedLogFile}
        height="calc(100vh - 150px)"
        fontSize={8.5}
      />
      <Flex justifyContent="flex-end">
        <Box mt="10px">
          <Button
            text="close"
            onClick={handleOnCancel}
          />
        </Box>
      </Flex>
    </Modal>
  );
};

export default withModal(ShowLogFileModal);
