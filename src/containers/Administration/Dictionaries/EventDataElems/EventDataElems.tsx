import React from 'react';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import { EventDataElemsFilter } from 'containers/Administration/Dictionaries/EventDataElems/forms';

import {
  DictionaryEventDataElemsItem,
  HandleFilterDictionaryEventDataElems,
  HandleGetDictionaryEvents,
  ResetEventDataElems,
} from 'store/domains';

import { SelectValue } from 'types';

interface EventDataElemsProps {
  getDictionaryEvents: HandleGetDictionaryEvents;
  dictionaryEventDataElemsItems: Array<DictionaryEventDataElemsItem>;
  dictionaryEventsOptions: Array<SelectValue>;
  filterDictionaryEventDataElems: HandleFilterDictionaryEventDataElems;
  resetEventDataElems: ResetEventDataElems;
  isLoading: boolean;
}

export const EventDataElems: React.FC<EventDataElemsProps> = ({
  getDictionaryEvents,
  dictionaryEventDataElemsItems,
  dictionaryEventsOptions,
  filterDictionaryEventDataElems,
  resetEventDataElems,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getDictionaryEvents();
      return () => resetEventDataElems();
    },
    [getDictionaryEvents, resetEventDataElems]
  );

  return (
    <PageTemplate
      title="Event Data Elements"
      data={dictionaryEventDataElemsItems}
      columns={tableColumns}
      filterAction={filterDictionaryEventDataElems}
      isSearchable={true}
      isDownloadButton={true}
      isLoading={isLoading}
      FilterForm={
        <EventDataElemsFilter
          isDisabled={isLoading}
          eventOptions={dictionaryEventsOptions}
        />
      }
    />
  );
};

export default EventDataElems;
