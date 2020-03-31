import { connect } from 'react-redux';

import ApiCallForm from './ApiCallForm';

import { apiCallDetailsSelector, IStoreState } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  initialValues: apiCallDetailsSelector(state),
});

export default connect(
  mapStateToProps
)(ApiCallForm);
