import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { InputField, MaskField, SelectField } from 'components';

import { dateFormat, maskFormat } from 'consts';

import { HandleGetInstitutionProducts } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

const ProductWrapper = styled(Box)`
  min-width: 235px
  max-width: 410px;
`;

interface StatementsFilterProps {
  institutionsOptions: Array<SelectValues>;
  getInstitutionProducts: HandleGetInstitutionProducts;
  institutionValue: SelectValues;
  institutionProductsOptions: Array<SelectValues>;
  isLoadingInstitutionProducts: boolean;
}

const StatementsFilter: React.FC<StatementsFilterProps> = ({
  institutionsOptions,
  institutionValue,
  getInstitutionProducts,
  institutionProductsOptions,
  isLoadingInstitutionProducts,
}) => {
  const currentInstitutionId = React.useMemo(
    () => institutionValue && institutionValue.value,
    [institutionValue]
  );

  React.useEffect(
    () => {
      if (currentInstitutionId) {
        getInstitutionProducts(currentInstitutionId);
      }
    },
    [getInstitutionProducts, currentInstitutionId]
  );

  return (
    <React.Fragment>
      <Flex alignItems="flex-start">
        <Box width="529px">
          <Flex
            alignItems="flex-end"
            flexWrap="wrap"
          >
            <Box width={[4 / 9]} p="10px">
              <Field
                id="institutionId"
                name="institutionId"
                component={SelectField}
                label="Institution"
                placeholder="Select Institution"
                options={institutionsOptions}
                isClearable={false}
                validate={[formErrorUtil.required]}
              />
            </Box>
            <Box width={[2 / 9]} p="10px">
              <Field
                id="accountId"
                name="accountId"
                component={InputField}
                label="Account ID"
                placeholder="Enter ID"
                isNumber={true}
                validate={[formErrorUtil.isInteger]}
              />
            </Box>
            <Box width={[3 / 9]} p="10px">
              <Field
                id="accountAlias"
                name="accountAlias"
                component={InputField}
                label="Account Alias"
                placeholder="Enter Account Alias"
              />
            </Box>
            <Box width={[4 / 9]} p="10px">
              <Field
                id="firstName"
                name="firstName"
                component={InputField}
                label="First Name"
                placeholder="Enter First Name"
              />
            </Box>
            <Box width={[4 / 9]} p="10px">
              <Field
                id="lastName"
                name="lastName"
                component={InputField}
                label="Last Name"
                placeholder="Enter Last Name"
              />
            </Box>
            <Box width="200px" p="10px">
              <Field
                id="statementsDateFrom"
                name="statementsDateFrom"
                component={MaskField}
                label="Date From"
                placeholder={dateFormat.DATE}
                mask={maskFormat.DATE}
                validate={[
                  formErrorUtil.required,
                  formErrorUtil.isDate,
                ]}
              />
            </Box>
            <Box width="200px" p="10px">
              <Field
                id="statementsDateTo"
                name="statementsDateTo"
                component={MaskField}
                label="Date To"
                placeholder={dateFormat.DATE}
                mask={maskFormat.DATE}
                validate={[
                  formErrorUtil.required,
                  formErrorUtil.isDate,
                ]}
              />
            </Box>
          </Flex>
        </Box>
        <Flex>
          <ProductWrapper p="10px">
            <Field
              id="product"
              name="product"
              component={SelectField}
              label="Product"
              placeholder="Select Product"
              options={institutionProductsOptions}
              isMulti={true}
              isLoading={isLoadingInstitutionProducts}
            />
          </ProductWrapper>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default StatementsFilter;
