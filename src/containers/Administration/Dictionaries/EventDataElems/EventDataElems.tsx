import React from 'react';

import { withSpinner } from 'components';

import PageTemplate from 'containers/PageTemplate';
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
    <PageTemplate
      title="Event Data Elements"
      data={dictionaryEventDataElemsItems}
      columns={tableColumns}
      filterAction={filterDictionaryEventDataElems}
      isSearchable={true}
      isDownloadButton={true}
      FilterForm={
        <EventDataElemsFilter eventOptions={dictionaryEventsOptions} />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(EventDataElems);
