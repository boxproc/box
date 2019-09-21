import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Hr, Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { ApiCallForm } from 'containers/Audit/ApiCalls/forms';

interface EditTransactionModalProps extends WithModalProps { }

const modalName = modalNamesConst.AUDIT_API_CALL;

const EditTransactionModal: React.FC<EditTransactionModalProps> = ({
  closeModal,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="API Call"
      closeOnBackdrop={true}
      maxContainerWidth={600}
    >
      <ApiCallForm />
      <Hr />
      <Flex justifyContent="flex-end">
        <Button
          text="close"
          onClick={handleOnCancel}
        />
      </Flex>
    </Modal>
  );
};

export default withModal(EditTransactionModal);
