import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import { EventDataElemsFilter } from 'containers/Administration/Dictionaries/EventDataElems/forms';

import {
  DictionaryEventDataElemsItem,
  HandleFilterDictionaryEventDataElems,
  HandleGetDictionaryEvents,
  ResetEventDataElems,
} from 'store';

import { SelectValue } from 'types';

interface EventDataElemsProps {
  getDictionaryEvents: HandleGetDictionaryEvents;
  dictionaryEventDataElemsItems: ImmutableArray<DictionaryEventDataElemsItem>;
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
