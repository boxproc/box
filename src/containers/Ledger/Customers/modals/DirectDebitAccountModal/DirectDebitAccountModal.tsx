import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Flex } from '@rebass/grid';

import { Button, List, Modal, T4 } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';
import { DirectDebitsMandatesTable } from './../../components';

import {
  IDirectDebitMandate,
  IPayloadDirectDebitAccountModal,
  THandleGetDirectDebitMandates,
} from 'store';

interface IDirectDebitAccountModal extends IWithModal {
  account: IPayloadDirectDebitAccountModal;
  getMandates: THandleGetDirectDebitMandates;
  mandates: ImmutableArray<IDirectDebitMandate>;
  isMandatesLoading: boolean;
}

const modalName = modalNamesConst.DIRECT_DEBIT_ACCOUNT;

const DirectDebitAccountModal: React.FC<IDirectDebitAccountModal> = ({
  account,
  closeModal,
  getMandates,
  mandates,
  isMandatesLoading,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      if (account) {
        getMandates(account.id);
      }
    },
    [getMandates, account]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const accountData = React.useMemo(
    () => account && [
      ['Customer ID', account.customerId],
      ['Account holder', account.accountholderName],
      ['Account no. ending', account.accountField1],
      ['Branch code', account.accountField2],
      ['Country code', account.countryCode],
      ['Provider Account Ref', account.providerAccountRef],
      ['Provider Customer Ref', account.providerCustomerRef],
      ['Status', account.status],
    ],
    [account]
  );

  return (
    <Modal
      name={modalName}
      title="Account details"
      containerWidth="750px"
      minContainerHeight="550px"
      isBluredBackdrop={true}
    >

      <List items={accountData} />

      <T4>Direct Debit Mandates</T4>
      <DirectDebitsMandatesTable
        isReadOnly={isReadOnly}
        isLoading={isMandatesLoading}
        data={mandates}
      />

      <Flex justifyContent="flex-end" mt="10px">
        <Button
          text="Close"
          onClick={handleOnCancel}
        />
      </Flex>
    </Modal>
  );
};

export default withModal(DirectDebitAccountModal);
