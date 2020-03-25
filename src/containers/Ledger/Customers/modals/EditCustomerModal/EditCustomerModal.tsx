import React from 'react';

import { Modal, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import {
  CustomerForm,
  RepaymentDebitCardsForm,
  RepaymentDirectDebitsForm,
} from 'containers/Ledger/Customers/forms';
import { HandleGetInterfacesService } from 'store';
import { ISelectValue } from 'types';

interface EditCustomerModalProps extends WithModalProps {
  isFormDirty: boolean;
  currentCustomerName: string;
  currentCustomerInstitutionId: number;
  getInterfaces: HandleGetInterfacesService;
  interfacesOptions: Array<ISelectValue>;
  isInterfacesLoading: boolean;
}

const modalName = modalNamesConst.EDIT_CUSTOMER;

const EditCustomerModal: React.FC<EditCustomerModalProps> = ({
  closeModal,
  isFormDirty,
  isReadOnly,
  currentCustomerName,
  currentCustomerInstitutionId,
  getInterfaces,
  interfacesOptions,
  isInterfacesLoading,
}) => {
  React.useEffect(
    () => {
      getInterfaces(currentCustomerInstitutionId);
    },
    [getInterfaces, currentCustomerInstitutionId]
  );

  const modalTitle = React.useMemo(
    () => `Edit Customer: ${currentCustomerName}`,
    [currentCustomerName]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title={modalTitle}
      containerWidth="1010px"
      minContainerHeight="600px"
      withCloseConfirmation={isFormDirty}
    >
      <Tabs>
        <TabsPanel title="General">
          <CustomerForm
            isEditMode={true}
            isReadOnly={isReadOnly}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
        <TabsPanel title="Repayment Debit Cards">
          <RepaymentDebitCardsForm
            interfacesOptions={interfacesOptions}
            isInterfacesLoading={isInterfacesLoading}
            isReadOnly={isReadOnly}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
        <TabsPanel title="Repayment Direct Debits">
          <RepaymentDirectDebitsForm
            interfacesOptions={interfacesOptions}
            isInterfacesLoading={isInterfacesLoading}
            isReadOnly={isReadOnly}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
      </Tabs>
    </Modal>
  );
};

export default withModal(EditCustomerModal);
