import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Box, Flex } from '@rebass/grid';

import { Button, Modal, Paragraph } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { basePath, modalNamesConst, modalTypesConst, statusCodes } from 'consts';

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
    () => statusCode === statusCodes.SESSION_TIMEOUT || type === modalTypesConst.SESSION_ENDED,
    [statusCode, type]
  );

  const isReLogin = React.useMemo(
    () => isSessionEnded
      || statusCode === statusCodes.USER_NOT_AUTH
      || statusCode === statusCodes.NO_SESSION_ID
      || statusCode === statusCodes.NO_SESSION
      || statusCode === statusCodes.SESSION_TIMEOUT,
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

  const handleRelogin = React.useCallback(
    () => {
      storageUtil.clear();
      closeModal(modalName);
      urlUtil.openLocation(basePath);
    },
    [closeModal]
  );

  const handleClick = React.useCallback(
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
      maxContainerWidth={isVisibleDetail ? 1010 : 400}
      type={modalTypesConst.MESSAGE_MODAL}
      closeOnBackdrop={!isReLogin}
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
            isFocused={isReLogin}
            onClick={isReLogin ? handleRelogin : handleClick}
          />
        </Box>
        {details && (
          <Box mt="5px" ml="10px">
            <Button
              text={isVisibleDetail ? 'Hide Details' : 'Show Details'}
              onClick={handleSetVisibleDetails}
            />
          </Box>
        )}
      </Flex>
      {isVisibleDetail && (
        <Box mt="15px">
          <Paragraph
            light={true}
            size={10}
          >
            {details}
          </Paragraph>
        </Box>
      )}
    </Modal>
  );
};

export default withModal(MessageModal);
