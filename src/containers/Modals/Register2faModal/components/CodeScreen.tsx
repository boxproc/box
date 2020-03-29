import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Button, CircleList } from 'components';

import { iconNamesConst } from 'consts';

const DashedBlock = styled.div`
  margin: 10px 0 20px;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.lighterGray};
  border: 1px dashed ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.code};
`;

interface ICodeScreen {
  code: string;
  dataUrl: string;
  onConfirm: () => void;
  onRegenerate: () => void;
}

const CodeScreen: React.FC<ICodeScreen> = ({
  onConfirm,
  onRegenerate,
  code,
  dataUrl,
}) => {
  return (
    <React.Fragment>
      <CircleList
        items={[
          'Download Google Authenticator from Google Play or Apple Store.',
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
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          text="Regenerate key"
          iconName={iconNamesConst.QRCODE}
          classNames={['is-bordered']}
          onClick={onRegenerate}
        />
        <Button
          text="Registration completed"
          withConfirmation={true}
          confirmationTitle="Confirmation"
          // tslint:disable-next-line: max-line-length
          confirmationText="Confirm BOX (new user) profile appeared in your Google Authenticator app."
          onClick={onConfirm}
        />
      </Flex>
    </React.Fragment>
  );
};

export default CodeScreen;
