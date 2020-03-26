import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import EventDataElemsFilter from './EventDataElemsFilter';
import { tableColumns } from './tableColumns';

import PageTemplate from 'containers/PageTemplate';

import {
  IDictionaryEventDataElemPrepared,
  THandleFilterDictionaryEventDataElems,
  THandleGetDictionaryEvents,
  TResetEventDataElems,
} from 'store';

import { ISelectValue } from 'types';

interface IEventDataElems {
  eventDataElemsData: ImmutableArray<IDictionaryEventDataElemPrepared>;
  eventsOptions: Array<ISelectValue>;
  filterEventDataElems: THandleFilterDictionaryEventDataElems;
  getEventsData: THandleGetDictionaryEvents;
  isLoading: boolean;
  resetEventDataElems: TResetEventDataElems;
}

export const EventDataElems: React.FC<IEventDataElems> = ({
  eventDataElemsData,
  eventsOptions,
  filterEventDataElems,
  getEventsData,
  isLoading,
  resetEventDataElems,
}) => {
  React.useEffect(
    () => {
      getEventsData();
      return () => resetEventDataElems();
    },
    [getEventsData, resetEventDataElems]
  );

  return (
    <PageTemplate
      columns={tableColumns}
      data={eventDataElemsData}
      filterAction={filterEventDataElems}
      isDownloadButton={true}
      isLoading={isLoading}
      isSearchable={true}
      title="Event Data Elements"
      FilterForm={
        <EventDataElemsFilter
          isDisabled={isLoading}
          eventOptions={eventsOptions}
        />
      }
    />
  );
};

export default EventDataElems;
