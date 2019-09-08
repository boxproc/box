import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

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

const modalName = modalNames.REGISTER_2FA_MODAL;

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

  const stepTwo = 2;

  return (
    <Modal
      name={modalName}
      title={currentRegisterStep === stepTwo ? 'Secret Code' : 'Password'}
      maxContainerWidth={350}
    >
      {currentRegisterStep === stepTwo
        ? (
          <CodeScreen
            onConfirm={userConfirmAuthKey}
            onRegenerate={() => setUserCurrentRegisterStep(1)}
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
