import { openModal } from 'store/domains';

import { basePath, modalNames, statusCodes } from 'consts';

import { SendNotification } from 'types';
import { storageUtil, urlUtil } from 'utils';

const getNotification = (
  title: string,
  message: string,
  details?: string,
  statusCode?: number
) => openModal({
  name: modalNames.MESSAGE_MODAL,
  payload: { title, message, details, statusCode },
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
              status_code
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
          if (
            status_code === statusCodes.NO_SESSION
            || status_code === statusCodes.USER_NOT_AUTH
            || status_code === statusCodes.SESSION_TIMEOUT
          ) {
            storageUtil.clearStorage();
            urlUtil.openLocation(basePath);
          } else {
            dispatch(getNotification(
              `${res.statusCode} Error`,
              error_message,
              error_description,
              status_code
            ));
          }
        } else {
          dispatch(getNotification(
            `${res && res.statusCode ? res.statusCode : ''} Error`,
            res ? res.toString() : 'An error occurred.'
          ));
        }
      }
    };
