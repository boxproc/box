import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddProductModal from './AddProductModal';

import { IStoreState } from 'store';

const dirty = isDirty(formNamesConst.ADD_PRODUCT);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddProductModal);
