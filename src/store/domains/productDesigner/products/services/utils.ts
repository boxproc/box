import { ServicesItemsPrepared } from './types';

export const prepareCardServiceDataToSend = (data: Partial<ServicesItemsPrepared>) => {
  if (!data) {
    return null;
  }

  const {
    endpoints,
    interfaces,
    secureProviderInterfaces,
    directDebitRepaymentInterface,
    cardRepaymentInterface,
    id,
  } = data;

  const endpointId = endpoints.value;
  const interfaceId = interfaces.value;
  const secureProviderInterfaceId = secureProviderInterfaces.value;
  const directDebitRepaymentInterfaceId = directDebitRepaymentInterface.value;
  const cardRepaymentInterfaceId = cardRepaymentInterface.value;

  return {
    id,
    card_transactions_endpoint_id: endpointId ? endpointId : null,
    card_management_interface_id: interfaceId ? interfaceId : null,
    provider_3d_secure_interface_id: secureProviderInterfaceId
      ? secureProviderInterfaceId
      : null,
    direct_debit_interface_id: directDebitRepaymentInterfaceId
      ? directDebitRepaymentInterfaceId
      : null,
    card_repayment_interface_id: cardRepaymentInterfaceId
      ? cardRepaymentInterfaceId
      : null,
  };
};
