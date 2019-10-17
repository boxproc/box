import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { SelectField } from 'components';

import { HandleGetEndpointsService, HandleGetInterfacesService } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface ProductServicesProps {
  productEndpointsServiceOptions: Array<SelectValues>;
  productInterfacesServiceOptions: Array<SelectValues>;
  getInterfacesService: HandleGetInterfacesService;
  getEndpointsService: HandleGetEndpointsService;
  isLoadingServices: boolean;
 }

const ProductServices: React.FC<ProductServicesProps> = ({
  productInterfacesServiceOptions,
  productEndpointsServiceOptions,
  getInterfacesService,
  getEndpointsService,
  isLoadingServices,
}) => {
  React.useEffect(
    () => {
      getInterfacesService();
      getEndpointsService();

    },
    [getEndpointsService, getInterfacesService ]
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
            isLoading={isLoadingServices}
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
            isLoading={isLoadingServices}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductServices;
