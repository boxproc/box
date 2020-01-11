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
    () => data.title ? data.title : 'Master log',
    [data]
  );

  const preparedLogData = React.useMemo(
    () => data.logData
      ? stringsUtil.addNewLines(data.logData)
      : '',
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
      monoTitleStr={data.logLocation}
      maxContainerWidth={1400}
      containerHeightFull={true}
    >
      <HighlightCode
        value={preparedLogData}
        height="calc(100vh - 150px)"
        whiteSpacePre={true}
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
