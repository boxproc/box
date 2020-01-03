import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { Delimiter, SelectField } from 'components';

import { HandleGetProductServices } from 'store/domains';

import { SelectValues } from 'types';

interface ProductServicesProps {
  productEndpointsServiceOptions: Array<SelectValues>;
  productInterfacesServiceOptions: Array<SelectValues>;
  getProductServices: HandleGetProductServices;
  currentInstitutionId: number;
  isLoadingInterfaces: boolean;
  isLoadingEndpoints: boolean;
  isReadOnly: boolean;
}

const ProductServices: React.FC<ProductServicesProps> = ({
  productInterfacesServiceOptions,
  productEndpointsServiceOptions,
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
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 2]} p="10px">
          <Field
            id="interfaces"
            name="interfaces"
            component={SelectField}
            placeholder="Select Interface"
            label="Card Management Interface"
            options={productInterfacesServiceOptions}
            isLoading={isLoadingInterfaces}
            isClearable={false}
            isDisabled={isReadOnly}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 2]} p="10px">
          <Field
            id="endpoints"
            name="endpoints"
            component={SelectField}
            placeholder="Select Endpoint"
            label="Card Transactions Endpoint"
            options={productEndpointsServiceOptions}
            isLoading={isLoadingEndpoints}
            isClearable={false}
            isDisabled={isReadOnly}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 2]} p="10px">
          <Field
            id="secureProviderInterfaces"
            name="secureProviderInterfaces"
            component={SelectField}
            placeholder="Select Interface"
            label="3D Secure Provider Interface"
            options={productInterfacesServiceOptions}
            isLoading={isLoadingInterfaces}
            isClearable={false}
            isDisabled={isReadOnly}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 2]} p="10px">
          <Field
            id="directDebitRepaymentInterface"
            name="directDebitRepaymentInterface"
            component={SelectField}
            placeholder="Select Interface"
            label="Direct Debit Repayment Interface"
            options={productInterfacesServiceOptions}
            isLoading={isLoadingInterfaces}
            isClearable={false}
            isDisabled={isReadOnly}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 2]} p="10px">
          <Field
            id="cardRepaymentInterface"
            name="cardRepaymentInterface"
            component={SelectField}
            placeholder="Select Interface"
            label="Debit Card Repayment Interface"
            options={productInterfacesServiceOptions}
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
