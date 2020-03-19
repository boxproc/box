import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import PageTitle from './PageTitle';

import { handleGetHelpLink, selectHelpLink, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  helpLink: selectHelpLink(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getHelpLink: handleGetHelpLink,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTitle);
