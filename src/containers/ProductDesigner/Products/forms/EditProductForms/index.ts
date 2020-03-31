import { connect } from 'react-redux';

import EditProductForms from './EditProductForms';

import { activeItemIdSelector, IStoreState, selectCurrentProductType } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  currentProductType: selectCurrentProductType(state),
  currentProductId: activeItemIdSelector(state),
});

export default connect(
  mapStateToProps
)(EditProductForms);
