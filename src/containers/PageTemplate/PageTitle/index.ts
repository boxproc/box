import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import PageTitle from './PageTitle';

import { handleGetHelpLink, helpLinkSelector, IStoreState } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  helpLink: helpLinkSelector(state),
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
