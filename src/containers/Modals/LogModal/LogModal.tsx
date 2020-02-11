import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, ExternalSpinnerProps, HighlightCode, Modal, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst, modalNamesConst } from 'consts';

import { HandleRefreshLogData, PayloadLogModal } from 'store/domains';
import { stringsUtil } from 'utils';

interface LogModalProps extends WithModalProps, ExternalSpinnerProps {
  data: PayloadLogModal;
  refreshLogData: HandleRefreshLogData;
}

const modalName = modalNamesConst.LOG;

const LogModal: React.FC<LogModalProps> = ({
  data,
  closeModal,
  refreshLogData,
  isLoading,
}) => {
  const title = React.useMemo(
    () => {
      if (!data || !data.title) {
        return 'Master log';
      }

      return data.title;
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

  const monoTitleStr = React.useMemo(
    () => data && data.logLocation,
    [data]
  );

  const buttonText = React.useMemo(
    () => isLoading ? 'Refreshing...' : 'Refresh',
    [isLoading]
  );

  const handleCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title={title}
      monoTitleStr={monoTitleStr}
      maxContainerWidth={1400}
      containerHeightFull={true}
    >
      <HighlightCode
        value={preparedLogData}
        height="calc(100vh - 150px)"
        isScrollbarBottom={true}
      />
      <Box mt="10px">
        <Flex justifyContent="space-between">
          <Button
            text={buttonText}
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
