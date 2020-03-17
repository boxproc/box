import { connect } from 'react-redux';

import EditProductForms from './EditProductForms';

import { selectActiveItemId, selectCurrentProductType, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  currentProductType: selectCurrentProductType(state),
  currentProductId: selectActiveItemId(state),
});

export default connect(
  mapStateToProps
)(EditProductForms);
