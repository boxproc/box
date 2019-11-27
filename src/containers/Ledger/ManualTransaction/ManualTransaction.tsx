import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { Box, Flex } from '@rebass/grid';

import { ExternalLink, T2, withSpinner } from 'components';
import { ManualTransactionForm } from './forms';

import { HandleMakeLedgerTransaction } from 'store/domains';

import { stringsUtil } from 'utils';

interface ManualTransactionProps extends RouteComponentProps {
  makeLedgerTransaction: HandleMakeLedgerTransaction;
}

const ManualTransaction: React.FC<ManualTransactionProps> = ({
  location,
  makeLedgerTransaction,
}) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
export default withSpinner({
  isFixed: true,
})(withRouter(ManualTransaction));
