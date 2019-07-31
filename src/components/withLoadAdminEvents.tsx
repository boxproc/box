import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  ConstsDataActionTypes,
  createLoadingSelector,
  HandleGetAdminEvents,
  handleGetAdminEvents,
  selectAdminEventsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

import { SelectValues } from 'types';

import { componentUtil } from 'utils';

export interface WithLoadAdminEventsProps {
  adminEventsOptions: Array<SelectValues>;
  isAdminEventsLoading: boolean;
  loadAdminEvents: HandleGetAdminEvents;
}

export const withLoadAdminEvents =
  <OriginProps extends {}>(
    Component: React.ComponentType<OriginProps & Partial<WithLoadAdminEventsProps>>
  ) => {
    const WithLoadAdminEvents:
      React.FC<WithLoadAdminEventsProps> = props => {
        const {
          adminEventsOptions,
          loadAdminEvents,
          isAdminEventsLoading,
          ...originProps
        } = props;
        const isEmpty = adminEventsOptions.length === 0;

        React.useEffect(
          () => {
            if (!isAdminEventsLoading && isEmpty) {
              loadAdminEvents();
            }
          },
          [loadAdminEvents, isEmpty, isAdminEventsLoading]
        );

        return (
          <Component
            isAdminEventsLoading={isAdminEventsLoading}
            adminEventsOptions={adminEventsOptions}
            loadAdminEvents={loadAdminEvents}
            {...originProps as OriginProps}
          />
        );
      };

    WithLoadAdminEvents.displayName =
      `WithLoadAdminEvents(${componentUtil.getDisplayName(Component)})`;

    const loadingSelector = createLoadingSelector([
      ConstsDataActionTypes.GET_CURRENCY_CODES,
    ]);

    const mapStateToProps = (state: StoreState) => ({
      isAdminEventsLoading: loadingSelector(state),
      adminEventsOptions: selectAdminEventsOptions(state),
    });

    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
      {
        loadAdminEvents: handleGetAdminEvents,
      },
      dispatch
    );

    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(WithLoadAdminEvents);
  };
