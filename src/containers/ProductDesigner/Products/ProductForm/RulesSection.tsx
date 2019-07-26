import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';
import { SelectField, TextField } from 'components/Form';

import HighlightCode from 'components/HighlightCode';

interface RulesSectionProps {}

const RulesSection: React.FC<RulesSectionProps> = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1]} p="10px">
          <Field
            id="rulesDescription"
            name="rulesDescription"
            placeholder="Enter Description"
            component={TextField}
            label="Description"
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="event"
            name="event"
            isSearchable={true}
            component={SelectField}
            label="Event"
            placeholder="Select Event"
            options={[]}
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
            options={[]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <HighlightCode
            script={`
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
`}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RulesSection;
