import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { ExternalLink, T2, withSpinner } from 'components';
import { ManualTransactionForm } from './forms';

import { HandleMakeLedgerTransaction } from 'store/domains';

import { stringsUtil } from 'utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 210px);
  max-width: 450px;
  margin: 0 auto;
`;

interface ManualTransactionProps extends RouteComponentProps {
  makeLedgerTransaction: HandleMakeLedgerTransaction;
}

const ManualTransaction: React.FC<ManualTransactionProps> = ({
  location,
  makeLedgerTransaction,
}) => {
  return (
    <Wrapper>
      <Flex alignItems="center">
        <Box mb="15px" mr="15px">
          <ExternalLink
            text="HELP"
            link={stringsUtil.getCurrentBPSUrl(location.pathname)}
            grayStyle={true}
          />
        </Box>
        <T2>Manual Transaction</T2>
      </Flex>
      <ManualTransactionForm
        makeLedgerTransaction={makeLedgerTransaction}
      />
    </Wrapper>
  );
};
export default withSpinner({
  isFixed: true,
})(withRouter(ManualTransaction));
