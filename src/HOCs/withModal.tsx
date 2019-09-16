import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { closeModal, openModal } from 'store/domains';

export const withModal = (Component: React.ComponentType<any>) => {
  const WithOpenModal: React.FC = props => {
    return (<Component {...props}/>);
  };
  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {
      openModal,
      closeModal,
    },
    dispatch
  );

  return connect(null, mapDispatchToProps)(WithOpenModal);
};
