import React from 'react';

import { Modal } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

import { CodeScreen } from './components';
import { PasswordForm } from './forms';

import {
  HandleSetUserCurrentRegisterStep,
  HandleUserConfirmAuthKey,
  HandleUserGetAuthKey,
} from 'store/domains';

interface Register2faModalProps {
  userGetAuthKey: HandleUserGetAuthKey;
  currentRegisterStep: number;
  setUserCurrentRegisterStep: HandleSetUserCurrentRegisterStep;
  userConfirmAuthKey: HandleUserConfirmAuthKey;
  code: string;
  dataUrl: string;
}

const modalName = modalNamesConst.REGISTER_2FA;

const Register2faModal: React.FC<Register2faModalProps> = ({
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
      return () => {
        setUserCurrentRegisterStep(null);
      };
    },
    [setUserCurrentRegisterStep]
  );

  const handleSetFirstStep = React.useCallback(
    () => setUserCurrentRegisterStep(1),
    [setUserCurrentRegisterStep]
  );

  const isSecondStep = currentRegisterStep === 2;

  return (
    <Modal
      name={modalName}
      title={isSecondStep ? '2FA Registration' : 'Password'}
      maxContainerWidth={isSecondStep ? 500 : 300}
      type={modalTypesConst.REGISTRATION_2FA}
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
