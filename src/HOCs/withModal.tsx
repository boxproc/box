import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  closeAllModals,
  CloseAllModals,
  closeModal,
  CloseModal,
  openModal,
  OpenModal,
} from 'store/domains';

export interface WithModalProps {
  openModal: OpenModal;
  closeModal: CloseModal;
  closeAllModals: CloseAllModals;
}

export const withModal = <OriginProps extends {}>(
  Component: React.ComponentType<OriginProps & Partial<WithModalProps>>
) => {
  const WithModal: React.FC = props => {
    return (
      <Component {...props as OriginProps} />
    );
  };
  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {
      openModal,
      closeModal,
      closeAllModals,
    },
    dispatch
  );

  return connect(
    null,
    mapDispatchToProps
  )(WithModal);
};
