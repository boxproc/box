export interface GeneralLedgerItem {
  product_id: number;
  gl_acc_assets: string;
  gl_acc_liabilities: string;
  gl_acc_profit: string;
  gl_acc_loss: string;
}

export interface GeneralLedgerItemPrepared {
  id: number;
  glAccAssets: string;
  glAccLiabilities: string;
  glAccProfit: string;
  glAccLoss: string;
}

export interface ProductGeneralLedgerState { }
