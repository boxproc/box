import React, { ChangeEvent } from 'react';
import { EventWithDataHandler, Field } from 'redux-form';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Button, HighlightCodeField, SelectField } from 'components';
import { codeSnippetsContextMenuItems } from './codeSnippetsContextMenuItems';

import { eventTypesCodeKeys } from 'consts';

import {
  THandleFilterDictionaryEventDataElemsById,
  THandleGetDictionaryEvents,
  THandleGetDictionaryTransactionTypes,
  THandleGetProductAprsFeesRewards,
} from 'store';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

const ScriptWrapper = styled.div`
  position: relative;
  width: 100%;

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
    opacity: .3;
    z-index: 10;
  }
`;

const HiddenBox = styled(Box)`
  display: none;
`;

interface IContextItem {
  name: string | number;
  description: string;
}

interface IProductRules {
  actionTypesOptions: Array<ISelectValue>;
  changeFormField: (field: string, value: string | ISelectValue) => void;
  dirty: boolean;
  eventDataElemsItems: ImmutableArray<IContextItem>;
  eventsOptions: Array<ISelectValue>;
  eventValue: ISelectValue;
  filterDictionaryEventDataElemsById: THandleFilterDictionaryEventDataElemsById;
  getEvents: THandleGetDictionaryEvents;
  getProductAprsFeesRewards: THandleGetProductAprsFeesRewards;
  getTransactionTypes: THandleGetDictionaryTransactionTypes;
  handleGetRule: (field: string, value: string | ISelectValue) => void;
  initialActionType: string | number;
  isEventsLoading: boolean;
  isLoading: boolean;
  isReadOnly: boolean;
  onChangeValues: EventWithDataHandler<ChangeEvent<any>>;
  productAprsItems: ImmutableArray<IContextItem>;
  productFeesItems: ImmutableArray<IContextItem>;
  productRewardsItems: ImmutableArray<IContextItem>;
  scriptValue: string;
  transactionTypesItems: ImmutableArray<IContextItem>;
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

const mapComments = (items: ImmutableArray<IContextItem>) => items.map(el => {
  return {
    name: el.description,
    value: `/* ${el.description} */`,
    description: `(${el.name})`,
  };
});

const ProductRules: React.FC<IProductRules> = ({
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
    (e: Event, itemValue: {
      name: string,
      description: string,
      value: string,
      shiftCharCount: number,
    }) => {
      const { value, name, shiftCharCount } = itemValue;

      const newValue = value ? value : name;
      const code = getNewCode(newValue);

      const shiftCursor = shiftCharCount ? shiftCharCount : newValue.length;

      changeFormField('script', code);
      textarea.focus();

      setTimeout(
        () => textarea.setSelectionRange(
          currentCursorPosition + shiftCursor,
          currentCursorPosition + shiftCursor
        ),
        50);
    },
    [currentCursorPosition, changeFormField, textarea]
  );

  const handleSetCursorPosition = React.useCallback(
    () => setCurrentCursorPosition(textarea.selectionEnd),
    [textarea]
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
      codeSnippetsContextMenuItems,
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
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="150px" p="8px">
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
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <HiddenBox width={[1 / 3]} p="8px">
          <Field
            id="actionType"
            name="actionType"
            component={SelectField}
            label="Action Type"
            placeholder="Select Action Type"
            options={actionTypesOptions}
            isClearable={false}
            onChange={onChangeValues}
            validate={[formErrorUtil.isRequired]}
          />
        </HiddenBox>
        {eventValue && (
          <Box mb="8px">
            <Flex alignItems="center" flexWrap="wrap">
              {actionTypesOptions && actionTypesOptions.map(type => (
                <Button
                  key={type.value}
                  text={type.label}
                  size="11"
                  isFocused={initialActionType === type.value}
                  classNames={['is-tabs']}
                  type="reset"
                  withConfirmation={dirty}
                  confirmationTitle="Switch the tab?'"
                  confirmationText="You have unsaved changes."
                  onClick={() => handleGetRule('actionType', type)}
                />
              ))}
            </Flex>
          </Box>
        )}
        <ScriptWrapper>
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
              setCursorCurrentPosition={handleSetCursorPosition}
              menuId="rulesCodeContextMenu"
              fontSize={11}
              height="calc(100vh - 250px)"
              hint="To apply scripts run the scheduler task 'Initializing global variables'."
              hintPosition="left"
              disabled={isReadOnly}
            />
          </Box>
        </ScriptWrapper>
      </Flex>
    </Box>
  );
};

export default ProductRules;
