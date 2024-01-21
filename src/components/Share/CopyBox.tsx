import CopyToast from './CopyToast';

interface Props {
  title: string;
  subTitle: string;
  copyValue: string;
}

const CopyBox = ({ title, subTitle, copyValue }: Props) => {
  const onCopyClick = () => {
    navigator.clipboard.writeText(copyValue);
  };

  return (
    <div>
      <div className="mb-4 flex flex-col gap-1">
        <span className="title3 text-gray7">{`${title} 복사`}</span>
        <span className="body6 text-gray4">{subTitle}</span>
      </div>
      <div className="flex h-12 w-full items-center justify-between rounded-lg border border-solid border-gray2 px-4 py-2">
        <input
          className="body5 mr-4 w-full text-gray6 outline-none"
          readOnly
          value={copyValue}
        />
        <CopyToast title={title}>
          <div
            onClick={onCopyClick}
            className="bg-main3 body3 w-12 rounded-lg p-2 text-main1">
            복사
          </div>
        </CopyToast>
      </div>
    </div>
  );
};

export default CopyBox;
