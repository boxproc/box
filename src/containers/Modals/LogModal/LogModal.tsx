import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, HighlightCode, Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { PayloadLogModal } from 'store/domains';

interface LogModalProps extends WithModalProps {
  data: PayloadLogModal;
}

const modalName = modalNamesConst.LOG_MODAL;

const LogModal: React.FC<LogModalProps> = ({
  data,
  closeModal,
}) => {
  const currentName = React.useMemo(
    () => data.title ? `: "${data.title}"` : '',
    [data]
  );

  const preparedLogData = React.useMemo(
    () => data.logData
      ? data.logData.split('\\n').join('\n').trim()
      : '',
    [data]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title={`Master log${currentName}`}
      maxContainerWidth={1400}
      containerHeightFull={true}
    >
      <HighlightCode
        value={preparedLogData}
        height="calc(100vh - 150px)"
        fontSize={8.5}
        whiteSpacePre={true}
        isScrollbarBottom={true}
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

export default withModal(LogModal);
