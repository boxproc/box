import React from 'react';

import { TablePage, withSpinner } from 'components';

import { tableColumns } from './components';

import { EventDataElemsFilter } from 'containers/Administration/Dictionaries/EventDataElems/forms';

import {
  DictionaryEventDataElemsItem,
  HandleFilterDictionaryEventDataElems,
  HandleGetDictionaryEvents,
} from 'store/domains';

import { SelectValues } from 'types';

interface EventDataElemsProps {
  getDictionaryEvents: HandleGetDictionaryEvents;
  dictionaryEventDataElemsItems: Array<DictionaryEventDataElemsItem>;
  dictionaryEventsOptions: Array<SelectValues>;
  filterDictionaryEventDataElems: HandleFilterDictionaryEventDataElems;
}

export const EventDataElems: React.FC<EventDataElemsProps> = ({
  getDictionaryEvents,
  dictionaryEventDataElemsItems,
  dictionaryEventsOptions,
  filterDictionaryEventDataElems,
}) => {
  React.useEffect(
    () => {
      getDictionaryEvents();
    },
    [getDictionaryEvents]
  );

  return (
    <TablePage
      title="Event Data Elements"
      data={dictionaryEventDataElemsItems}
      columns={tableColumns}
      filterAction={filterDictionaryEventDataElems}
      FilterForm={
        <EventDataElemsFilter eventOptions={dictionaryEventsOptions} />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(EventDataElems);
