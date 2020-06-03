import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

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
        getMandates({
          accountId: account.id,
          isBoxAccount: false,
        });
      }
    },
    [getMandates, account]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const accountData1 = React.useMemo(
    () => {
      if (!account) {
        return null;
      }

      const {
        customerId,
        accountholderName,
        accountField1,
        accountField3,
        accountType,
        countryCode,
      } = account;

      return [
        ['Customer ID', customerId],
        ['Account holder', accountholderName],
        ['Account no. ending', accountField1],
        ['Bank name', accountField3],
        ['Account type', accountType],
        ['Country code', countryCode],
      ];
    },
    [account]
  );
  const accountData2 = React.useMemo(
    () => {
      if (!account) {
        return null;
      }

      const {
        providerAccountRef,
        providerCustomerRef,
        status,
        providerName,
      } = account;

      return [
        ['Provider Account Ref', providerAccountRef],
        ['Provider Customer Ref', providerCustomerRef],
        ['Provider', providerName],
        ['Status', status],
      ];
    },
    [account]
  );

  return (
    <Modal
      name={modalName}
      title="Account details"
      containerWidth="950px"
      minContainerHeight="550px"
      isBluredBackdrop={true}
    >

      <Flex alignItems="flex-start">
        <Box pr="10px">
          <List items={accountData1} />
        </Box>
        <List items={accountData2} />
      </Flex>

      <T4>Mandates</T4>
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
