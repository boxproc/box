import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { change } from 'redux-form';

import GenerateCronExpressionModal from './GenerateCronExpressionModal';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    change,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(GenerateCronExpressionModal);
