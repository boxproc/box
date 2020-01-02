import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Button, HighlightCodeField, SelectField } from 'components';
import SnippetButtons from './SnippetButtons';

import { eventTypesCodeKeys, messagesConst } from 'consts';

import {
  HandleFilterDictionaryEventDataElemsById,
  HandleGetDictionaryEvents,
  HandleGetDictionaryTransactionTypes,
  HandleGetProductAprsFeesRewards,
} from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

const ScriptWrapper = styled.div`
  position: relative;
  width: 100%;

  .snippet-buttons {
    position: absolute;
    right: 20px;
    top: 3px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
  }

  .loading {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: bold;
    font-size: 10px;
    letter-spacing: .5pt;
    text-transform: uppercase;
    opacity: .5;
    z-index: 10;
  }
`;

const HiddenBox = styled(Box)`
  display: none;
`;

interface ContextItemProps {
  name: string | number;
  description: string;
}

interface ProductRulesProps {
  filterDictionaryEventDataElemsById: HandleFilterDictionaryEventDataElemsById;
  getProductAprsFeesRewards: HandleGetProductAprsFeesRewards;
  getEvents: HandleGetDictionaryEvents;
  getTransactionTypes: HandleGetDictionaryTransactionTypes;
  eventDataElemsItems: Array<ContextItemProps>;
  productAprsItems: Array<ContextItemProps>;
  productFeesItems: Array<ContextItemProps>;
  productRewardsItems: Array<ContextItemProps>;
  transactionTypesItems: Array<ContextItemProps>;
  actionTypesOptions: Array<SelectValues>;
  eventsOptions: Array<SelectValues>;
  eventValue: SelectValues;
  initialActionType: string | number;
  isLoading: boolean;
  isReadOnly: boolean;
  dirty: boolean;
  scriptValue: string;
  isEventsLoading: boolean;
  onChangeValues: () => void;
  changeFormField: (field: string, value: string | SelectValues) => void;
  handleGetRule: (field: string, value: string | SelectValues) => void;
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
  getEvents,
  eventsOptions,
  isEventsLoading,
  getTransactionTypes,
  transactionTypesItems,
  filterDictionaryEventDataElemsById,
  getProductAprsFeesRewards,
  productFeesItems,
  productRewardsItems,
  eventValue,
  eventDataElemsItems,
  productAprsItems,
  onChangeValues,
  changeFormField,
  handleGetRule,
  scriptValue,
  actionTypesOptions,
  initialActionType,
  isLoading,
  isReadOnly,
  dirty,
}) => {
  const textarea = document.querySelector('#rule-script') as HTMLInputElement;

  const [currentCursorPosition, setCurrentCursorPosition] = React.useState(0);

  React.useEffect(
    () => {
      Promise.all([
        getEvents(),
        getTransactionTypes(),
        getProductAprsFeesRewards(),
      ]);
    },
    [getEvents, getTransactionTypes, getProductAprsFeesRewards]
  );

  React.useEffect(
    () => {
      if (eventValue) {
        filterDictionaryEventDataElemsById({ eventId: eventValue });
      }
    },
    [filterDictionaryEventDataElemsById, eventValue]
  );

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

  const isTransactionEvent = React.useMemo(
    () => eventValue && eventValue.value === eventTypesCodeKeys.TRANSACTION,
    [eventValue]
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
      {
        title: 'Transaction type ID',
        subItems: isTransactionEvent && [
          {
            title: 'Insert transaction type ID',
            items: transactionTypesItems,
            noDataStr: 'No available transaction type IDs',
          },
          {
            title: 'Insert transaction type comment',
            items: mapComments(transactionTypesItems),
            noDataStr: 'No available transaction type comments',
          },
        ],
        noDataStr: 'No available transaction type IDs',
      },
    ],
    [
      eventDataElemsItems,
      productAprsItems,
      productFeesItems,
      productRewardsItems,
      transactionTypesItems,
      isTransactionEvent,
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
              options={eventsOptions}
              isLoading={isEventsLoading}
              isClearable={false}
              onChange={onChangeValues}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <HiddenBox width={[1 / 3]} p="10px">
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
          </HiddenBox>
          {eventValue && (
            <Box mb="15px">
              <Flex alignItems="center" flexWrap="wrap">
                {actionTypesOptions && actionTypesOptions.map(type => (
                  <Button
                    key={type.value}
                    text={type.label}
                    size="11"
                    isFocused={initialActionType === type.value}
                    isTabsTheme={true}
                    type="reset"
                    withConfirmation={dirty}
                    confirmationTitle={messagesConst.SWITCH_TAB}
                    confirmationText={messagesConst.UNSAVED_CHANGES}
                    onClick={() => handleGetRule('actionType', type)}
                  />
                ))}
              </Flex>
            </Box>
          )}
          <ScriptWrapper>
            {!isReadOnly && (
              <SnippetButtons
                className="snippet-buttons"
                onClick={onSnippetButtonClick}
              />
            )}
            {isLoading && (
              <div className="loading">loading...</div>
            )}
            <Box width={[1]} p="0 10px 10px">
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
                height="calc(100vh - 350px)"
                readOnly={isReadOnly}
              />
            </Box>
          </ScriptWrapper>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default ProductRules;
