import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AprsForm from './AprsForm';

import {
  handleAddProductApr,
  isProductAprsAddingSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductAprsAddingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addProductApr: handleAddProductApr,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AprsForm);
