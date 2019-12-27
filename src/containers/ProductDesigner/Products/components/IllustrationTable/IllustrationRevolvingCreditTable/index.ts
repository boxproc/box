import { connect } from 'react-redux';

import IllustrationRevolvingCreditTale from './IllustrationRevolvingCreditTale';

import { selectStatementsIllustration } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  statementsIllustration: selectStatementsIllustration(state),
});

export default connect(
  mapStateToProps
)(IllustrationRevolvingCreditTale);
