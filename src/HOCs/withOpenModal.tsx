import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { openModal } from 'store/domains';

export const withOpenModal = (Component: React.ComponentType<any>) => {
  const WithOpenModal: React.FC = props => {
    return (<Component {...props}/>);
  };
  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {
      openModal,
    },
    dispatch
  );

  return connect(null, mapDispatchToProps)(WithOpenModal);
};
