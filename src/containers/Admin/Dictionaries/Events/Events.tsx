import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { tableColumns } from './tableColumns';

import PageTemplate from 'containers/PageTemplate';

import { THandleGetDictionaryEvents } from 'store';

import { IIdNamePair } from 'types';

interface IEvents {
  eventsData: ImmutableArray<IIdNamePair>;
  getEventsData: THandleGetDictionaryEvents;
  isLoading: boolean;
}

export const Events: React.FC<IEvents> = ({
  eventsData,
  getEventsData,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getEventsData();
    },
    [getEventsData]
  );

  return (
    <PageTemplate
      columns={tableColumns}
      data={eventsData}
      isDownloadButton={true}
      isLoading={isLoading}
      title="Events"
    />
  );
};

export default Events;
