import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';
import styled from 'theme';

const LogFileWrapper = styled.div`
  margin-bottom: 7px;
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.code};
`;

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

  return (
    <Modal
      name={modalName}
      title={`Log file${currentName}`}
      maxContainerWidth={500}
    >
      {logFile && logFile.split('/n').map((line: string, index: number) => (
        <LogFileWrapper key={index}>{line}</LogFileWrapper>
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

export default withModal(ShowLogFileModal);
