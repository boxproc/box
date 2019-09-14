import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'styled-components';

import { Button, CircleList, Hr } from 'components';

import { iconNamesConst } from 'consts';

const DashedBlock = styled.div`
  margin: 10px 0 20px;
  padding: 10px;
  font-size: 14px;
  border: 1px dashed ${({ theme }) => theme.gray};
  font-size: 14px;
  font-family: ${({ theme }) => theme.code};
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
      <CircleList
        items={[
          'Download Google Authenticator from Play Play or Apple Store.',
          // tslint:disable-next-line: max-line-length
          'Launch Google Authenticator on your mobile phone and follow instructions to complete registration.',
        ]}
      />
      {dataUrl && (
        <Flex justifyContent="center">
          <Box my="15px">
            <img alt="" src={dataUrl} />
          </Box>
        </Flex>
      )}
      {code && (
        <DashedBlock>{code}</DashedBlock>
      )}
      <Hr />
      <Flex justifyContent="space-between">
        <Button
          text="Regenerate key"
          iconName={iconNamesConst.QRCODE}
          onClick={onRegenerate}
        />
        <Button
          text="Registration completed"
          withConfirmation={true}
          confirmationTitle="Confirmation"
          confirmationText="Confirm BOX UI profile appeared in your Google Authentication app."
          onClick={onConfirm}
        />
      </Flex>
    </React.Fragment>
  );
};

export default CodeScreen;
