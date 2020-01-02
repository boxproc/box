import React from 'react';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  ExternalSpinnerProps,
  Paragraph,
  withSpinner,
} from 'components';

import { transactionTypesId } from 'consts';
import { withLoadTransactionTypes, WithLoadTransactionTypesProps } from 'HOCs';
import { HandleIllustrateRevolvingCreditProduct } from 'store/domains';
import styled from 'theme';
import {
  IllustrationAprsTable,
  IllustrationRevolvingCreditTable,
  IllustrationTransactionsTable,
  ProductIllustrationRevolvingCredit
} from '../../components';
import { illustrationInitialValuesRevolvingCredit } from '../../consts';

const TableWrapper = styled(Box)`
  max-width: 100%;
`;

interface IllustrationProductFormProps extends ExternalSpinnerProps, WithLoadTransactionTypesProps {
  illustrateRevolvingCreditProduct: HandleIllustrateRevolvingCreditProduct;
  dirty: boolean;
  onCancel?: () => void;
  isReadOnly: boolean;
}

const GeneralProductForm: React.FC<IllustrationProductFormProps> = ({
  onCancel,
  illustrateRevolvingCreditProduct,
  transactionTypesOptions,
  isTransactionTypesLoading,
  isReadOnly,
  dirty,
}) => {
  // React.useEffect(
  //   () => {
  //     return () => console.log();
  //   },
  //   []
  // );

  const initalPurchaseType = React.useMemo(
    () => transactionTypesOptions
      .find(type => type.value === transactionTypesId.PURCHASE_CARD_PAYMENT),
    [transactionTypesOptions]
  );
  const initalCahWithdrawalType = React.useMemo(
    () => transactionTypesOptions
      .find(type => type.value === transactionTypesId.CASH_WITHDRAWAL_ATM),
    [transactionTypesOptions]
  );
  const initalBalanceTransferType = React.useMemo(
    () => transactionTypesOptions
      .find(type => type.value === transactionTypesId.BALANCE_TRANSFER_DEBIT),
    [transactionTypesOptions]
  );

  return (
    <React.Fragment>
      <ProductIllustrationRevolvingCredit
        initialValues={{
          ...illustrationInitialValuesRevolvingCredit,
          transactionType1: initalPurchaseType,
          transactionType2: initalCahWithdrawalType,
          transactionType3: initalBalanceTransferType,
        }
        }
        illustrateRevolvingCreditProduct={illustrateRevolvingCreditProduct}
        transactionTypesOptions={transactionTypesOptions}
        isTransactionTypesLoading={isTransactionTypesLoading}
        isReadOnly={isReadOnly}
      />

      <Box mt="10px">
        <Paragraph
          bold={true}
          light={true}
        >
          Transactions
        </Paragraph>
        <IllustrationTransactionsTable />]
      </Box>
      <Flex alignItems="flex-start" flexWrap="wrap" >
        <TableWrapper mt="10px" padding="10px">
          <Paragraph
            bold={true}
            light={true}
          >
            Statements
          </Paragraph>
          <IllustrationRevolvingCreditTable />
        </TableWrapper>
        <TableWrapper mt="10px" padding="10px">
          <Paragraph
            bold={true}
            light={true}
          >
            APR
          </Paragraph>
          <IllustrationAprsTable />
        </TableWrapper>
      </Flex>
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={onCancel}
          rightPosition={true}
          withCancelConfirmation={dirty}
        />
      </Flex>
    </React.Fragment>
  );
};

export default (withSpinner())(withLoadTransactionTypes(GeneralProductForm));
