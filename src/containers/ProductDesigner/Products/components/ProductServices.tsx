import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, SelectField } from 'components';
import { THandleGetProductServices } from 'store';
import { ISelectValue } from 'types';

interface IProductServices {
  servicesEndpointsOptions: Array<ISelectValue>;
  servicesInterfacesOptions: Array<ISelectValue>;
  getProductServices: THandleGetProductServices;
  currentInstitutionId: number;
  isLoadingInterfaces: boolean;
  isLoadingEndpoints: boolean;
  isReadOnly: boolean;
}

const ProductServices: React.FC<IProductServices> = ({
  servicesInterfacesOptions,
  servicesEndpointsOptions,
  getProductServices,
  currentInstitutionId,
  isLoadingInterfaces,
  isLoadingEndpoints,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getProductServices(currentInstitutionId);
    },
    [getProductServices, currentInstitutionId]
  );

  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Box width={[1 / 2]} p="8px">
          <Field
            id="interfaces"
            name="interfaces"
            component={SelectField}
            placeholder="Select Interface"
            label="Card Management Interface"
            options={servicesInterfacesOptions}
            isLoading={isLoadingInterfaces}
            isClearable={false}
            isDisabled={isReadOnly}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 2]} p="8px">
          <Field
            id="endpoints"
            name="endpoints"
            component={SelectField}
            placeholder="Select Endpoint"
            label="Card Transactions Endpoint"
            options={servicesEndpointsOptions}
            isLoading={isLoadingEndpoints}
            isClearable={false}
            isDisabled={isReadOnly}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 2]} p="8px">
          <Field
            id="secureProviderInterfaces"
            name="secureProviderInterfaces"
            component={SelectField}
            placeholder="Select Interface"
            label="3D Secure Provider Interface"
            options={servicesInterfacesOptions}
            isLoading={isLoadingInterfaces}
            isClearable={false}
            isDisabled={isReadOnly}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 2]} p="8px">
          <Field
            id="directDebitRepaymentInterface"
            name="directDebitRepaymentInterface"
            component={SelectField}
            placeholder="Select Interface"
            label="Direct Debit Repayment Interface"
            options={servicesInterfacesOptions}
            isLoading={isLoadingInterfaces}
            isClearable={false}
            isDisabled={isReadOnly}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 2]} p="8px">
          <Field
            id="cardRepaymentInterface"
            name="cardRepaymentInterface"
            component={SelectField}
            placeholder="Select Interface"
            label="Debit Card Repayment Interface"
            options={servicesInterfacesOptions}
            isLoading={isLoadingInterfaces}
            isClearable={false}
            isDisabled={isReadOnly}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductServices;
