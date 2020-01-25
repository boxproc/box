import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Paragraph, withSpinner } from 'components';

import AprsTable from './AprsTable';
import RevolvingCreditTable from './RevolvingCreditTale';
import TransactionsTable from './TransactionsTable';

import {
  IllustrationProductAprRevolvingCredit,
  IllustrationProductStatementsRevolvingCredit,
  IllustrationProductTransactionsRevolvingCredit,
} from 'store/domains';

const TableWrapper = styled(Box)`
  max-width: 100%;
  margin-top: 10px;
  padding: 10px;
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
    <React.Fragment>
      <TableWrapper>
        <Paragraph bold={true} light={true}>Transactions</Paragraph>
        <TransactionsTable data={transactionsData} />
      </TableWrapper>
      <Flex alignItems="flex-start" flexWrap="wrap" >
        <TableWrapper>
          <Paragraph bold={true} light={true}>Totals</Paragraph>
          <RevolvingCreditTable data={statementsData} />
        </TableWrapper>
        <TableWrapper>
          <Paragraph bold={true} light={true}>APRs</Paragraph>
          <AprsTable data={aprsData} />
        </TableWrapper>
      </Flex>
    </React.Fragment>
  );
};

export default withSpinner()(RevolvingCreditIllustrationTables);
