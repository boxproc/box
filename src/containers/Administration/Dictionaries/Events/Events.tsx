import React from 'react';

import { TablePage, withSpinner } from 'components';

import { tableColumns } from './components';

import { DictionaryEventsItem, HandleGetDictionaryEvents } from 'store/domains';

interface EventsProps {
  getDictionaryEvents: HandleGetDictionaryEvents;
  dictionaryEventsItems: Array<DictionaryEventsItem>;
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
    <TablePage
      title="Events"
      data={dictionaryEventsItems}
      columns={tableColumns}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Events);
