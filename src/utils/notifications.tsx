import { openModal } from 'store/domains';

import { SendNotification } from 'types';

export const handleSendNotification: SendNotification =
  (res, isCatch = false) =>
    async dispatch => {
      if (!isCatch) {
        console.log('---!isCatch', !isCatch);
      } else {
        if (typeof res === 'string') {
          console.log('---res === string', res);
        } else if (res.statusCode && res.statusCode === 500) {
          dispatch(openModal({
            name: 'MessageModal',
            messageModalFields: {
              title: res.statusCode.toString(),
              message: res.statusCode.toString(),
              details: 'Server error responses',
            },
          }
        ));
        } else if (res.body && res.body.message) {
          console.log('---res.body', res);
        } else {
          console.log('---else', res);
        }
      }
    };
