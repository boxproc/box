/**
 * Product general ledger interfaces
 */

export interface IProductGLData {
  product_id: number;
  gl_acc_assets: string;
  gl_acc_liabilities: string;
  gl_acc_profit: string;
  gl_acc_loss: string;
}

export interface IProductGL {
  id: number;
  glAccAssets: string;
  glAccLiabilities: string;
  glAccProfit: string;
  glAccLoss: string;
}
