import React from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import ContextMenuList from 'components/ContextMenuList';
import { HighLightCodeField, SelectField, TextField } from 'components/Form';
import { withLoadAdminEvents, WithLoadAdminEventsProps } from 'components/withLoadAdminEvents';

import { actionTypesOptions } from 'consts';

interface ProductRulesProps extends WithLoadAdminEventsProps { }

const ProductRules: React.FC<ProductRulesProps> = ({
  adminEventsOptions,
  isAdminEventsLoading,
}) => {
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
      />
    </React.Fragment>
  );
};

export default withLoadAdminEvents(ProductRules);
