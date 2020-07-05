import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  closeAllModals,
  closeModal,
  isReadOnlySelector,
  IStoreState,
  openModal,
  TCloseAllModals,
  TCloseModal,
  TOpenModal,
} from 'store';

export interface IWithModal {
  openModal: TOpenModal;
  closeModal: TCloseModal;
  closeAllModals: TCloseAllModals;
  isReadOnly: boolean;
}

export const withModal = <OriginProps extends {}>(
  Component: React.ComponentType<OriginProps & Partial<IWithModal>>
) => {
  const WithModal: React.FC = props => {
    return (
      <Component {...props as OriginProps} />
    );
  };

  const mapStateToProps = (state: IStoreState) => ({
    isReadOnly: isReadOnlySelector(state),
  });

  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {
      openModal,
      closeModal,
      closeAllModals,
    },
    dispatch
  );

  return connect<Partial<IWithModal>, Partial<IWithModal>, any, IStoreState>(
    mapStateToProps,
    mapDispatchToProps
  )(WithModal);
};
