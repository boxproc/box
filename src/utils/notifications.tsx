import { openModal } from 'store/domains';

import { modalNames } from 'consts';

import { SendNotification } from 'types';

import { parseString } from './strings';

export const handleSendNotification: SendNotification =
  (res, isCatch = false) =>
    async dispatch => {
      if (!isCatch) {
        console.log('---isCatch', isCatch);
        console.log('---res', res);
      } else {
        console.log('---res', res);
        if (res) {
          dispatch(openModal({
            name: modalNames.MESSAGE_MODAL,
            fields: {
              title: res.statusCode,
            },
          }));
        }
        if (res && res.text) {
          dispatch(openModal({
            name: modalNames.MESSAGE_MODAL,
            fields: {
              title: res.statusCode,
              message: parseString(res.text).result_message,
              details: parseString(res.text).result_description,
            },
          }));
        }
      }
    };
