import { openModal } from 'store/domains';

import config from 'config';

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

interface Error {
  statusCode?: number;
  error?: {
    message?: string;
  };
}

const errorMessage = (res: Error) => {
  if (res) {
    if (res.statusCode && res.statusCode === 404) {
      return JSON.stringify(res.error.message);
    } else {
      return JSON.stringify(res);
    }
  } else {
    return 'An error occurred.';
  }
};

export const handleSendNotification: SendNotification =
  (res, isCatch = false) =>
    async dispatch => {
      if (isCatch) {
        if (config.isDevelopment) {
          console.log('---res', res);
        }

        if (res && res.body && res.body.response_status) {
          const { error_message, error_description, status_code } = res.body.response_status;
          const { statusCode } = res;

          dispatch(getNotification(
            `${statusCode} Error`,
            error_message,
            JSON.stringify(error_description),
            status_code,
            statusCode
          ));
        } else {
          dispatch(getNotification(
            `${(res && res.statusCode) ? res.statusCode : ''} Error`,
            errorMessage(res)
          ));
        }
      }
    };
