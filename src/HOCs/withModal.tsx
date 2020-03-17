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
  selectIsReadOnly,
  StoreState,
} from 'store';

export interface WithModalProps {
  openModal: OpenModal;
  closeModal: CloseModal;
  closeAllModals: CloseAllModals;
  isReadOnly: boolean;
}

export const withModal = <OriginProps extends {}>(
  Component: React.ComponentType<OriginProps & Partial<WithModalProps>>
) => {
  const WithModal: React.FC = props => {
    return (
      <Component {...props as OriginProps} />
    );
  };

  const mapStateToProps = (state: StoreState) => ({
    isReadOnly: selectIsReadOnly(state),
  });

  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {
      openModal,
      closeModal,
      closeAllModals,
    },
    dispatch
  );

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithModal);
};
