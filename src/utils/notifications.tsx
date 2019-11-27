import { openModal } from 'store/domains';

import config from 'config';

import { modalNamesConst } from 'consts';

import { SendNotification } from 'types';
import { stringsUtil } from 'utils';

const getNotification = (
  title: string,
  message: string,
  details?: string,
  statusCode?: string,
  errorCode?: number
) => openModal({
  name: modalNamesConst.MESSAGE,
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
      return res.error.message.toString();
    } else {
      return res.toString();
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
          const { statusCode } = res;
          const { error_message, error_description, status_code } = res.body.response_status;

          const errorDescription = error_description
            ? stringsUtil.addNewLines(error_description)
            : '';

          dispatch(getNotification(
            `${statusCode} Error`,
            error_message,
            errorDescription,
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
