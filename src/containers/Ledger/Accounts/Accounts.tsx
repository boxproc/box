import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { AccountsFilterForm } from 'containers/Ledger/Accounts/forms';

import { modalNames } from 'consts';

import { tableColumns } from './accountComponents';

import { OpenModal } from 'store/domains';

import { SelectValues } from 'types';

const data = [
  {
    id: 1,
    accountAlias: '0001',
    customerId: 1,
    customerFirstName: 'John',
    customerLastName: 'Doe',
    productName: 'Debit',
    status: 'A',
    balanceSettled: 1,
    balanceAvailable: 1,
    amountDueRepayment: 1,
    balanceLimit: 1,
    balanceLimitShared: 1,
    accruedInterest: 1,
  },
  {
    id: 2,
    accountAlias: '0002',
    customerId: 1,
    customerFirstName: 'Jane',
    customerLastName: 'Doe',
    productName: 'Loan',
    status: 'A',
    balanceSettled: 1,
    balanceAvailable: 1,
    amountDueRepayment: 1,
    balanceLimit: 1,
    balanceLimitShared: 1,
    accruedInterest: 1,
  },
];

export interface AccountsProps {
  institutionsOptions: Array<SelectValues>;
  openModal: OpenModal;
}

const Accounts: React.FC<AccountsProps> = ({
  institutionsOptions,
  openModal,
}) => {
  React.useEffect(
    () => {
      // getLedgerAccounts();
    },
    []
  );
  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
          // getLedgerAccountId(rowInfo.original.id);
          openModal({
            name: modalNames.EDIT_LEDGER_ACCOUNT,
          });
        },
      };
    },
    [openModal]
  );
  return (
    <TablePage
      title="Accounts"
      data={data}
      columns={tableColumns}
      hint="Double Click on Row to View Account"
      getTrGroupProps={handleOnClickRow}
      FilterForm={
        <AccountsFilterForm
          institutionsOptions={institutionsOptions}
          initialValues={{
            institutionId: institutionsOptions[0],
          }}
        />
      }
    />
  );
};

export default withSpinner()(Accounts);
