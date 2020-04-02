import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AprsTable from './AprsTable';

import {
  handleDeleteProductApr,
  handleGetProductAprs,
  handleUpdateProductApr,
  isProductAprsDeletingSelector,
  isProductAprsLoadingSelector,
  IStoreState,
  productAprsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductAprsLoadingSelector(state) || isProductAprsDeletingSelector(state),
  productAprs: productAprsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProductAprs: handleGetProductAprs,
    deleteProductApr: handleDeleteProductApr,
    updateProductApr: handleUpdateProductApr,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AprsTable);
