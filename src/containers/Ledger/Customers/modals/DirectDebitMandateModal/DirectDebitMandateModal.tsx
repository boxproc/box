import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, List, Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';

import { IPayloadDirectDebitMandateModal } from 'store';

interface IDirectDebitMandateModal extends IWithModal {
  details: IPayloadDirectDebitMandateModal;
}

const modalName = modalNamesConst.DIRECT_DEBIT_MANDATE;

const DirectDebitMandateModal: React.FC<IDirectDebitMandateModal> = ({
  details,
  closeModal,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const data = React.useMemo(
    () => {
      if (!details) {
        return null;
      }

      const {
        accountAlias,
        accountholderName,
        bankName,
        scheme,
        countryCode,
        currencyCode,
        interfaceName,
        status,
        lastUpdateTimestamp,
      } = details;

      return [
        ['Account no. ending', accountAlias],
        ['Account holder', accountholderName],
        ['Bank name', bankName],
        ['Scheme', scheme],
        ['Country', countryCode],
        ['Currency', currencyCode],
        ['Interface', interfaceName],
        ['Status', status],
        ['Last update datetime', lastUpdateTimestamp],
      ];
    },
    [details]
  );

  return (
    <Modal
      name={modalName}
      title="Mandate details"
      containerWidth="500px"
      isBluredBackdrop={true}
    >

      <List items={data} />

      <Flex justifyContent="flex-end" mt="10px">
        <Button
          text="Close"
          onClick={handleOnCancel}
        />
      </Flex>
    </Modal>
  );
};

export default withModal(DirectDebitMandateModal);
