import type { AuthImgProps } from '@/@types/auth.types';
import { postMember } from '@api/member';
import { CameraIcon, CloseIcon } from '@components/common/icons/Icons';

const UserInfoImg = ({ register, setValue, inputValue }: AuthImgProps) => {
  const onImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const formData = new FormData();
      formData.append('images', (e.target.files as FileList)[0]);
      const res = await postMember(formData);
      if (res.data.status === 200) {
        setValue('profileImageUrl', res.data.data.imageUrl);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setValue('profileImageUrl', null);
  };
  return (
    <div className="w-full">
      <label
        htmlFor="profileImage"
        className="relative mx-auto flex h-20 w-20 cursor-pointer justify-center overflow-hidden">
        <img
          className="rounded-full"
          src={
            inputValue !== null
              ? inputValue
              : 'https://elasticbeanstalk-ap-northeast-2-077853585725.s3.ap-northeast-2.amazonaws.com/static/387fde04-f7d4-443d-88e1-b678ab5e079ddefaultProfileImg.svg'
          }
        />
        {inputValue && (
          <button
            type="button"
            onClick={onRemoveClick}
            className="absolute right-0 top-0">
            <CloseIcon size={20} fill="#D7D7D7" />
          </button>
        )}
        <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-2xl border border-solid border-gray3 bg-white">
          <CameraIcon />
        </div>
      </label>
      <input
        className="hidden"
        id="profileImage"
        type="file"
        accept="image/*"
        onChange={onImgChange}
      />
      <input
        className="hidden"
        id="profileImage"
        type="text"
        {...register('profileImageUrl')}
      />
    </div>
  );
};

export default UserInfoImg;
