import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { SelectField } from 'components';

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
            label="Card management Interface"
            validate={[formErrorUtil.required]}
            options={productInterfacesServiceOptions}
            isLoading={isLoadingInterfaces}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="endpoints"
            name="endpoints"
            component={SelectField}
            placeholder="Select Endpoint"
            label="Card transactions endpoint"
            validate={[formErrorUtil.required]}
            options={productEndpointsServiceOptions}
            isLoading={isLoadingEndpoints}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductServices;
