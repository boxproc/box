import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Box, Flex } from '@rebass/grid';

import { Button, Modal, Paragraph } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { basePath, modalNamesConst, modalTypesConst, sessionStatusCodes } from 'consts';

import { PayloadMessageModal, SetIsRelogin } from 'store/domains';
import { storageUtil, urlUtil } from 'utils';

interface MessageModalProps extends RouteComponentProps, WithModalProps {
  payloadMessageModal: PayloadMessageModal;
  setIsRelogin: SetIsRelogin;
}

const modalName = modalNamesConst.MESSAGE;

const MessageModal: React.FC<MessageModalProps> = ({
  payloadMessageModal,
  closeModal,
  setIsRelogin,
}) => {
  const [isVisibleDetail, setVisibleDetail] = React.useState(false);
  const { title, message, details, statusCode, type } = payloadMessageModal;

  const isSessionEnded = React.useMemo(
    () => statusCode === sessionStatusCodes.SESSION_TIMEOUT
      || type === modalTypesConst.SESSION_ENDED,
    [statusCode, type]
  );

  const isReLogin = React.useMemo(
    () => isSessionEnded
      || statusCode === sessionStatusCodes.USER_NOT_AUTH
      || statusCode === sessionStatusCodes.NO_SESSION_ID
      || statusCode === sessionStatusCodes.NO_SESSION
      || statusCode === sessionStatusCodes.UNDEFINED_USER,
    [statusCode, isSessionEnded]
  );

  React.useEffect(
    () => {
      if (isReLogin) {
        setIsRelogin(true);
      }
    },
    [isReLogin, setIsRelogin]
  );

  const detailsButtonText = React.useMemo(
    () => isVisibleDetail ? 'Hide Details' : 'Show Details',
    [isVisibleDetail]
  );

  const handleRelogin = React.useCallback(
    () => {
      storageUtil.clear();
      urlUtil.openLocation(basePath);
    },
    []
  );

  const handleCloseModal = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const handleSetVisibleDetails = React.useCallback(
    () => setVisibleDetail(!isVisibleDetail),
    [setVisibleDetail, isVisibleDetail]
  );

  return (
    <Modal
      name={modalName}
      title={isSessionEnded ? 'Session ended' : title}
      maxContainerWidth={isVisibleDetail ? 1010 : 350}
      type={modalTypesConst.MESSAGE_MODAL}
      hideCloseIcon={isReLogin}
      zIndex="102"
    >
      <Paragraph light={true}>{message}</Paragraph>
      <Flex
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box mt="5px">
          <Button
            text={isReLogin ? 'Re Login' : 'Close'}
            isFocused={true}
            withAnimation={isReLogin}
            onClick={isReLogin ? handleRelogin : handleCloseModal}
          />
        </Box>
        {details && (
          <Box mt="5px" ml="10px">
            <Button
              text={detailsButtonText}
              onClick={handleSetVisibleDetails}
            />
          </Box>
        )}
      </Flex>
      {isVisibleDetail && (
        <Box mt="15px">
          <Paragraph
            light={true}
            size={9}
            monoFontFamily={true}
          >
            {details}
          </Paragraph>
        </Box>
      )}
    </Modal>
  );
};

export default withModal(MessageModal);
