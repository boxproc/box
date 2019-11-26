import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { HighlightCodeField, SelectField, TextField } from 'components';
import { withLoadDictionaryEvents, WithLoadDictionaryEventsProps } from 'HOCs';

import { actionTypesOptions } from 'consts';

import {
  DictionaryEventDataElemsItem,
  HandleFilterDictionaryEventDataElemsById,
  HandleGetProductAprs,
  HandleGetProductFees,
} from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface ContextItemProps {
  name: string;
  description: string;
}

interface ProductRulesProps extends WithLoadDictionaryEventsProps {
  filterDictionaryEventDataElemsById: HandleFilterDictionaryEventDataElemsById;
  getProductAprs: HandleGetProductAprs;
  getProductFees: HandleGetProductFees;
  eventValue: SelectValues;
  eventDataElemsItems: Array<DictionaryEventDataElemsItem>;
  productAprsItems: Array<ContextItemProps>;
  productFeesItems: Array<ContextItemProps>;
  onChangeValues?: () => void;
  changeFormField: (field: string, value: string) => void;
}

const getNewCode = (element: string) => {
  const textarea = document.querySelector('#rule-script') as HTMLInputElement;
  const code = textarea.value;

  const startIndex = textarea.selectionStart;

  const startPartText = code.slice(0, startIndex);
  const endPartText = code.slice(startIndex);

  const resultText = `${startPartText}${element}${endPartText}`;

  return resultText;
};

const ProductRules: React.FC<ProductRulesProps> = ({
  dictionaryEventsOptions,
  isDictionaryEventsLoading,
  filterDictionaryEventDataElemsById,
  getProductAprs,
  productFeesItems,
  getProductFees,
  eventValue,
  eventDataElemsItems,
  productAprsItems,
  onChangeValues,
  changeFormField,
}) => {
  React.useEffect(
    () => {
      getProductAprs();
      getProductFees();
    },
    [getProductAprs, getProductFees]
  );

  React.useEffect(
    () => {
      if (eventValue) {
        filterDictionaryEventDataElemsById({ eventId: eventValue });
      }
    },
    [filterDictionaryEventDataElemsById, eventValue]
  );

  const onContextMenuClick = (e: Event, value: { name: string, description: string }) => {
    const textarea = document.querySelector('#rule-script') as HTMLInputElement;
    const comment = value.description ? ` /* ${value.description} */` : '';
    const code = getNewCode(`${value.name}${comment}`);

    changeFormField('script', code);
    textarea.focus();
  };

  return (
    <React.Fragment>
      <Box mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 3]} p="10px">
            <Field
              id="eventId"
              name="eventId"
              component={SelectField}
              label="Event"
              placeholder="Select Event"
              options={dictionaryEventsOptions}
              isLoading={isDictionaryEventsLoading}
              isClearable={false}
              onChange={onChangeValues}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="actionType"
              name="actionType"
              component={SelectField}
              label="Action Type"
              placeholder="Select Action Type"
              options={actionTypesOptions}
              isClearable={false}
              onChange={onChangeValues}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="description"
              name="description"
              placeholder="Enter Description"
              component={TextField}
              label="Description"
              height={34}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="rule-script"
              name="script"
              placeholder="Enter Script"
              component={HighlightCodeField}
              label="Script"
              contextSubMenuItems={[
                {
                  title: 'Data elements',
                  items: eventDataElemsItems,
                  noDataStr: 'No available data elements',
                },
                {
                  title: 'APRs',
                  items: productAprsItems,
                  noDataStr: 'No available APRs',
                },
                {
                  title: 'Fees',
                  items: productFeesItems,
                  noDataStr: 'No available Fees',
                },
              ]}
              onContextMenuClick={onContextMenuClick}
              menuId="rulesCodeContextMenu"
              checkJSSyntax={true}
              height="calc(100vh - 400px)"
            />
          </Box>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default withLoadDictionaryEvents(ProductRules);
