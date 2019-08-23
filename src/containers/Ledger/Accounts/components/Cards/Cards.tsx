import React from 'react';

import { withSpinner } from 'components/Spinner';
import { Cell, Header, Table } from 'components/Table';

import { Box } from '@rebass/grid';
import { Button } from 'components/Buttons';
import {
    HandleGetLedgerAccountCards,
    HandleOrderLedgerAccountCard,
    LedgerAccountsCardsItemPrepared
} from 'store/domains';
import { TableCell } from 'types';

interface AccountCardsProps {
  ledgerAccountCurrentId: number;
  getLedgerAccountCards: HandleGetLedgerAccountCards;
  ledgerAccountCards: Array<LedgerAccountsCardsItemPrepared>;
  orderLedgerAccountCard: HandleOrderLedgerAccountCard;
}

type SCell<T extends keyof LedgerAccountsCardsItemPrepared> =
  TableCell<LedgerAccountsCardsItemPrepared[T]>;

export const Cards: React.FC<AccountCardsProps> = ({
  getLedgerAccountCards,
  ledgerAccountCurrentId,
  ledgerAccountCards,
  orderLedgerAccountCard,
}) => {
  React.useEffect(
    () => {
      getLedgerAccountCards(ledgerAccountCurrentId);
    },
    [getLedgerAccountCards, ledgerAccountCurrentId]
  );

  const columns = [
    {

      Header: <Header title="Pan Alias" />,
      maxWidth: 150,
      accessor: 'panAlias',
      Cell: (props: SCell<'panAlias'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      Header: <Header title="Pan Masked" />,
      accessor: 'panMasked',
      Cell: (props: SCell<'panMasked'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      Header: <Header title="Expiry Date" />,
      accessor: 'expiryDate',
      Cell: (props: SCell<'expiryDate'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      Header: <Header title="Status" />,
      maxWidth: 150,
      accessor: 'status',
      Cell: (props: SCell<'status'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
  ];

  return (
    <React.Fragment>
      <Box mb="25px">
        <Button
          type="reset"
          onClick={() => orderLedgerAccountCard(ledgerAccountCurrentId)}
          iconName="orderCard"
          text="Order Card"
        />
      </Box>
      <Table
        title="Account Cards"
        pageSize={5}
        data={ledgerAccountCards}
        columns={columns}
      />
    </React.Fragment>
  );
};

export default withSpinner()(Cards);
