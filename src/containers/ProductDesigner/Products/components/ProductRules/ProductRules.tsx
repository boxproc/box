import React from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { ContextMenuList, HighlightCodeField, SelectField, TextField } from 'components';
import { withLoadAdminEvents, WithLoadAdminEventsProps } from 'HOCs';

import { actionTypesOptions } from 'consts';

import { AdminEventDataElemsItem, HandleFilterAdminEventDataElems } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface ProductRulesProps extends WithLoadAdminEventsProps {
  filterAdminEventDataElems: HandleFilterAdminEventDataElems;
  eventValue: SelectValues;
  adminEventDataElemsItems: Array<AdminEventDataElemsItem>;
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
  adminEventsOptions,
  isAdminEventsLoading,
  filterAdminEventDataElems,
  eventValue,
  adminEventDataElemsItems,
  onChangeValues,
  changeFormField,
}) => {
  React.useEffect(
    () => {
      if (eventValue) {
        filterAdminEventDataElems({ eventId: eventValue });
      }
    },
    [filterAdminEventDataElems, eventValue]
  );

  const onContextMenuClick = (e: Event, value: { name: string }) => {
    const textarea = document.querySelector('#rule-script') as HTMLInputElement;
    const code = getNewCode(value.name);

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
              options={adminEventsOptions}
              isLoading={isAdminEventsLoading}
              isClearable={false}
              onBlur={onChangeValues}
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
              onBlur={onChangeValues}
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
            <ContextMenuTrigger id="rulesCodeContextMenu">
              <Field
                id="rule-script"
                name="script"
                placeholder="Enter Script"
                component={HighlightCodeField}
                label="Script"
              />
            </ContextMenuTrigger>
          </Box>
        </Flex>
      </Box>
      <ContextMenuList
        menuId="rulesCodeContextMenu"
        onClick={onContextMenuClick}
        items={adminEventDataElemsItems}
        noDataStr="No Available Data Elements"
      />
    </React.Fragment>
  );
};

export default withLoadAdminEvents(ProductRules);
