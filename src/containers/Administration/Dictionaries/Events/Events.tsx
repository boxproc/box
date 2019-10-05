import React from 'react';

import { withSpinner } from 'components';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import { HandleGetDictionaryEvents } from 'store/domains';

import { IdNamePair } from 'types';

interface EventsProps {
  getDictionaryEvents: HandleGetDictionaryEvents;
  dictionaryEventsItems: Array<IdNamePair>;
}

export const Events: React.FC<EventsProps> = ({
  getDictionaryEvents,
  dictionaryEventsItems,
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
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Events);
