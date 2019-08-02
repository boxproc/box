import React from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import ContextMenuList from 'components/ContextMenuList';
import { HighLightCodeField, SelectField, TextField } from 'components/Form';
import { withLoadAdminEvents, WithLoadAdminEventsProps } from 'components/withLoadAdminEvents';

import { actionTypesOptions } from 'consts';

import {
  AdminEventDataElemsItem,
  HandleFilterAdminEventDataElems,
  HandleSetRulesCode,
} from 'store/domains';

import { SelectValues } from 'types';

interface ProductRulesProps extends WithLoadAdminEventsProps {
  setRulesCode: HandleSetRulesCode;
  filterAdminEventDataElems: HandleFilterAdminEventDataElems;
  eventValue: SelectValues;
  adminEventDataElemsItems: Array<AdminEventDataElemsItem>;
}

const getNewCode = (element: string) => {
  const textarea = document.querySelector('#script') as HTMLInputElement;
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
  setRulesCode,
  filterAdminEventDataElems,
  eventValue,
  adminEventDataElemsItems,
}) => {
  React.useEffect(
    () => {
      filterAdminEventDataElems({eventId: eventValue});
    },
    [filterAdminEventDataElems, eventValue]
  );

  const onContextMenuClick = (e: Event, value: { name: string }) => {
    const code = getNewCode(value.name);
    setRulesCode(code);
  };

  return (
    <React.Fragment>
      <Box mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 2]} p="10px">
            <Field
              id="eventId"
              name="eventId"
              isSearchable={true}
              component={SelectField}
              label="Event"
              placeholder="Select Event"
              options={adminEventsOptions}
              isLoading={isAdminEventsLoading}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="actionType"
              name="actionType"
              isSearchable={true}
              component={SelectField}
              label="Action Type"
              placeholder="Select Action Type"
              options={actionTypesOptions}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="description"
              name="description"
              placeholder="Enter Description"
              component={TextField}
              label="Description"
            />
          </Box>
          <Box width={[1]} p="10px">
            <ContextMenuTrigger id="rulesCodeContextMenu">
              <Field
                id="script"
                name="script"
                placeholder="Enter Code"
                component={HighLightCodeField}
                label="Code"
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