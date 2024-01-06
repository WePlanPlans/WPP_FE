import { CheckIcon } from '@components/common/icons/Icons';
import validationList from '@utils/Auth/validationList';
import { useEffect, useState } from 'react';

interface Props {
  checkId: string;
  inputValue: string;
  inputValueCheck?: string;
}

const ValidifyCheck = ({ checkId, inputValue, inputValueCheck }: Props) => {
  const [isValidated, setIsValidated] = useState(false);

  const matchedValidation = validationList.find(
    (validationItem) => validationItem.id === checkId,
  );

  useEffect(() => {
    matchedValidation
      ? checkId !== 'checkPwMatch'
        ? setIsValidated(matchedValidation.func(inputValue, ''))
        : inputValue !== '' &&
          setIsValidated(
            matchedValidation.func(inputValue, inputValueCheck || ''),
          )
      : setIsValidated(false);
  }, [inputValue, inputValueCheck]);

  return (
    <div className="flex items-center gap-px">
      <span className="text-xs font-normal text-gray4">
        {matchedValidation?.value}
      </span>
      <CheckIcon size={16} color={isValidated ? '#29DDF6' : '#888888'} />
    </div>
  );
};

export default ValidifyCheck;
