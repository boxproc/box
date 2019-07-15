import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditProductModal from './EditProductModal';

import {
  closeModal,
  createLoadingSelector,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductModal);