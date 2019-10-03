import React from 'react';

import { TablePage, withSpinner } from 'components';

import { tableColumns } from './components';

import { EventDataElemsFilter } from 'containers/Administration/Dictionaries/EventDataElems/forms';

import {
  DictionaryEventDataElemsItem,
  HandleFilterDictionaryEventDataElems,
  HandleGetDictionaryEvents,
  ResetEventDataElems,
} from 'store/domains';

import { SelectValues } from 'types';

interface EventDataElemsProps {
  getDictionaryEvents: HandleGetDictionaryEvents;
  dictionaryEventDataElemsItems: Array<DictionaryEventDataElemsItem>;
  dictionaryEventsOptions: Array<SelectValues>;
  filterDictionaryEventDataElems: HandleFilterDictionaryEventDataElems;
  resetEventDataElems: ResetEventDataElems;
}

export const EventDataElems: React.FC<EventDataElemsProps> = ({
  getDictionaryEvents,
  dictionaryEventDataElemsItems,
  dictionaryEventsOptions,
  filterDictionaryEventDataElems,
  resetEventDataElems,
}) => {
  React.useEffect(
    () => {
      getDictionaryEvents();
      return () => resetEventDataElems();
    },
    [getDictionaryEvents, resetEventDataElems]
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
