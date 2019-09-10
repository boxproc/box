import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'styled-components';

import { Button } from 'components/Buttons';
import CircleList from 'components/CircleList';
import { Hr } from 'components/Delimiter';

const DashedBlock = styled.div`
  margin: 10px 0 20px;
  padding: 10px;
  font-size: 14px;
  border: 1px dashed ${({ theme }) => theme.grayColor};
  font-size: 14px;
  font-family: ${({ theme }) => theme.codeFont};
`;

interface CodeScreenProps {
  code: string;
  dataUrl: string;
  onConfirm: () => void;
  onRegenerate: () => void;
}

const CodeScreen: React.FC<CodeScreenProps> = ({
  onConfirm,
  onRegenerate,
  code,
  dataUrl,
}) => {
  return (
    <React.Fragment>
      <CircleList items={['Install the Google Authenticator app on your phone.']} />
      {dataUrl && (
        <React.Fragment>
          <CircleList items={['Scan the QR code in the app.']} />
          <Flex justifyContent="center">
            <Box my="15px">
              <img alt="" src={dataUrl} />
            </Box>
          </Flex>
        </React.Fragment>
      )}
      {code && (
        <React.Fragment>
          <CircleList items={['Or manually entry the key into the app.']} />
          <DashedBlock>{code}</DashedBlock>
        </React.Fragment>
      )}
      <Hr />
      <Flex justifyContent="space-between">
        <Button
          text="Regenerate"
          iconName="qrcode"
          onClick={onRegenerate}
        />
        <Button
          text="Confirm"
          withConfirmation={true}
          confirmationTitle="Enable Two-Factor Authentication"
          confirmationText="Confirm BOX UI profile is appeared in your Google Authentication app?"
          onClick={onConfirm}
        />
      </Flex>
    </React.Fragment>
  );
};

export default CodeScreen;
