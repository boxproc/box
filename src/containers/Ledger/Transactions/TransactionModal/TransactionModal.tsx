import React from 'react';

import styled from 'theme';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { Panel, Tabs } from 'components/Tabs';

import { modalNames } from 'consts';

import { CloseModal, LedgerTransactionItemPrepared } from 'store/domains';

interface EditTransactionModalProps {
  closeModal: CloseModal;
  ledgerCurrentTransactionGeneral: Partial<LedgerTransactionItemPrepared>;
  ledgerCurrentTransactionCard: Partial<LedgerTransactionItemPrepared>;
  ledgerCurrentTransactionBalance: Partial<LedgerTransactionItemPrepared>;
}

const TableWrapper = styled.div`
  margin: 0 -20px 30px;

  table {
    font-size: 13px;
    width: 100%;
    border-collapse: collapse;
  }

  td {
    padding: 10px 25px;
    vertical-align: top;
  }

  td:first-child {
    width: 200px;
    color: ${({ theme }) => theme.darkGrayColor};
    text-transform: capitalize;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.lightGrayColor};
  }

  tr:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

interface TableProps {
  data: object;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <table>
        <tbody>
          {Object.entries(data).map((el, index) => (
            <tr key={index}>
              <td>{el[0]
                .replace(/([A-Z])/g, ' $1')}</td>
              <td>{el[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

const modalName = modalNames.LEDGER_TRANSACTION;

const EditTransactionModal: React.FC<EditTransactionModalProps> = ({
  closeModal,
  ledgerCurrentTransactionGeneral,
  ledgerCurrentTransactionCard,
  ledgerCurrentTransactionBalance,
}) => {
  return (
    <Modal
      name={modalName}
      title="Transaction"
      closeOnBackdrop={true}
      maxContainerWidth={600}
      minContainerHeight={472}
    >
      <Tabs>
        <Panel title="General">
          <Table data={ledgerCurrentTransactionGeneral} />
        </Panel>
        <Panel title="Card">
          <Table data={ledgerCurrentTransactionCard} />
        </Panel>
        <Panel title="Balance">
          <Table data={ledgerCurrentTransactionBalance} />
        </Panel>
      </Tabs>
      <Button
        text="close"
        onClick={closeModal}
      />
    </Modal>
  );
};

export default EditTransactionModal;
