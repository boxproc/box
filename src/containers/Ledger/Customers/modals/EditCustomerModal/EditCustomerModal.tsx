import React from 'react';

import { Modal, Tabs, TabsPanel } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { DirectDebit } from './../../components';
import {
  CurrencyLimitForm,
  CustomerForm,
  RepaymentDebitCardsForm,
} from './../../forms';

import { THandleGetServicesInterfaces } from 'store';
import { ISelectValue } from 'types';

interface IEditCustomerModal extends IWithModal {
  currentCustomerInstitutionId: number;
  currentCustomerName: string;
  getInterfaces: THandleGetServicesInterfaces;
  interfacesOptions: Array<ISelectValue>;
  isFormDirty: boolean;
  isInterfacesLoading: boolean;
}

const modalName = modalNamesConst.EDIT_CUSTOMER;

const EditCustomerModal: React.FC<IEditCustomerModal> = ({
  closeModal,
  currentCustomerInstitutionId,
  currentCustomerName,
  getInterfaces,
  interfacesOptions,
  isFormDirty,
  isInterfacesLoading,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      if (currentCustomerInstitutionId) {
        getInterfaces(currentCustomerInstitutionId);
      }
    },
    [getInterfaces, currentCustomerInstitutionId]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title={`Customer: ${currentCustomerName}`}
      containerWidth="1010px"
      minContainerHeight="570px"
      withCloseConfirmation={isFormDirty}
    >
      <Tabs>
        <TabsPanel
          title="General"
          withConfirmation={isFormDirty}
        >
          <CustomerForm
            isEditMode={true}
            isReadOnly={isReadOnly}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
        <TabsPanel
          title="Repayment Debit Cards"
          withConfirmation={isFormDirty}
        >
          <RepaymentDebitCardsForm
            interfacesOptions={interfacesOptions}
            isInterfacesLoading={isInterfacesLoading}
            isReadOnly={isReadOnly}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
        <TabsPanel
          title="Direct Debit Mandates"
          withConfirmation={isFormDirty}
        >
          <DirectDebit
            interfacesOptions={interfacesOptions}
            isInterfacesLoading={isInterfacesLoading}
            isReadOnly={isReadOnly}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
        <TabsPanel
          title="Limit"
          withConfirmation={isFormDirty}
        >
          <CurrencyLimitForm
            isReadOnly={isReadOnly}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
      </Tabs>
    </Modal>
  );
};

export default withModal(EditCustomerModal);
