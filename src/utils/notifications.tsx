import { openModal } from 'store/domains';

import { modalNames } from 'consts';

import { SendNotification } from 'types';

export const handleSendNotification: SendNotification =
  (res, isCatch = false) =>
    async dispatch => {
      if (!isCatch) {
        console.log('---isCatch', isCatch);
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
              message: JSON.parse(res.text).errorDescription,
              details: res.text,
            },
          }));
        }
      }
    };
