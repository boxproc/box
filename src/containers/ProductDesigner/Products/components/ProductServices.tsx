import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { Delimiter, SelectField } from 'components';

import { HandleGetProductServices } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface ProductServicesProps {
  productEndpointsServiceOptions: Array<SelectValues>;
  productInterfacesServiceOptions: Array<SelectValues>;
  getProductServices: HandleGetProductServices;
  isLoadingInterfaces: boolean;
  isLoadingEndpoints: boolean;
}

const ProductServices: React.FC<ProductServicesProps> = ({
  productInterfacesServiceOptions,
  productEndpointsServiceOptions,
  getProductServices,
  isLoadingInterfaces,
  isLoadingEndpoints,
}) => {
  React.useEffect(
    () => {
      getProductServices();
    },
    [getProductServices]
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
            validate={[formErrorUtil.required]}
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
            validate={[formErrorUtil.required]}
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
            validate={[formErrorUtil.required]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductServices;
