import { connect } from 'react-redux';

import EditProductForms from './EditProductForms';

import { activeItemIdSelector, selectCurrentProductType, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  currentProductType: selectCurrentProductType(state),
  currentProductId: activeItemIdSelector(state),
});

export default connect(
  mapStateToProps
)(EditProductForms);
