import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { HighlightCodeField, SelectField, TextField } from 'components';
import { withLoadDictionaryEvents, WithLoadDictionaryEventsProps } from 'HOCs';

import {
  HandleFilterDictionaryEventDataElemsById,
  HandleGetProductAprsFeesRewards,
} from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';
import SnippetButtons from './SnippetButtons';

const ScriptWrapper = styled.div`
  position: relative;
  width: 100%;

  .snippet-buttons {
    position: absolute;
    left: 60px;
    top: 13px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
  }
`;

interface ContextItemProps {
  name: string;
  description: string;
}

interface ProductRulesProps extends WithLoadDictionaryEventsProps {
  filterDictionaryEventDataElemsById: HandleFilterDictionaryEventDataElemsById;
  getProductAprsFeesRewards: HandleGetProductAprsFeesRewards;
  eventValue: SelectValues;
  eventDataElemsItems: Array<ContextItemProps>;
  productAprsItems: Array<ContextItemProps>;
  productFeesItems: Array<ContextItemProps>;
  productRewardsItems: Array<ContextItemProps>;
  onChangeValues?: () => void;
  changeFormField: (field: string, value: string) => void;
  scriptValue: string;
  actionTypesOptions: SelectValues;
  isReadOnly: boolean;
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

const mapComments = (items: Array<ContextItemProps>) => items.map(el => {
  return {
    name: `/* ${el.description} */`,
    description: `(${el.name})`,
  };
});

const ProductRules: React.FC<ProductRulesProps> = ({
  dictionaryEventsOptions,
  isDictionaryEventsLoading,
  filterDictionaryEventDataElemsById,
  getProductAprsFeesRewards,
  productFeesItems,
  productRewardsItems,
  eventValue,
  eventDataElemsItems,
  productAprsItems,
  onChangeValues,
  changeFormField,
  scriptValue,
  actionTypesOptions,
  isReadOnly,
}) => {
  const textarea = document.querySelector('#rule-script') as HTMLInputElement;

  const [currentCursorPosition, setCurrentCursorPosition] = React.useState(0);

  React.useEffect(
    () => {
      if (scriptValue && textarea) {
        setCurrentCursorPosition(textarea.selectionEnd);
      } else {
        setCurrentCursorPosition(0);
      }
    },
    [scriptValue, textarea]
  );

  React.useEffect(
    () => {
      getProductAprsFeesRewards();
    },
    [getProductAprsFeesRewards]
  );

  React.useEffect(
    () => {
      if (eventValue) {
        filterDictionaryEventDataElemsById({ eventId: eventValue });
      }
    },
    [filterDictionaryEventDataElemsById, eventValue]
  );

  const onContextMenuClick = React.useCallback(
    (e: Event, value: { name: string, description: string }) => {
      const newValue = value.name;
      const code = getNewCode(newValue);

      changeFormField('script', code);
      textarea.focus();

      setTimeout(
        () => textarea.setSelectionRange(
          currentCursorPosition + newValue.length,
          currentCursorPosition + newValue.length
        ),
        50);
    },
    [currentCursorPosition, changeFormField, textarea]
  );

  const onSnippetButtonClick = React.useCallback(
    (snippet: string, shiftCharCount?: number) => {
      const code = getNewCode(snippet);

      changeFormField('script', code);
      textarea.focus();

      setTimeout(
        () => textarea.setSelectionRange(
          currentCursorPosition + shiftCharCount,
          currentCursorPosition + shiftCharCount
        ),
        50);
    },
    [currentCursorPosition, changeFormField, textarea]
  );

  const contextSubMenuItems = React.useMemo(
    () => [
      {
        title: 'Data element',
        subItems: [
          {
            title: 'Insert data element',
            items: eventDataElemsItems,
            noDataStr: 'No available data elements',
          },
          {
            title: 'Insert data element comment',
            items: mapComments(eventDataElemsItems),
            noDataStr: 'No available data element comments',
          },
        ],
        noDataStr: 'No available data elements',
      },
      {
        title: 'APR ID',
        subItems: [
          {
            title: 'Insert APR ID',
            items: productAprsItems,
            noDataStr: 'No available APR IDs',
          },
          {
            title: 'Insert APR comment',
            items: mapComments(productAprsItems),
            noDataStr: 'No available APR comments',
          },
        ],
        noDataStr: 'No available APR IDs',
      },
      {
        title: 'Fee ID',
        subItems: [
          {
            title: 'Insert Fee ID',
            items: productFeesItems,
            noDataStr: 'No available Fee IDs',
          },
          {
            title: 'Insert fee comment',
            items: mapComments(productFeesItems),
            noDataStr: 'No available fee comments',
          },
        ],
        noDataStr: 'No available fee IDs',
      },
      {
        title: 'Reward ID',
        subItems: [
          {
            title: 'Insert reward ID',
            items: productRewardsItems,
            noDataStr: 'No available reward IDs',
          },
          {
            title: 'Insert reward comment',
            items: mapComments(productRewardsItems),
            noDataStr: 'No available reward comments',
          },
        ],
        noDataStr: 'No available reward IDs',
      },
    ],
    [
      eventDataElemsItems,
      productAprsItems,
      productFeesItems,
      productRewardsItems,
    ]
  );

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
              readOnly={isReadOnly}
            />
          </Box>
          <ScriptWrapper>
            {!isReadOnly && (
              <SnippetButtons
                className="snippet-buttons"
                onClick={onSnippetButtonClick}
              />
            )}
            <Box width={[1]} p="10px">
              <Field
                id="rule-script"
                name="script"
                placeholder="Enter Script"
                component={HighlightCodeField}
                label="Script"
                contextSubMenuItems={contextSubMenuItems}
                onContextMenuClick={onContextMenuClick}
                setCursorCurrentPosition={() => setCurrentCursorPosition(textarea.selectionEnd)}
                menuId="rulesCodeContextMenu"
                checkJSSyntax={true}
                fontSize={11}
                height="calc(100vh - 400px)"
                readOnly={isReadOnly}
              />
            </Box>
          </ScriptWrapper>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default withLoadDictionaryEvents(ProductRules);
