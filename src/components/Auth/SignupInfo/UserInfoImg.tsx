import { CameraIcon } from '@components/common/icons/Icons';

const UserInfoImg = () => {
  const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);

    // let fileArr = e.target.files;
    // setPostImg(Array.from(fileArr));

    // let fileRead = new FileReader();
    // fileRead.onload = function(){
    //     setPreviewImg(fileRead.result);
    // };

    // fileRead.readAsDataURL(file[0]);
  };
  return (
    <div className="mb-10 w-full">
      <label
        htmlFor="profileImage"
        className="relative mx-auto flex h-20 w-20 cursor-pointer justify-center overflow-hidden">
        <img
          className="rounded-full"
          src="https://d2v80xjmx68n4w.cloudfront.net/gigs/FyS0m1682137694.jpg"
        />
        <div className="absolute bottom-0 right-0">
          <CameraIcon />
          <img src="@/assets/images/cameraCircle.svg" />
        </div>
      </label>
      <input
        className="hidden"
        id="profileImage"
        type="file"
        accept="image/*"
        onChange={onImgChange}
      />
    </div>
  );
};

export default UserInfoImg;
