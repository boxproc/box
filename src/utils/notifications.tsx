import { openModal } from 'store/domains';

import { modalNames } from 'consts';

import { SendNotification } from 'types';

// import { parseString } from './strings';

const getNotification = (
  title: string,
  message: string,
  details?: string
) => openModal({
  name: modalNames.MESSAGE_MODAL,
  fields: { title, message, details },
});

export const handleSendNotification: SendNotification =
  (res, isCatch = false) =>
    async dispatch => {
      if (!isCatch) {
        console.log('---isCatch', isCatch);
      } else {
        console.log('---res', res);
        if (res && res.statusCode === 500) {
          dispatch(getNotification(
            `${res.statusCode} Internal Server Error`,
            'The server encountered an unexpected condition that prevented it from fulfilling the request.'
          ));
        } else if (res && res.body && res.body.result_message) {
          dispatch(getNotification(
            `${res.statusCode} Error`,
            res.body.result_message,
            res.body.result_description
          ));
        } else {
          dispatch(getNotification(
            `${res ? res.statusCode : ''} Error`,
            'An error occurred. Try again later.'
          ));
        }
      }
    };
