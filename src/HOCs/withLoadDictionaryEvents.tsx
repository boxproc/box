import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  createLoadingSelector,
  DictionaryEventsActionTypes,
  HandleGetDictionaryEvents,
  handleGetDictionaryEvents,
  selectDictionaryEventsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

import { SelectValues } from 'types';

import { componentUtil } from 'utils';

export interface WithLoadDictionaryEventsProps {
  dictionaryEventsOptions: Array<SelectValues>;
  isDictionaryEventsLoading: boolean;
  loadDictionaryEvents: HandleGetDictionaryEvents;
}

export const withLoadDictionaryEvents =
  <OriginProps extends {}>(
    Component: React.ComponentType<OriginProps & Partial<WithLoadDictionaryEventsProps>>
  ) => {
    const WithLoadDictionaryEvents:
      React.FC<WithLoadDictionaryEventsProps> = props => {
        const {
          dictionaryEventsOptions,
          loadDictionaryEvents,
          isDictionaryEventsLoading,
          ...originProps
        } = props;
        const isEmpty = dictionaryEventsOptions && dictionaryEventsOptions.length === 0;

        React.useEffect(
          () => {
            if (isEmpty) {
              loadDictionaryEvents();
            }
          },
          [loadDictionaryEvents, isEmpty]
        );

        return (
          <Component
            isDictionaryEventsLoading={isDictionaryEventsLoading}
            dictionaryEventsOptions={dictionaryEventsOptions}
            loadDictionaryEvents={loadDictionaryEvents}
            {...originProps as OriginProps}
          />
        );
      };

    WithLoadDictionaryEvents.displayName =
      `WithLoadDictionaryEvents(${componentUtil.getDisplayName(Component)})`;

    const loadingSelector = createLoadingSelector([
      DictionaryEventsActionTypes.GET_DICTIONARY_EVENTS,
    ]);

    const mapStateToProps = (state: StoreState) => ({
      isDictionaryEventsLoading: loadingSelector(state),
      dictionaryEventsOptions: selectDictionaryEventsOptions(state),
    });

    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
      {
        loadDictionaryEvents: handleGetDictionaryEvents,
      },
      dispatch
    );

    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(WithLoadDictionaryEvents);
  };
