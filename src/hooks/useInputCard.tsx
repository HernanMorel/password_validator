import { useEffect, useState } from 'react';

interface UseInputCardProps {
  passwordReqs: (password: string) => boolean;
  activeCardIndex: number;
}

export const useInputCard = ({
  passwordReqs,
  activeCardIndex,
}: UseInputCardProps) => {
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  // resets the password and validation state as the content in the carousel changes
  useEffect(() => {
    setPassword('');
    setIsValid(null);
  }, [activeCardIndex]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const isValidPassword = passwordReqs(newPassword);
    setIsValid(isValidPassword);
  };
  // presents a dynamic password requirement message based on fulfilled requirements
  const passwordMessage =
    (activeCardIndex !== 3 && isValid) || (activeCardIndex === 3 && !isValid)
      ? 'Password requirement met. Thank you!'
      : 'Please fulfill the password requirement.';

  // dynamic alert alert type shown on the message box underneath the input field
  const descriptionAlertType =
    (activeCardIndex !== 3 && isValid) || (activeCardIndex === 3 && !isValid)
      ? 'success'
      : 'error';
  return {
    password,
    isValid,
    handlePasswordChange,
    passwordMessage,
    descriptionAlertType,
  };
};
