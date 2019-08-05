import { connect } from 'react-redux';

import AddCustomerForm from './AddCustomerForm';

import {
  StoreState,
} from 'store/StoreState';

import {
  createLoadingSelector,
} from 'store/domains';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

export default connect(
  mapStateToProps
)(AddCustomerForm);
