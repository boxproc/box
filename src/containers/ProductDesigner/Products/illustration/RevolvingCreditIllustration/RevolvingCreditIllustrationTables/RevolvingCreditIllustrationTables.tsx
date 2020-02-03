import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { T4, withSpinner } from 'components';

import AprsTable from './AprsTable';
import RevolvingCreditTable from './RevolvingCreditTable';
import TransactionsTable from './TransactionsTable';

import {
  IllustrationProductAprRevolvingCredit,
  IllustrationProductStatementsRevolvingCredit,
  IllustrationProductTransactionsRevolvingCredit,
} from 'store/domains';

const TablesWrapper = styled(Flex)`
  margin: 0 -10px;

  .table {
    max-width: 100%;
    padding: 10px;
  }
`;

interface IllustrationProductFormProps {
  transactionsData: Array<IllustrationProductTransactionsRevolvingCredit>;
  aprsData: Array<IllustrationProductAprRevolvingCredit>;
  statementsData: Array<IllustrationProductStatementsRevolvingCredit>;
}

const RevolvingCreditIllustrationTables: React.FC<IllustrationProductFormProps> = ({
  transactionsData,
  statementsData,
  aprsData,
}) => {
  return (
    <Box mt="10px">
      <T4>Transactions</T4>
      <TransactionsTable data={transactionsData} />
      <TablesWrapper alignItems="flex-start" flexWrap="wrap" >
        <div className="table">
          <T4>Totals</T4>
          <RevolvingCreditTable data={statementsData} />
        </div>
        <div className="table">
          <T4>APRs</T4>
          <AprsTable data={aprsData} />
        </div>
      </TablesWrapper>
    </Box>
  );
};

export default withSpinner()(RevolvingCreditIllustrationTables);
