import React from 'react';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import { HandleGetDictionaryEvents } from 'store';

import { IdNamePair } from 'types';

interface EventsProps {
  getDictionaryEvents: HandleGetDictionaryEvents;
  dictionaryEventsItems: Array<IdNamePair>;
  isLoading: boolean;
}

export const Events: React.FC<EventsProps> = ({
  getDictionaryEvents,
  dictionaryEventsItems,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getDictionaryEvents();
    },
    [getDictionaryEvents]
  );

  return (
    <PageTemplate
      title="Events"
      data={dictionaryEventsItems}
      columns={tableColumns}
      isDownloadButton={true}
      isLoading={isLoading}
    />
  );
};

export default Events;
