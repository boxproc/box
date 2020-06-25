import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, HighlightCode, ISpinner, Modal, withSpinner } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { iconNamesConst, modalNamesConst, modalTypesConst } from 'consts';

import { HandleRefreshLogData, IPayloadLogModal } from 'store';
import { stringsUtil } from 'utils';

interface ILogModal extends IWithModal, ISpinner {
  data: IPayloadLogModal;
  refreshLogData: HandleRefreshLogData;
}

const modalName = modalNamesConst.LOG;

const LogModal: React.FC<ILogModal> = ({
  data,
  closeModal,
  refreshLogData,
  isLoading,
}) => {
  const modalTitle = React.useMemo(
    () => {
      if (!data) {
        return null;
      }

      const { title, logLocation } = data;
      const logTitle = title || 'Master log';
      const location = logLocation || '';

      return `${logTitle} ${location}`;
    },
    [data]
  );

  const preparedLogData = React.useMemo(
    () => {
      if (!data || !data.logData) {
        return '';
      }

      return stringsUtil.addNewLines(data.logData);
    },
    [data]
  );

  const handleCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title={modalTitle}
      containerWidth="1010px"
      type={modalTypesConst.VIEWING}
      minContainerHeight="calc(100vh - 20px)"
    >
      <HighlightCode
        value={preparedLogData}
        height="calc(100vh - 150px)"
        isScrollbarBottom={true}
      />
      <Box mt="10px">
        <Flex justifyContent="space-between">
          <Button
            text="Refresh"
            isLoading={isLoading}
            iconName={iconNamesConst.REFRESH}
            onClick={refreshLogData}
          />
          <Button
            text="close"
            onClick={handleCancel}
          />
        </Flex>
      </Box>
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(LogModal));
