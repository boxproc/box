import { IProductGL, IProductGLData } from './types';

export const prepareDataToRender = (data: Partial<IProductGLData>) => {
  if (!data) {
    return null;
  }

  const {
    gl_acc_assets,
    gl_acc_liabilities,
    gl_acc_profit,
    gl_acc_loss,
  } = data;

  return {
    glAccAssets: gl_acc_assets,
    glAccLiabilities: gl_acc_liabilities,
    glAccProfit: gl_acc_profit,
    glAccLoss: gl_acc_loss,
  };
};

export const prepareDataToSend = (data: Partial<IProductGL>) => {
  if (!data) {
    return null;
  }

  const { glAccAssets, glAccLiabilities, glAccProfit, glAccLoss, id } = data;

  return {
    product_id: id,
    gl_acc_assets: glAccAssets,
    gl_acc_liabilities: glAccLiabilities,
    gl_acc_profit: glAccProfit,
    gl_acc_loss: glAccLoss,
  };
};
