import { ReactComponent as StarIcon } from '@assets/images/Star.svg';

export default function DetailToursRating() {
  return (
    <div className="flex w-full items-center gap-1">
      <StarIcon fill="yellow" />
      <StarIcon fill="yellow" />
      <StarIcon fill="yellow" />
      <StarIcon fill="yellow" />
      <StarIcon fill="#EDEDED" />

      <p className="text-xs font-normal leading-4">(4)</p>
    </div>
  );
}
