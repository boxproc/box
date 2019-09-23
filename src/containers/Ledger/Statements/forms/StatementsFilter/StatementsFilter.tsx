import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField, MaskField, SelectField } from 'components';

import { dateFormat, maskFormat } from 'consts';

import { HandleGetInstitutionProducts } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

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
  const currentInstitutionId = institutionValue && institutionValue.value;

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
                isDisabled={false}
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
                isDisabled={false}
              />
            </Box>
            <Box width={[3 / 9]} p="10px">
              <Field
                id="accountAlias"
                name="accountAlias"
                component={InputField}
                label="Account Alias"
                placeholder="Enter Account Alias"
                isDisabled={false}
              />
            </Box>
            <Box width={[4 / 9]} p="10px">
              <Field
                id="firstName"
                name="firstName"
                component={InputField}
                label="First Name"
                placeholder="Enter First Name"
                isDisabled={false}
              />
            </Box>
            <Box width={[4 / 9]} p="10px">
              <Field
                id="lastName"
                name="lastName"
                component={InputField}
                label="Last Name"
                placeholder="Enter Last Name"
                isDisabled={false}
              />
            </Box>
            <Box width="200px" p="10px">
              <Field
                id="dateFrom"
                name="dateFrom"
                component={MaskField}
                label="Date / Time From"
                placeholder={dateFormat.DATE_TIME_FORMAT}
                mask={maskFormat.DATE_TIME}
                maskChar={null}
                disabled={false}
              />
            </Box>
            <Box width="200px" p="10px">
              <Field
                id="dateTo"
                name="dateTo"
                component={MaskField}
                label="Date / Time To"
                placeholder={dateFormat.DATE_TIME_FORMAT}
                mask={maskFormat.DATE_TIME}
                maskChar={null}
                disabled={false}
              />
            </Box>
          </Flex>
        </Box>
        <Flex>
          <Box width="250px" p="10px">
            <Field
              id="product"
              name="product"
              component={SelectField}
              label="Product"
              placeholder="Select Product"
              options={institutionProductsOptions}
              isDisabled={false}
              isMulti={true}
              isLoading={isLoadingInstitutionProducts}
            />
          </Box>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default StatementsFilter;
