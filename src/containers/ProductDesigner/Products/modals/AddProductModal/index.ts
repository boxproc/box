import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddProductModal from './AddProductModal';

import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.ADD_PRODUCT);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddProductModal);
