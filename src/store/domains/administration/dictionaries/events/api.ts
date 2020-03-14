import { apiClientService } from 'services';

// import { dictionaryEventsData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryEvents = () =>
  // throttleUtil.getDataAfter(dictionaryEventsData, 500);
  apiClientService.post('ui/administration/dictionaries/events');
