import React from 'react';

import styled from 'styled-components';

import { HideNotification } from 'store/domains';

const Wrapper = styled.div`
  position: fixed;
  top: 50px;
  right: 50px;
  text-transform: uppercase;
  max-width: 200px;
  width: auto;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: .5pt;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.blackColorOpacity8};
  color: ${({ theme }) => theme.whiteColor};
  z-index: 100;
`;

interface NotificationProps {
  isNotification: boolean;
  hideNotification: HideNotification;
  notificationMessage: string;
}

const Notification: React.FC<NotificationProps> = ({
  isNotification,
  hideNotification,
  notificationMessage,
}) => {
  React.useEffect(
    () => {
      if (isNotification) {
        setTimeout(() => hideNotification(), 2000);
      }
    },
    [hideNotification, isNotification]
  );
  return (
    <React.Fragment>
      {isNotification && (
        <Wrapper>{notificationMessage}</Wrapper>
      )}
    </React.Fragment>
  );
};

export default Notification;
