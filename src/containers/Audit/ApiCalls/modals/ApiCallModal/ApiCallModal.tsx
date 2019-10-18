import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Modal, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { ApiCallForm } from 'containers/Audit/ApiCalls/forms';

import { HandleGetDetailsAuditApiCalls } from 'store/domains';

interface EditTransactionModalProps extends WithModalProps {
  getDetailsAuditApiCalls: HandleGetDetailsAuditApiCalls;
}

const modalName = modalNamesConst.AUDIT_API_CALL;

const EditTransactionModal: React.FC<EditTransactionModalProps> = ({
  closeModal,
  getDetailsAuditApiCalls,
}) => {
  React.useEffect(
    () => {
      getDetailsAuditApiCalls();
    },
    [getDetailsAuditApiCalls]
  );

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
      maxContainerWidth={980}
    >
      <ApiCallForm />
      <Flex justifyContent="flex-end">
        <Button
          text="close"
          onClick={handleOnCancel}
        />
      </Flex>
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(
  withModal(EditTransactionModal)
);
