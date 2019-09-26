import { openModal } from 'store/domains';

import { modalNamesConst } from 'consts';

import { SendNotification } from 'types';

const getNotification = (
  title: string,
  message: string,
  details?: string,
  statusCode?: number,
  errorCode?: number
) => openModal({
  name: modalNamesConst.MESSAGE_MODAL,
  payload: { title, message, details, statusCode, errorCode },
});

export const handleSendNotification: SendNotification =
  (res, isCatch = false) =>
    async dispatch => {
      if (isCatch) {
        console.log('---res', res);
        if (res && res.statusCode === 500) {

          if (res.body && res.body.response_status) {
            const { error_message, error_description, status_code } = res.body.response_status;

            dispatch(getNotification(
              `${res.statusCode} Internal Server Error`,
              error_message,
              JSON.stringify(error_description),
              status_code,
              res.statusCode
            ));
          } else {
            dispatch(getNotification(
              `${res.statusCode} Internal Server Error`,
              // tslint:disable-next-line: max-line-length
              'The server encountered an unexpected condition that prevented it from fulfilling the request.'
            ));
          }
        } else if (res && res.body && res.body.response_status) {
          const { error_message, error_description, status_code } = res.body.response_status;
          dispatch(getNotification(
            `${res.statusCode} Error`,
            error_message,
            error_description,
            status_code,
            res.statusCode
          ));
        } else {
          dispatch(getNotification(
            `${res && res.statusCode ? res.statusCode : ''} Error`,
            res ? res.toString() : 'An error occurred.'
          ));
        }
      }
    };
