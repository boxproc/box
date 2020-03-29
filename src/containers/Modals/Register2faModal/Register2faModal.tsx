import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { CodeScreen } from './components';
import { PasswordForm } from './forms';

import {
  THandleSetUserCurrentRegisterStep,
  THandleUserConfirmAuthKey,
  THandleUserGetAuthKey,
} from 'store';

interface IRegister2faModal {
  userGetAuthKey: THandleUserGetAuthKey;
  currentRegisterStep: number;
  setUserCurrentRegisterStep: THandleSetUserCurrentRegisterStep;
  userConfirmAuthKey: THandleUserConfirmAuthKey;
  code: string;
  dataUrl: string;
}

const modalName = modalNamesConst.REGISTER_2FA;

const Register2faModal: React.FC<IRegister2faModal> = ({
  userGetAuthKey,
  currentRegisterStep,
  setUserCurrentRegisterStep,
  userConfirmAuthKey,
  code,
  dataUrl,
}) => {
  React.useEffect(
    () => {
      setUserCurrentRegisterStep(1);
      return () => setUserCurrentRegisterStep(null);
    },
    [setUserCurrentRegisterStep]
  );

  const isSecondStep = React.useMemo(
    () => currentRegisterStep === 2,
    [currentRegisterStep]
  );

  const modalTitle = React.useMemo(
    () => isSecondStep ? '2FA Registration' : 'Password',
    [isSecondStep]
  );

  const modalWidth = React.useMemo(
    () => isSecondStep ? '500px' : '300px',
    [isSecondStep]
  );

  const handleSetFirstStep = React.useCallback(
    () => setUserCurrentRegisterStep(1),
    [setUserCurrentRegisterStep]
  );

  return (
    <Modal
      name={modalName}
      title={modalTitle}
      containerWidth={modalWidth}
    >
      {isSecondStep
        ? (
          <CodeScreen
            onConfirm={userConfirmAuthKey}
            onRegenerate={handleSetFirstStep}
            code={code}
            dataUrl={dataUrl}
          />
        )
        : (
          <PasswordForm
            onSubmit={userGetAuthKey}
            setUserCurrentRegisterStep={setUserCurrentRegisterStep}
          />
        )}
    </Modal>
  );
};

export default Register2faModal;
