import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Button } from 'components/Buttons';
import CronGenerator from 'components/CronGenerator';
import Modal from 'components/Modal';
import { Hr, SmallText } from 'components/Text';

import { modalNames } from 'consts';

import { CloseModal, HandleSetCronExpression } from 'store/domains';
import { stringsUtil } from 'utils';

const TopLine = styled.div`
  padding-bottom: 45px;
`;

const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 20px 20px;
`;

interface GenerateCronExpressionModalProps {
  closeModal: CloseModal;
  currentCronExpression: string;
  setCronExpression: HandleSetCronExpression;
  cronExpression: string;
}

const modalName = modalNames.GENERATE_CRON_EXPRESSION;

const GenerateCronExpressionModal: React.FC<GenerateCronExpressionModalProps> = ({
  closeModal,
  currentCronExpression,
  setCronExpression,
  cronExpression,
}) => {
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(
    () => {
      if (isCopied) {
        setTimeout(() => setIsCopied(false), 3000);
      }
    },
    [isCopied, setIsCopied]
  );

  const handleCopyToClipboard = React.useCallback(
    () => {
      try {
        stringsUtil.copyTextToClipboard(cronExpression);
        setIsCopied(true);
      } catch (err) {
        setIsCopied(false);
      }
    },
    [cronExpression]
  );

  return (
    <Modal
      name={modalName}
      title="Generate Cron Expression"
      maxContainerWidth={670}
      minContainerHeight={460}
    >
      <TopLine>
        <CronGenerator
          setValue={setCronExpression}
          initialValue={currentCronExpression}
        />
      </TopLine>
      <BottomLine>
        <Hr />
        <Flex
          alignItems="center"
          justifyContent="space-between"
        >
          <Box mt="10px">
            <Flex alignItems="center">
              {cronExpression && (
                <Button
                  text="Copy to clipboard"
                  type="reset"
                  iconName="copy"
                  onClick={handleCopyToClipboard}
                />
              )}
              {isCopied && (
                <Box ml="7px">
                  <SmallText>Copied!</SmallText>
                </Box>
              )}
            </Flex>
          </Box>
          <Box mt="10px">
            <Button
              text="Close"
              type="reset"
              onClick={() => closeModal(modalName)}
            />
          </Box>
        </Flex>
      </BottomLine>
    </Modal>
  );
};

export default GenerateCronExpressionModal;
