import { getColor } from '@utils/getColor';

interface IconProps {
  size?: number;
  color?: string;
  fill?: string;
  onClick?: () => void;
  className?: string;
  isHalf?: boolean;
  cursor?: string;
  children?: React.ReactNode;
  number?: number;
}

export const HomeIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={fill}>
      <path
        d="M2.94556 11.3541C2.94556 10.1299 3.50614 8.97315 4.46698 8.21459L9.96698 3.87248C11.4202 2.72519 13.4709 2.72519 14.9241 3.87248L20.4241 8.21459C21.385 8.97315 21.9456 10.1299 21.9456 11.3541V17.9157C21.9456 20.1248 20.1547 21.9157 17.9456 21.9157H16.4456C15.8933 21.9157 15.4456 21.468 15.4456 20.9157V17.9157C15.4456 16.8111 14.5501 15.9157 13.4456 15.9157H11.4456C10.341 15.9157 9.44556 16.8111 9.44556 17.9157V20.9157C9.44556 21.468 8.99784 21.9157 8.44556 21.9157H6.94556C4.73642 21.9157 2.94556 20.1248 2.94556 17.9157L2.94556 11.3541Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const CalendarIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 25 25"
      fill={fill}>
      <rect
        x="3.1955"
        y="4.66537"
        width="18"
        height="18"
        rx="5"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M3.1955 9.66537H21.1955"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16.6956 3.16537L16.6956 6.16537"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.69556 3.16537L7.69556 6.16537"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.69543 13.6646H7.69543"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6954 13.6646H12.6954"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6955 13.6646H17.6955"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.69543 17.6654H7.69543"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6954 17.6654H12.6954"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6955 17.6654H17.6955"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CalendarIcon2: React.FC<IconProps> = ({ size = 25 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.40913 7.61438H21.8252C21.4919 4.94249 19.2127 2.875 16.4505 2.875H7.78385C5.0217 2.875 2.74243 4.94249 2.40913 7.61438ZM21.8672 8.96849H2.36719V16.9585C2.36719 19.95 4.79231 22.3752 7.78385 22.3752H16.4505C19.4421 22.3752 21.8672 19.95 21.8672 16.9585V8.96849Z"
        fill="#1E1E1E"
      />
      <path
        d="M6.15918 12.6195H7.24251"
        stroke="white"
        strokeWidth="1.35412"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5752 12.6195H12.6585"
        stroke="white"
        strokeWidth="1.35412"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9922 12.6195H18.0755"
        stroke="white"
        strokeWidth="1.35412"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.15918 16.9525H7.24251"
        stroke="white"
        strokeWidth="1.35412"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5752 16.9525H12.6585"
        stroke="white"
        strokeWidth="1.35412"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9922 16.9525H18.0755"
        stroke="white"
        strokeWidth="1.35412"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5758 2.06055L16.5758 5.31058"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.65885 2.06055L7.65885 5.31058"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HeartIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
  onClick,
}) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={fill}>
      <path
        d="M4.56662 14.1289L10.7276 20.622C11.9106 21.8687 13.8971 21.8687 15.0801 20.622L21.2411 14.1289C23.4581 11.7925 23.4581 8.00429 21.2411 5.66782C19.0241 3.33135 15.4297 3.33135 13.2127 5.66782V5.66782C13.0448 5.84472 12.7629 5.84472 12.5951 5.66782V5.66782C10.3781 3.33135 6.78362 3.33135 4.56662 5.66782C2.34962 8.00429 2.34962 11.7925 4.56662 14.1289Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const UserIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={fill}>
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-1 0 0 1 16.6538 3.91537)"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M5.65381 17.85C5.65381 16.9897 6.19466 16.2222 7.0049 15.9328V15.9328C10.6578 14.6282 14.6498 14.6282 18.3027 15.9328V15.9328C19.113 16.2222 19.6538 16.9897 19.6538 17.85V19.1656C19.6538 20.353 18.6021 21.2651 17.4266 21.0972L16.4722 20.9609C13.9395 20.599 11.3682 20.599 8.83543 20.9609L7.88101 21.0972C6.70551 21.2651 5.65381 20.353 5.65381 19.1656V17.85Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

interface ChackIconProps {
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
}

export const CheckIcon = ({
  width = 16,
  height = 16,
  color = '#888888',
  fill = 'none',
}: ChackIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36698">
        <path
          id="Vector 747"
          d="M2.93848 8.00788L7.01646 12.0858L13.4343 5.66797"
          stroke={color}
        />
      </g>
    </svg>
  );
};

interface LeftIconProps {
  width?: number;
  height?: number;
  fill?: string;
  onClick?: VoidFunction;
  cursor?: string;
}

export const LeftIcon = ({
  width = 8,
  height = 15,
  fill = '#1E1E1E',
  onClick,
  cursor = 'pointer',
}: LeftIconProps) => {
  return (
    <svg
      onClick={onClick}
      cursor={cursor}
      width={width}
      height={height}
      viewBox="0 0 8 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        id="Left"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.65547 0.743953C8.9713 1.02827 8.99457 1.51229 8.70746 1.82503L2.99737 8.04492L8.70746 14.2648C8.99457 14.5776 8.9713 15.0616 8.65547 15.3459C8.33964 15.6302 7.85086 15.6072 7.56375 15.2944L0.908447 8.04492L7.56375 0.795433C7.85087 0.482685 8.33965 0.459636 8.65547 0.743953Z"
        fill={fill}
      />
    </svg>
  );
};

export const MapIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size + 4}
      viewBox="2 -1.5 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36689">
        <g id="Group">
          <path
            id="Exclude"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.63905 13.4649C8.02061 14.0124 8.81045 14.0124 9.192 13.4649C10.4794 11.6176 12.9155 7.87993 12.9155 6.04785C12.9155 4.85438 12.4414 3.70978 11.5975 2.86587C10.7536 2.02196 9.609 1.54785 8.41553 1.54785C7.22205 1.54785 6.07746 2.02196 5.23355 2.86587C4.38963 3.70978 3.91553 4.85438 3.91553 6.04785C3.91553 7.87993 6.35168 11.6176 7.63905 13.4649ZM9.91553 6.04785C9.91553 6.87628 9.24395 7.54785 8.41553 7.54785C7.5871 7.54785 6.91553 6.87628 6.91553 6.04785C6.91553 5.21942 7.5871 4.54785 8.41553 4.54785C9.24395 4.54785 9.91553 5.21942 9.91553 6.04785Z"
            stroke={color}
          />
        </g>
      </g>
    </svg>
  );
};

export const PenIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36684">
        <g id="Group 36683">
          <path
            id="Rectangle 74"
            d="M12.9793 3.21944C13.6297 2.56808 14.6846 2.56768 15.3354 3.21855L17.412 5.29509C18.0573 5.94042 18.064 6.98512 17.427 7.63868L9.73273 15.5331C9.26238 16.0156 8.61727 16.2878 7.94365 16.2877L5.65019 16.2876C4.9395 16.2876 4.37194 15.6952 4.40183 14.9846L4.50029 12.6437C4.52662 12.0177 4.78681 11.4244 5.22936 10.9811L12.9793 3.21944Z"
            stroke={color}
            strokeWidth="1.25"
          />
          <path
            id="Line"
            d="M11.2227 5.12033L15.3475 9.24512"
            stroke={color}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Line_2"
            d="M13.2701 16.2266H18.3715"
            stroke={color}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export const PhoneIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36690">
        <path
          id="Vector"
          d="M10.4971 14.3215C11.1129 14.7188 11.8468 14.8919 12.5752 14.8118C13.3037 14.7316 13.9823 14.4031 14.4971 13.8815L14.9471 13.4415C15.1444 13.2397 15.2548 12.9687 15.2548 12.6865C15.2548 12.4043 15.1444 12.1333 14.9471 11.9315L13.0371 10.0415C12.837 9.84482 12.5676 9.73463 12.2871 9.73463C12.0065 9.73463 11.7372 9.84482 11.5371 10.0415C11.3353 10.2388 11.0643 10.3492 10.7821 10.3492C10.4999 10.3492 10.2289 10.2388 10.0271 10.0415L7.02709 7.04148C6.92701 6.94285 6.84754 6.82532 6.79329 6.6957C6.73905 6.56609 6.71112 6.42698 6.71112 6.28648C6.71112 6.14597 6.73905 6.00687 6.79329 5.87725C6.84754 5.74764 6.92701 5.6301 7.02709 5.53148C7.22374 5.33137 7.33394 5.06204 7.33394 4.78148C7.33394 4.50092 7.22374 4.23158 7.02709 4.03148L5.12709 2.13148C4.9253 1.93419 4.6543 1.82373 4.37209 1.82373C4.08988 1.82373 3.81888 1.93419 3.61709 2.13148L3.17709 2.58148C2.65544 3.09622 2.32692 3.77488 2.24679 4.50334C2.16666 5.23181 2.3398 5.96565 2.73709 6.58148C4.80713 9.63221 7.44103 12.2593 10.4971 14.3215Z"
          stroke={color}
        />
      </g>
    </svg>
  );
};

export const ReactIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className="iconify iconify--logos"
      width={size}
      height={size}
      fill={fill}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 228">
      <path
        stroke={color}
        d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path>
    </svg>
  );
};

export const StarIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
  onClick,
  className,
  isHalf,
}) => {
  const renderLinearGradient = () => {
    if (isHalf) {
      return (
        <defs>
          <linearGradient id="grad">
            <stop offset="50%" stopColor="#FFEC3E" />
            <stop offset="50%" stopColor="#EDEDED" />
          </linearGradient>
        </defs>
      );
    }
    return null;
  };

  const renderStarPath = () => (
    <path
      id="Star 5"
      d="M7.46447 0.974901C7.76382 0.0535908 9.06723 0.0535913 9.36658 0.974902L10.4362 4.2667C10.57 4.67872 10.954 4.95768 11.3872 4.95768H14.8484C15.8171 4.95768 16.2199 6.1973 15.4362 6.7667L12.636 8.80114C12.2855 9.05578 12.1389 9.50715 12.2728 9.91917L13.3423 13.211C13.6417 14.1323 12.5872 14.8984 11.8035 14.329L9.00331 12.2946C8.65283 12.0399 8.17823 12.0399 7.82774 12.2946L5.02757 14.329C4.24386 14.8984 3.18938 14.1323 3.48873 13.211L4.5583 9.91917C4.69217 9.50715 4.54552 9.05578 4.19503 8.80114L1.39486 6.7667C0.611146 6.1973 1.01392 4.95768 1.98265 4.95768H5.44385C5.87707 4.95768 6.26103 4.67872 6.3949 4.2667L7.46447 0.974901Z"
      stroke={color}
      fill={isHalf ? 'url(#grad)' : fill}
    />
  );

  return (
    <svg
      onClick={onClick}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 15"
      xmlns="http://www.w3.org/2000/svg">
      {renderLinearGradient()}
      {renderStarPath()}
    </svg>
  );
};

export const PlusIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'black',
  fill = 'none',
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill={fill}
      className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00073 0.31644C7.34591 0.31644 7.62573 0.596262 7.62573 0.94144V12.6805C7.62573 13.0257 7.34591 13.3055 7.00073 13.3055C6.65555 13.3055 6.37573 13.0257 6.37573 12.6805V0.94144C6.37573 0.596262 6.65555 0.31644 7.00073 0.31644Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4953 6.81091C13.4953 7.15609 13.2154 7.43591 12.8703 7.43591L1.13121 7.43591C0.786037 7.43591 0.506215 7.15609 0.506215 6.81091C0.506215 6.46573 0.786037 6.18591 1.13121 6.18591L12.8703 6.18591C13.2154 6.18591 13.4953 6.46574 13.4953 6.81091Z"
        fill={color}
      />
    </svg>
  );
};

export const ChatIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.08606 14.9353L2.39841 15.3257H2.39841L2.08606 14.9353ZM12.6696 12.8018V12.3018V12.8018ZM5.22064 12.8018V12.3018V12.8018ZM1.50293 4.13509C1.50293 2.57028 2.77146 1.30176 4.33626 1.30176V0.301758C2.21917 0.301758 0.50293 2.018 0.50293 4.13509H1.50293ZM1.50293 8.67676V4.13509H0.50293V8.67676H1.50293ZM1.50293 9.46842V8.67676H0.50293V9.46842H1.50293ZM1.50293 14.4147V9.46842H0.50293V14.4147H1.50293ZM1.77371 14.5448C1.66458 14.6321 1.50293 14.5544 1.50293 14.4147H0.50293C0.50293 15.3929 1.63452 15.9368 2.39841 15.3257L1.77371 14.5448ZM4.07536 12.7035L1.77371 14.5448L2.39841 15.3257L4.70006 13.4844L4.07536 12.7035ZM12.6696 12.3018L5.22064 12.3018V13.3018L12.6696 13.3018V12.3018ZM15.5029 9.46842C15.5029 11.0332 14.2344 12.3018 12.6696 12.3018V13.3018C14.7867 13.3018 16.5029 11.5855 16.5029 9.46842H15.5029ZM15.5029 4.13509V9.46842H16.5029V4.13509H15.5029ZM12.6696 1.30176C14.2344 1.30176 15.5029 2.57028 15.5029 4.13509H16.5029C16.5029 2.018 14.7867 0.301758 12.6696 0.301758V1.30176ZM4.33626 1.30176H12.6696V0.301758H4.33626V1.30176ZM4.70006 13.4844C4.84782 13.3662 5.03141 13.3018 5.22064 13.3018V12.3018C4.80434 12.3018 4.40044 12.4434 4.07536 12.7035L4.70006 13.4844Z"
        fill="#888888"
      />
      <circle cx="4.79053" cy="6.83789" r="0.9375" fill="#888888" />
      <circle cx="8.54053" cy="6.83789" r="0.9375" fill="#888888" />
      <circle cx="12.2905" cy="6.83789" r="0.9375" fill="#888888" />
    </svg>
  );
};

export const CloseIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'white',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36673">
        <circle id="Ellipse" cx="8.00671" cy="8.59326" r="8" fill={fill} />
        <path
          id="Line"
          d="M5.04033 5.62725L10.9731 11.5601"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line_2"
          d="M10.9731 5.62725L5.04028 11.5601"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const DeleteIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36693">
        <g id="Trash can">
          <path
            id="Rectangle 74"
            d="M3.77651 5.58206C3.21324 4.83103 3.74912 3.75928 4.68791 3.75928H12.1309C13.0697 3.75928 13.6056 4.83103 13.0423 5.58206V5.58206C12.6315 6.12984 12.4094 6.79608 12.4094 7.4808V11.7593C12.4094 13.232 11.2155 14.4259 9.74276 14.4259H7.07609C5.60333 14.4259 4.40942 13.232 4.40942 11.7593V7.4808C4.40942 6.79608 4.18734 6.12984 3.77651 5.58206V5.58206Z"
            stroke={color}
          />
          <path
            id="Line"
            d="M9.74268 11.0928L9.74268 7.09277"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Line_2"
            d="M7.07617 11.0928L7.07617 7.09277"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Rectangle 4"
            d="M11.076 3.75928L10.7132 2.67097C10.5318 2.12652 10.0222 1.75928 9.44833 1.75928H7.37035C6.79645 1.75928 6.28693 2.12652 6.10544 2.67097L5.74268 3.75928"
            stroke={color}
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
};

export const MoreIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36692">
        <g id="Group 36691">
          <circle
            id="Ellipse 533"
            cx="12.4155"
            cy="5.81689"
            r="1.69482"
            stroke={color}
          />
          <circle
            id="Ellipse 534"
            cx="12.4155"
            cy="12.1226"
            r="1.69482"
            stroke={color}
          />
          <circle
            id="Ellipse 535"
            cx="12.4155"
            cy="18.4272"
            r="1.69482"
            stroke={color}
          />
        </g>
      </g>
    </svg>
  );
};

export const DownIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
  onClick,
  cursor = 'pointer',
  className,
}) => {
  return (
    <svg
      onClick={onClick}
      cursor={cursor}
      width={size}
      height={size}
      className={className}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36659">
        <path
          id="Vector 734"
          d="M3.12079 5.40039L8.41553 10.6951L13.7103 5.40039"
          stroke={color}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const SearchIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Search">
        <ellipse
          id="Ellipse"
          cx="6.74886"
          cy="6.60726"
          rx="5.33333"
          ry="5.33333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line"
          d="M10.4155 10.5793L13.7489 13.9127"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const CameraIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36734">
        <path
          id="Union (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.80814 1.81641C5.29776 1.81641 4.85442 2.16747 4.73743 2.66426L4.59715 3.25993C4.52235 3.57756 4.23874 3.89225 3.82176 3.89225H3.06094C2.45342 3.89225 1.96094 4.38473 1.96094 4.99224V10.0194C1.96094 10.6269 2.45342 11.1194 3.06094 11.1194H11.8609C12.4685 11.1194 12.9609 10.6269 12.9609 10.0194V4.99225C12.9609 4.38473 12.4685 3.89225 11.8609 3.89225H11.1008C10.6856 3.89225 10.4028 3.57886 10.3288 3.26184L10.1896 2.66616C10.0733 2.16846 9.62955 1.81641 9.11844 1.81641H5.80814ZM3.76405 2.43503C3.9874 1.48662 4.83378 0.816406 5.80814 0.816406H9.11844C10.0942 0.816406 10.9414 1.4885 11.1634 2.43867L11.2693 2.89225H11.8609C13.0207 2.89225 13.9609 3.83245 13.9609 4.99225V10.0194C13.9609 11.1792 13.0207 12.1194 11.8609 12.1194H3.06094C1.90114 12.1194 0.960938 11.1792 0.960938 10.0194V4.99224C0.960938 3.83245 1.90114 2.89225 3.06094 2.89225H3.65638L3.76405 2.43503Z"
          fill="#1E1E1E"
        />
        <path
          id="Ellipse 536 (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.46038 5.17187C6.48987 5.17187 5.70312 5.95862 5.70312 6.92913C5.70312 7.89963 6.48987 8.68638 7.46038 8.68638C8.43088 8.68638 9.21763 7.89963 9.21763 6.92913C9.21763 5.95862 8.43088 5.17187 7.46038 5.17187ZM4.70312 6.92913C4.70312 5.40634 5.93759 4.17188 7.46038 4.17188C8.98316 4.17188 10.2176 5.40634 10.2176 6.92913C10.2176 8.45191 8.98316 9.68638 7.46038 9.68638C5.93759 9.68638 4.70312 8.45191 4.70312 6.92913Z"
          fill="#1E1E1E"
        />
      </g>
    </svg>
  );
};

interface LogoProps {
  width?: string;
  height?: string;
  fill?: string;
}

export const LogoIcon: React.FC<LogoProps> = ({
  width = '71',
  height = '22',
  fill = '#29DDF6',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 71 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="WPP">
        <path
          d="M0.888672 2.28455C1.17545 1.71099 1.62611 1.27057 2.24064 0.963305C2.87566 0.635555 3.62334 0.47168 4.48369 0.47168C5.83566 0.47168 6.91109 0.963306 7.70998 1.94656C8.52936 2.90933 8.93905 4.4559 8.93905 6.58628V17.5557L15.9754 1.08621H19.6012L20.4308 16.6339L20.3386 17.525L27.6516 1.08621H31.8611L22.0286 21.3351H15.4838L14.8693 11.9942L10.8134 21.3351H3.40826L2.48646 6.58628C2.425 5.48012 2.24064 4.56856 1.93338 3.85161C1.6466 3.11417 1.29836 2.59182 0.888672 2.28455Z"
          fill={fill}
        />
        <path
          d="M43.483 0.840398C48.5017 0.840398 51.011 2.6123 51.011 6.15611C51.011 8.10213 50.3862 9.65894 49.1367 10.8266C47.9076 11.9942 46.2177 12.578 44.0668 12.578C43.0631 12.578 42.172 12.2912 41.3936 11.7176C41.0249 11.4718 40.7176 11.185 40.4718 10.8573C41.9671 10.8573 43.104 10.4066 43.8824 9.50531C44.6813 8.58351 45.0808 7.23154 45.0808 5.44939C45.0808 3.66725 44.1999 2.77618 42.4383 2.77618H41.7008C41.5779 2.77618 41.4653 2.78642 41.3628 2.8069L37.8293 21.3351H31.1616L34.941 1.20912C37.1328 1.00427 38.8638 0.89161 40.1338 0.871126C41.4038 0.850641 42.5202 0.840398 43.483 0.840398Z"
          fill={fill}
        />
        <path
          d="M63.3415 0.840398C68.3602 0.840398 70.8696 2.6123 70.8696 6.15611C70.8696 8.10213 70.2448 9.65894 68.9952 10.8266C67.7662 11.9942 66.0762 12.578 63.9253 12.578C62.9216 12.578 62.0305 12.2912 61.2521 11.7176C60.8834 11.4718 60.5761 11.185 60.3303 10.8573C61.8257 10.8573 62.9626 10.4066 63.741 9.50531C64.5399 8.58351 64.9393 7.23154 64.9393 5.44939C64.9393 3.66725 64.0585 2.77618 62.2968 2.77618H61.5594C61.4365 2.77618 61.3238 2.78642 61.2214 2.8069L57.6878 21.3351H51.0201L54.7995 1.20912C56.9914 1.00427 58.7223 0.89161 59.9923 0.871126C61.2624 0.850641 62.3788 0.840398 63.3415 0.840398Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export const KakaoIcon = () => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        id="Kakao"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.60938 12.9979C13.0277 12.9979 16.6094 10.2415 16.6094 6.84126C16.6094 3.44101 13.0277 0.68457 8.60938 0.68457C4.1911 0.68457 0.609375 3.44101 0.609375 6.84126C0.609375 9.02531 2.08711 10.9437 4.31509 12.0367L3.76215 15.1916L6.86492 12.8511C7.42645 12.9473 8.01022 12.9979 8.60938 12.9979Z"
        fill="#3B1E1E"
      />
    </svg>
  );
};

export const BackIcon: React.FC<IconProps> = ({
  size = 9,
  fill = '#1E1E1E',
  onClick,
  cursor = 'pointer',
}) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height="16"
      viewBox="0 0 9 16"
      fill={fill}
      cursor={cursor}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Back">
        <path
          d="M8.70308 0.743953C9.0189 1.02827 9.04218 1.51229 8.75507 1.82503L3.04497 8.04492L8.75506 14.2648C9.04218 14.5776 9.0189 15.0616 8.70308 15.3459C8.38725 15.6302 7.89847 15.6072 7.61136 15.2944L0.956054 8.04492L7.61136 0.795433C7.89847 0.482685 8.38725 0.459636 8.70308 0.743953Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const RightIcon = ({ size = 16, fill = '#0D0D0D' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36673">
        <path
          id="Icon"
          d="M5.9062 12.5372C5.64585 12.2768 5.64585 11.8547 5.9062 11.5944L9.43479 8.06576L5.9062 4.53716C5.64585 4.27681 5.64585 3.8547 5.9062 3.59435C6.16655 3.334 6.58866 3.334 6.84901 3.59435L10.849 7.59435C11.1094 7.8547 11.1094 8.27681 10.849 8.53716L6.84901 12.5372C6.58866 12.7975 6.16655 12.7975 5.9062 12.5372Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

interface ProgressBarProps {
  full?: boolean;
}

export const ProgressBarIcon = ({ full = false }: ProgressBarProps) => {
  return (
    <svg
      width="49"
      height="3"
      viewBox="0 0 49 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36811">
        <rect
          id="Rectangle 2586"
          x="0.417969"
          y="0.527344"
          width="22"
          height="2"
          rx="1"
          fill="#29DDF6"
        />
        <rect
          id="Rectangle 2587"
          x="26.2539"
          y="0.527344"
          width="22"
          height="2"
          rx="1"
          fill={full ? '#29DDF6' : '#D7D7D7'}
        />
      </g>
    </svg>
  );
};

export const SuccessIcon = () => {
  return (
    <svg
      width="81"
      height="81"
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36821">
        <circle
          id="Ellipse 546"
          cx="40.4226"
          cy="40.2585"
          r="35.1238"
          stroke="#29DDF6"
          strokeWidth="4"
        />
        <path
          id="Vector 792"
          d="M25.2881 38.8061L36.2808 50.1801L55.5577 30.3379"
          stroke="#29DDF6"
          strokeWidth="5.33333"
          strokeLinecap="round"
        />
        <g id="Group 36821_2">
          <circle
            id="Ellipse 545"
            cx="40.9551"
            cy="40.4521"
            r="40"
            fill="#DAFBFF"
          />
          <path
            id="Vector 792_2"
            d="M21.8516 38.6183L35.7266 52.9746L60.0579 27.9297"
            stroke="#29DDF6"
            strokeWidth="5.33333"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
};

export const DocumentIcon: React.FC<IconProps> = ({
  size = 24,
  fill = '#1E1E1E',
  cursor = 'pointer',
}) => {
  return (
    <svg
      width={size}
      height="25"
      viewBox="0 0 24 25"
      fill={fill}
      cursor={cursor}
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 4.87341C6.98122 4.87341 5.75 6.10463 5.75 7.62341V18.1234C5.75 19.6422 6.98122 20.8734 8.5 20.8734H15.5C17.0188 20.8734 18.25 19.6422 18.25 18.1234V10.007C18.25 9.77306 18.168 9.54653 18.0182 9.36682L14.5736 5.23323C14.3836 5.00524 14.1021 4.87341 13.8053 4.87341H8.5ZM4.25 7.62341C4.25 5.2762 6.15279 3.37341 8.5 3.37341H13.8053C14.5473 3.37341 15.2509 3.70297 15.7259 4.27295L19.1706 8.40654C19.545 8.85583 19.75 9.42216 19.75 10.007V18.1234C19.75 20.4706 17.8472 22.3734 15.5 22.3734H8.5C6.15279 22.3734 4.25 20.4706 4.25 18.1234V7.62341Z"
        fill="#1E1E1E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.625 3.81091C15.0392 3.81091 15.375 4.1467 15.375 4.56091V7.62341C15.375 8.1757 15.8227 8.62341 16.375 8.62341H18.5625C18.9767 8.62341 19.3125 8.9592 19.3125 9.37341C19.3125 9.78763 18.9767 10.1234 18.5625 10.1234H16.375C14.9943 10.1234 13.875 9.00412 13.875 7.62341V4.56091C13.875 4.1467 14.2108 3.81091 14.625 3.81091Z"
        fill="#1E1E1E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75 12.8734C7.75 12.4592 8.08579 12.1234 8.5 12.1234H15.5C15.9142 12.1234 16.25 12.4592 16.25 12.8734C16.25 13.2876 15.9142 13.6234 15.5 13.6234H8.5C8.08579 13.6234 7.75 13.2876 7.75 12.8734Z"
        fill="#1E1E1E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75 17.2484C7.75 16.8342 8.08579 16.4984 8.5 16.4984H12C12.4142 16.4984 12.75 16.8342 12.75 17.2484C12.75 17.6626 12.4142 17.9984 12 17.9984H8.5C8.08579 17.9984 7.75 17.6626 7.75 17.2484Z"
        fill="#1E1E1E"
      />
    </svg>
  );
};

export const EllipseIcon: React.FC<IconProps> = ({ size = 61 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height="61"
      viewBox="0 0 61 61"
      fill="none">
      <g filter="url(#filter0_d_2507_5177)">
        <circle cx="28" cy="29.7959" r="24" fill="white" />
        <circle
          cx="28"
          cy="29.7959"
          r="23.4783"
          stroke="#F8F8F8"
          strokeWidth="1.04348"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2507_5177"
          x="0.0347817"
          y="0.787202"
          width="60.1044"
          height="60.1044"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.08696" dy="1.04348" />
          <feGaussianBlur stdDeviation="3.02609" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2507_5177"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2507_5177"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const TopIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        id="Vector 734 (Stroke)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0462 8.95185C16.7278 9.30213 16.1857 9.32794 15.8354 9.00951L8.86914 2.67653L1.90286 9.00951C1.55258 9.32794 1.01048 9.30213 0.692049 8.95185C0.373615 8.60157 0.39943 8.05947 0.749708 7.74104L8.86914 0.359741L16.9886 7.74104C17.3388 8.05947 17.3647 8.60157 17.0462 8.95185Z"
        fill="#888888"
      />
    </svg>
  );
};

export const ShareIcon: React.FC<ChackIconProps> = ({
  width = 20,
  height = 19,
  fill = 'none',
  color = 'black',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 19"
      fill={fill}>
      <path
        d="M13.623 6.32031L14.9914 6.32031C17.2006 6.32031 18.9914 8.11117 18.9914 10.3203L18.9914 13.9519C18.9914 16.161 17.2006 17.9519 14.9914 17.9519L5.09668 17.9519C2.88754 17.9519 1.09668 16.161 1.09668 13.9519L1.09668 10.3203C1.09668 8.11117 2.88754 6.32031 5.09668 6.32031L6.4651 6.32031"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.7275 3.63734L10.7504 1.66023C10.3599 1.26971 9.72675 1.26971 9.33622 1.66023L7.35912 3.63734"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.0439 1.8491L10.0439 12.5859"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const PlanIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.40263 3.74219C6.13698 3.74219 5.11096 4.7682 5.11096 6.03385V14.7839C5.11096 16.0495 6.13698 17.0755 7.40263 17.0755H13.236C14.5016 17.0755 15.5276 16.0495 15.5276 14.7839V8.02018C15.5276 7.82523 15.4593 7.63645 15.3345 7.48669L12.4639 4.04203C12.3056 3.85204 12.0711 3.74219 11.8237 3.74219H7.40263ZM3.86096 6.03385C3.86096 4.07784 5.44662 2.49219 7.40263 2.49219H11.8237C12.442 2.49219 13.0284 2.76682 13.4242 3.2418L16.2948 6.68646C16.6068 7.06087 16.7776 7.53281 16.7776 8.02018V14.7839C16.7776 16.7399 15.192 18.3255 13.236 18.3255H7.40263C5.44662 18.3255 3.86096 16.7399 3.86096 14.7839V6.03385Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5068 2.85742C12.852 2.85742 13.1318 3.13724 13.1318 3.48242V6.0345C13.1318 6.49474 13.5049 6.86784 13.9652 6.86784H15.7881C16.1333 6.86784 16.4131 7.14766 16.4131 7.49284C16.4131 7.83802 16.1333 8.11784 15.7881 8.11784H13.9652C12.8146 8.11784 11.8818 7.1851 11.8818 6.0345V3.48242C11.8818 3.13724 12.1617 2.85742 12.5068 2.85742Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.77759 10.4082C6.77759 10.063 7.05741 9.7832 7.40259 9.7832H13.2359C13.5811 9.7832 13.8609 10.063 13.8609 10.4082C13.8609 10.7534 13.5811 11.0332 13.2359 11.0332H7.40259C7.05741 11.0332 6.77759 10.7534 6.77759 10.4082Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.77759 14.0547C6.77759 13.7095 7.05741 13.4297 7.40259 13.4297H10.3193C10.6644 13.4297 10.9443 13.7095 10.9443 14.0547C10.9443 14.3999 10.6644 14.6797 10.3193 14.6797H7.40259C7.05741 14.6797 6.77759 14.3999 6.77759 14.0547Z"
        fill={color}
      />
    </svg>
  );
};

export const CarIcon: React.FC<IconProps> = ({
  size = 19,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill={fill}>
      <path
        d="M4.50342 10.3809H6.75342M2.25342 7.38086L3.75342 8.13086L4.7064 5.27191C4.9031 4.6818 5.00146 4.38674 5.18388 4.1686C5.34498 3.97596 5.55186 3.82685 5.78555 3.73494C6.05019 3.63086 6.3612 3.63086 6.98324 3.63086H12.5236C13.1456 3.63086 13.4566 3.63086 13.7213 3.73494C13.955 3.82685 14.1619 3.97596 14.323 4.1686C14.5054 4.38674 14.6037 4.6818 14.8004 5.27191L15.7534 8.13086L17.2534 7.38086M12.7534 10.3809H15.0034M5.85342 8.13086H13.6534C14.9135 8.13086 15.5436 8.13086 16.0249 8.37609C16.4483 8.59181 16.7925 8.93602 17.0082 9.35938C17.2534 9.84068 17.2534 10.4707 17.2534 11.7309V13.7559C17.2534 14.1044 17.2534 14.2786 17.2246 14.4235C17.1062 15.0185 16.6411 15.4837 16.0461 15.602C15.9012 15.6309 15.7269 15.6309 15.3784 15.6309H15.0034C14.175 15.6309 13.5034 14.9593 13.5034 14.1309C13.5034 13.9238 13.3355 13.7559 13.1284 13.7559H6.37842C6.17131 13.7559 6.00342 13.9238 6.00342 14.1309C6.00342 14.9593 5.33184 15.6309 4.50342 15.6309H4.12842C3.77993 15.6309 3.60568 15.6309 3.46078 15.602C2.86575 15.4837 2.4006 15.0185 2.28224 14.4235C2.25342 14.2786 2.25342 14.1044 2.25342 13.7559V11.7309C2.25342 10.4707 2.25342 9.84068 2.49865 9.35938C2.71437 8.93602 3.05857 8.59181 3.48194 8.37609C3.96324 8.13086 4.5933 8.13086 5.85342 8.13086Z"
        stroke={color}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BusIcon: React.FC<IconProps> = ({
  size = 18,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill={fill}>
      <path
        d="M7.12842 14.8809V16.5309C7.12842 16.7409 7.12842 16.8459 7.08755 16.9261C7.05159 16.9967 6.99423 17.054 6.92366 17.09C6.84345 17.1309 6.73844 17.1309 6.52842 17.1309H5.10342C4.8934 17.1309 4.78839 17.1309 4.70817 17.09C4.63761 17.054 4.58024 16.9967 4.54429 16.9261C4.50342 16.8459 4.50342 16.7409 4.50342 16.5309V14.8809M15.0034 14.8809V16.5309C15.0034 16.7409 15.0034 16.8459 14.9625 16.9261C14.9266 16.9967 14.8692 17.054 14.7987 17.09C14.7184 17.1309 14.6134 17.1309 14.4034 17.1309H12.9784C12.7684 17.1309 12.6634 17.1309 12.5832 17.09C12.5126 17.054 12.4552 16.9967 12.4193 16.9261C12.3784 16.8459 12.3784 16.7409 12.3784 16.5309V14.8809M3.00342 9.63086H16.5034M3.00342 4.75586H16.5034M5.62842 12.2559H6.75342M12.7534 12.2559H13.8784M6.60342 14.8809H12.9034C14.1635 14.8809 14.7936 14.8809 15.2749 14.6356C15.6983 14.4199 16.0425 14.0757 16.2582 13.6523C16.5034 13.171 16.5034 12.541 16.5034 11.2809V5.73086C16.5034 4.47074 16.5034 3.84068 16.2582 3.35938C16.0425 2.93602 15.6983 2.59181 15.2749 2.37609C14.7936 2.13086 14.1635 2.13086 12.9034 2.13086H6.60342C5.3433 2.13086 4.71324 2.13086 4.23194 2.37609C3.80857 2.59181 3.46437 2.93602 3.24865 3.35938C3.00342 3.84068 3.00342 4.47074 3.00342 5.73086V11.2809C3.00342 12.541 3.00342 13.171 3.24865 13.6523C3.46437 14.0757 3.80857 14.4199 4.23194 14.6356C4.71324 14.8809 5.3433 14.8809 6.60342 14.8809Z"
        stroke={color}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SettingIcons: React.FC<IconProps> = ({
  size = 18,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.03032 15.8964L5.54093 14.7958C5.36657 14.403 5.07208 14.0756 4.69986 13.8607C4.32741 13.6459 3.89656 13.5544 3.46895 13.5993L2.27153 13.7268C1.91512 13.7642 1.55549 13.6976 1.23615 13.535C0.916808 13.3723 0.651439 13.1206 0.472148 12.8103C0.292805 12.5 0.207363 12.1444 0.22619 11.7865C0.245017 11.4286 0.367304 11.0839 0.578213 10.7941L1.28717 9.82003C1.54 9.47232 1.67616 9.05345 1.67608 8.62354C1.67616 8.19363 1.54 7.77476 1.28717 7.42706L0.578213 6.45293C0.367304 6.16319 0.245017 5.81846 0.22619 5.46058C0.207363 5.1027 0.292805 4.74704 0.472148 4.43677C0.651263 4.12631 0.916599 3.87448 1.23599 3.71181C1.55537 3.54915 1.91509 3.48263 2.27153 3.52033L3.47267 3.6478C3.90028 3.6927 4.33114 3.60119 4.70358 3.38636C5.07442 3.1709 5.36754 2.84359 5.54093 2.45131L6.03032 1.35066C6.1758 1.02302 6.41322 0.744638 6.71379 0.549269C7.01436 0.353901 7.36515 0.249942 7.72364 0.25C8.08212 0.249942 8.43291 0.353901 8.73348 0.549269C9.03405 0.744638 9.27147 1.02302 9.41695 1.35066L9.91006 2.45131C10.0835 2.84359 10.3766 3.1709 10.7474 3.38636C11.1199 3.60119 11.5507 3.6927 11.9783 3.6478L13.1757 3.52033C13.5322 3.48263 13.8919 3.54915 14.2113 3.71181C14.5307 3.87448 14.796 4.12631 14.9751 4.43677C15.1545 4.74704 15.2399 5.1027 15.2211 5.46058C15.2023 5.81846 15.08 6.16319 14.8691 6.45293L14.1601 7.42706C13.9073 7.77476 13.7711 8.19363 13.7712 8.62354C13.769 9.05462 13.9039 9.47524 14.1564 9.82468L14.8653 10.7988C15.0762 11.0885 15.1985 11.4333 15.2174 11.7912C15.2362 12.149 15.1507 12.5047 14.9714 12.815C14.7923 13.1254 14.527 13.3773 14.2076 13.5399C13.8882 13.7026 13.5285 13.7691 13.172 13.7314L11.9746 13.6039C11.547 13.559 11.1161 13.6505 10.7437 13.8654C10.3736 14.0796 10.0805 14.4052 9.90634 14.7958L9.41695 15.8964C9.27147 16.2241 9.03405 16.5024 8.73348 16.6978C8.43291 16.8932 8.08212 16.9971 7.72364 16.9971C7.36515 16.9971 7.01436 16.8932 6.71379 16.6978C6.41322 16.5024 6.1758 16.2241 6.03032 15.8964ZM7.72364 11.1001C9.09141 11.1001 10.2002 9.9913 10.2002 8.62353C10.2002 7.25576 9.09141 6.14697 7.72364 6.14697C6.35587 6.14697 5.24708 7.25576 5.24708 8.62353C5.24708 9.9913 6.35587 11.1001 7.72364 11.1001Z"
        fill={color}
      />
    </svg>
  );
};

export const CheckboxIcon: React.FC<IconProps> = ({
  size = 21,
  color = 'white',
  fill = '#D7D7D7',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36817">
        <rect
          id="container"
          x="0.378906"
          y="0.464844"
          width="20"
          height="20"
          rx="2"
          fill={fill}
        />
        <path
          id="icon"
          d="M8.15636 15.6866L3.71191 11.2422L5.26747 9.68663L8.15636 12.5755L15.4897 5.24219L17.0452 6.79774L8.15636 15.6866Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export const CounterIcon: React.FC<
  IconProps & { plus?: boolean; minus?: boolean }
> = ({ size = 12, fill = '#D7D7D7', plus, minus }) => {
  return (
    <>
      {plus && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          viewBox="0 0 13 12"
          fill={fill}>
          <path
            d="M1.58229 6.00781H11.5823"
            stroke="#D7D7D7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.58229 1.00781V11.0078"
            stroke="#D7D7D7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {minus && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size / 6.5}
          viewBox="0 0 13 2"
          fill="none">
          <path
            d="M1.5359 1.00781H11.5359"
            stroke="#D7D7D7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export const PlanColorIcon: React.FC<IconProps> = ({ size = 21 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.1251 0.0742188H6.12282C5.01804 0.0742188 4.12244 0.969827 4.12244 2.07462V18.0778C4.12244 19.1826 5.01804 20.0782 6.12282 20.0782H18.1251C19.2299 20.0782 20.1255 19.1826 20.1255 18.0778V2.07462C20.1255 0.969827 19.2299 0.0742188 18.1251 0.0742188Z"
        fill="#D7D7D7"
      />
      <path
        d="M8.32007 6.94141H15.8734"
        stroke="#B9B9B9"
        strokeWidth="1.50023"
        strokeLinecap="round"
      />
      <path
        d="M8.32007 10.6875H15.8734"
        stroke="#B9B9B9"
        strokeWidth="1.50023"
        strokeLinecap="round"
      />
      <path
        d="M16.1244 0.0742188H8.12286V2.07462C8.12286 2.60515 8.33362 3.11396 8.70876 3.48911C9.0839 3.86426 9.59271 4.07501 10.1232 4.07501H14.124C14.6545 4.07501 15.1633 3.86426 15.5385 3.48911C15.9136 3.11396 16.1244 2.60515 16.1244 2.07462V0.0742188ZM3.21193 6.36547L9.83319 12.9768C10.016 13.1685 10.1196 13.4221 10.1232 13.6869V15.0772C10.1232 15.3425 10.0179 15.5969 9.83029 15.7844C9.64272 15.972 9.38832 16.0774 9.12305 16.0774H7.73279C7.60116 16.0782 7.47067 16.0529 7.34881 16.0032C7.22695 15.9534 7.11611 15.88 7.02265 15.7873L0.4114 9.16603C0.228138 8.97906 0.125488 8.72769 0.125488 8.46589C0.125488 8.20408 0.228138 7.95271 0.4114 7.76575L1.81167 6.36547C1.99863 6.18221 2.25 6.07956 2.5118 6.07956C2.7736 6.07956 3.02497 6.18221 3.21193 6.36547Z"
        fill="#5996CE"
      />
    </svg>
  );
};

export const ThumbsUp: React.FC<IconProps> = ({
  size = 16,
  fill = '#1E1E1E',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.87941 3.01879C8.78269 2.95183 8.65012 2.97505 8.58192 3.07089L5.69741 7.12424C5.46947 7.44454 5.10064 7.63476 4.70752 7.63476H3.04846C2.92974 7.63476 2.8335 7.731 2.8335 7.84972V12.8027C2.8335 12.9214 2.92974 13.0176 3.04845 13.0176H5.05169C5.05392 13.0176 5.05615 13.0177 5.05838 13.0177H11.1319C11.2192 13.0177 11.2979 12.9648 11.3309 12.884L13.1509 8.42605C13.1614 8.40026 13.1668 8.37266 13.1668 8.3448V7.26093C13.1668 7.14221 13.0706 7.04597 12.9519 7.04597H10.2043C9.41963 7.04597 8.84076 6.31333 9.02225 5.54997L9.48486 3.60433C9.50534 3.51817 9.47089 3.42827 9.39808 3.37787L8.87941 3.01879ZM7.76716 2.49108C8.15266 1.94938 8.90197 1.81815 9.44862 2.1966L9.96729 2.55567C10.3788 2.84058 10.5735 3.34869 10.4577 3.83564L9.99513 5.78129C9.96302 5.91635 10.0654 6.04597 10.2043 6.04597H12.9519C13.6229 6.04597 14.1668 6.58993 14.1668 7.26093V8.3448C14.1668 8.50227 14.1362 8.65824 14.0767 8.80402L12.2567 13.2619C12.0701 13.719 11.6256 14.0177 11.1319 14.0177H5.05173C5.0495 14.0177 5.04727 14.0177 5.04504 14.0176H3.04845C2.37745 14.0176 1.8335 13.4737 1.8335 12.8027V7.84972C1.8335 7.17871 2.37745 6.63476 3.04846 6.63476H4.70752C4.77707 6.63476 4.84233 6.6011 4.88266 6.54443L7.76716 2.49108Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.03223 13.5191V7.08203H5.03223V13.5191H4.03223Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.03223 13.5191V7.08203H5.03223V13.5191H4.03223Z"
        fill={fill}
      />
    </svg>
  );
};

export const ClickThumbsUp: React.FC<IconProps> = ({
  size = 16,
  fill = '#1E1E1E',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.62098 3.07089C8.68918 2.97505 8.82176 2.95183 8.91847 3.01879L9.43714 3.37787C9.50996 3.42827 9.5444 3.51817 9.52392 3.60433L9.06132 5.54997C8.87982 6.31333 9.45869 7.04597 10.2433 7.04597H12.9909C13.1097 7.04597 13.2059 7.14221 13.2059 7.26093V8.3448C13.2059 8.37266 13.2005 8.40026 13.1899 8.42605L11.37 12.884C11.337 12.9648 11.2583 13.0177 11.171 13.0177H5.09744L5.09075 13.0176H5.07129V14.0176H5.0841L5.09079 14.0177H11.171C11.6646 14.0177 12.1092 13.719 12.2958 13.2619L14.1158 8.80402C14.1753 8.65824 14.2059 8.50227 14.2059 8.3448V7.26093C14.2059 6.58993 13.6619 6.04597 12.9909 6.04597H10.2433C10.1045 6.04597 10.0021 5.91635 10.0342 5.78129L10.4968 3.83564C10.6126 3.34869 10.4179 2.84058 10.0064 2.55567L9.48768 2.1966C8.94103 1.81815 8.19172 1.94938 7.80623 2.49108L5.07129 6.33426V7.59058C5.33684 7.51691 5.57292 7.35406 5.73647 7.12424L8.62098 3.07089ZM4.07129 7.63476V6.63476H3.08752C2.41651 6.63476 1.87256 7.17871 1.87256 7.84972V12.8027C1.87256 13.4737 2.41651 14.0176 3.08752 14.0176H4.07129V13.0176H3.08752C2.9688 13.0176 2.87256 12.9214 2.87256 12.8027V7.84972C2.87256 7.731 2.9688 7.63476 3.08752 7.63476H4.07129Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.07129 7.05673L5.07129 13.5176H5.09075L5.09077 13.5176L5.09079 13.5176H11.171C11.4615 13.5176 11.7231 13.3419 11.8329 13.0729L13.6529 8.61499C13.6879 8.5292 13.7059 8.43742 13.7059 8.34476V7.26089C13.7059 6.86603 13.3858 6.54593 12.9909 6.54593H10.2433C9.7816 6.54593 9.44095 6.1148 9.54776 5.66559L10.0104 3.71994C10.0785 3.43339 9.96392 3.13438 9.72175 2.96673L9.20308 2.60765C8.8814 2.38495 8.44045 2.46217 8.2136 2.78095L5.3291 6.8343C5.26136 6.92948 5.17248 7.00514 5.07129 7.05673ZM4.07129 13.5176L4.07129 7.13472H3.08752C2.69266 7.13472 2.37256 7.45481 2.37256 7.84967V12.8026C2.37256 13.1975 2.69266 13.5176 3.08752 13.5176H4.07129Z"
        fill={fill}
      />
    </svg>
  );
};

export const ThumbsDown: React.FC<IconProps> = ({
  size = 16,
  fill = '#1E1E1E',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.12059 12.9812C7.21731 13.0482 7.34988 13.0249 7.41808 12.9291L10.3026 8.87576C10.5305 8.55546 10.8994 8.36524 11.2925 8.36524H12.9515C13.0703 8.36524 13.1665 8.269 13.1665 8.15028V3.19732C13.1665 3.0786 13.0703 2.98236 12.9515 2.98236H10.9483C10.9461 2.98236 10.9438 2.98234 10.9416 2.98231H4.86811C4.78077 2.98231 4.70211 3.03516 4.6691 3.11602L2.84912 7.57395C2.83859 7.59974 2.83317 7.62734 2.83317 7.6552V8.73907C2.83317 8.85779 2.92941 8.95403 3.04813 8.95403H5.79574C6.58037 8.95403 7.15924 9.68667 6.97775 10.45L6.51514 12.3957C6.49466 12.4818 6.52911 12.5717 6.60192 12.6221L7.12059 12.9812ZM8.23284 13.5089C7.84734 14.0506 7.09803 14.1819 6.55138 13.8034L6.03271 13.4443C5.62118 13.1594 5.42649 12.6513 5.54227 12.1644L6.00487 10.2187C6.03698 10.0837 5.93456 9.95403 5.79574 9.95403H3.04813C2.37713 9.95403 1.83317 9.41007 1.83317 8.73907V7.6552C1.83317 7.49773 1.86378 7.34176 1.9233 7.19598L3.74328 2.73805C3.92987 2.28102 4.37445 1.98232 4.86811 1.98232H10.9483C10.9505 1.98232 10.9527 1.98233 10.955 1.98236H12.9515C13.6225 1.98236 14.1665 2.52631 14.1665 3.19732V8.15028C14.1665 8.82129 13.6225 9.36524 12.9515 9.36524H11.2925C11.2229 9.36524 11.1577 9.3989 11.1173 9.45557L8.23284 13.5089Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9678 2.48089V8.91797H10.9678V2.48089H11.9678Z"
        fill={fill}
      />
    </svg>
  );
};

export const ClickThumbsDown: React.FC<IconProps> = ({
  size = 16,
  fill = '#1E1E1E',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.45715 12.9291C7.38894 13.0249 7.25637 13.0482 7.15965 12.9812L6.64098 12.6221C6.56817 12.5717 6.53372 12.4818 6.55421 12.3957L7.01681 10.45C7.19831 9.68667 6.61943 8.95403 5.8348 8.95403H3.08719C2.96847 8.95403 2.87223 8.85779 2.87223 8.73907V7.6552C2.87223 7.62734 2.87765 7.59974 2.88818 7.57395L4.70816 3.11603C4.74117 3.03516 4.81983 2.98232 4.90717 2.98232H10.9807L10.9874 2.98236H11.0068V1.98236H10.994L10.9873 1.98232H4.90717C4.41351 1.98232 3.96893 2.28102 3.78234 2.73805L1.96236 7.19598C1.90284 7.34176 1.87223 7.49773 1.87223 7.6552V8.73907C1.87223 9.41007 2.41619 9.95403 3.08719 9.95403H5.8348C5.97362 9.95403 6.07604 10.0837 6.04393 10.2187L5.58133 12.1644C5.46555 12.6513 5.66025 13.1594 6.07177 13.4443L6.59044 13.8034C7.13709 14.1819 7.8864 14.0506 8.2719 13.5089L11.0068 9.66574V8.40942C10.7413 8.48309 10.5052 8.64594 10.3417 8.87576L7.45715 12.9291ZM12.0068 8.36524V9.36524H12.9906C13.6616 9.36524 14.2056 8.82129 14.2056 8.15028V3.19732C14.2056 2.52632 13.6616 1.98236 12.9906 1.98236H12.0068V2.98236H12.9906C13.1093 2.98236 13.2056 3.0786 13.2056 3.19732V8.15028C13.2056 8.269 13.1093 8.36524 12.9906 8.36524H12.0068Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0068 8.94327L11.0068 2.4824H10.9874L10.9874 2.48238L10.9873 2.48236H4.90717C4.61667 2.48236 4.35505 2.65813 4.24525 2.92708L2.42527 7.38501C2.39025 7.4708 2.37223 7.56258 2.37223 7.65524V8.73911C2.37223 9.13397 2.69233 9.45407 3.08719 9.45407H5.8348C6.29653 9.45407 6.63717 9.8852 6.53037 10.3344L6.06777 12.2801C5.99964 12.5666 6.11421 12.8656 6.35638 13.0333L6.87505 13.3923C7.19673 13.6151 7.63767 13.5378 7.86452 13.2191L10.749 9.1657C10.8168 9.07052 10.9056 8.99486 11.0068 8.94327ZM12.0068 2.4824L12.0068 8.86528H12.9906C13.3855 8.86528 13.7056 8.54519 13.7056 8.15033V3.19736C13.7056 2.8025 13.3855 2.4824 12.9906 2.4824H12.0068Z"
        fill={fill}
      />
    </svg>
  );
};

export const NewIcon: React.FC<IconProps> = ({
  size = 11,
  fill = '#1E1E1E',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size - 1}
      viewBox="0 0 11 10"
      fill={fill}>
      <path
        d="M1.5 5H9.5"
        stroke="#29DDF6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.5 1L5.5 9"
        stroke="#29DDF6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const RedIcon: React.FC<IconProps> = ({ size = 20, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none">
      <path
        d="M20.2549 10.0508C20.2549 15.5736 15.7777 20.0508 10.2549 20.0508C4.73204 20.0508 0.254883 15.5736 0.254883 10.0508C0.254883 4.52793 4.73204 0.0507812 10.2549 0.0507812C15.7777 0.0507812 20.2549 4.52793 20.2549 10.0508Z"
        fill="#FF2167"
      />
      <path
        d="M11.4395 5.45312V14.6445H9.52246V7.26855H9.47168L7.36426 8.58887V6.90039L9.63672 5.45312H11.4395Z"
        fill="white"
      />
    </svg>
  );
};

export const VioletIcon: React.FC<IconProps> = ({ size = 20, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none">
      <path
        d="M20.3403 10.8711C20.3403 16.3939 15.8632 20.8711 10.3403 20.8711C4.81748 20.8711 0.340332 16.3939 0.340332 10.8711C0.340332 5.34825 4.81748 0.871094 10.3403 0.871094C15.8632 0.871094 20.3403 5.34825 20.3403 10.8711Z"
        fill="#7932FF"
      />
      <path
        d="M7.09677 15.5293L7.08407 14.1455L10.3849 11.1113C11.2481 10.2861 11.7052 9.77832 11.7052 9.05469C11.7052 8.24219 11.0831 7.73438 10.2452 7.73438C9.38193 7.73438 8.82333 8.28027 8.82333 9.15625H7.0079C6.99521 7.35352 8.32821 6.21094 10.2706 6.21094C12.2384 6.21094 13.546 7.32812 13.546 8.92773C13.546 9.96875 13.0382 10.832 11.1466 12.5459L9.75009 13.9043V13.9551H13.6729V15.5293H7.09677Z"
        fill="white"
      />
    </svg>
  );
};

export const CyanIcon: React.FC<IconProps> = ({ size = 20, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none">
      <path
        d="M20.2266 10.8711C20.2266 16.3939 15.7494 20.8711 10.2266 20.8711C4.70371 20.8711 0.226562 16.3939 0.226562 10.8711C0.226562 5.34825 4.70371 0.871094 10.2266 0.871094C15.7494 0.871094 20.2266 5.34825 20.2266 10.8711Z"
        fill="#29DDF6"
      />
      <path
        d="M10.2012 15.5938C8.18262 15.5938 6.73535 14.4766 6.69727 12.877H8.62695C8.66504 13.5625 9.3252 14.0195 10.2139 14.0195C11.1279 14.0195 11.7881 13.499 11.7754 12.7627C11.7881 12.0137 11.1152 11.4805 10.0361 11.4805H9.18555V10.0713H10.0361C10.9375 10.0713 11.5723 9.57617 11.5723 8.85254C11.5723 8.1543 11.0391 7.67188 10.2266 7.67188C9.41406 7.67188 8.74121 8.12891 8.71582 8.82715H6.8877C6.91309 7.24023 8.34766 6.14844 10.2266 6.14844C12.1436 6.14844 13.4258 7.27832 13.4131 8.73828C13.4258 9.7666 12.7021 10.5029 11.6738 10.6807V10.7568C13.0195 10.9219 13.7686 11.7471 13.7559 12.8896C13.7686 14.4639 12.2705 15.5938 10.2012 15.5938Z"
        fill="white"
      />
    </svg>
  );
};

export const OrangeIcon: React.FC<IconProps> = ({ size = 20, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none">
      <path
        d="M20.1128 10.8711C20.1128 16.3939 15.6356 20.8711 10.1128 20.8711C4.58995 20.8711 0.112793 16.3939 0.112793 10.8711C0.112793 5.34825 4.58995 0.871094 10.1128 0.871094C15.6356 0.871094 20.1128 5.34825 20.1128 10.8711Z"
        fill="#FFAC16"
      />
      <path
        d="M5.87109 13.8398V12.3291L9.75586 6.27344H12.1553V12.3037H13.3232V13.8398H12.1553V15.4648H10.3398V13.8398H5.87109ZM7.80078 12.3037H10.3652V8.36816H10.2764L7.80078 12.2275V12.3037Z"
        fill="white"
      />
    </svg>
  );
};

export const EditStarIcon = () => {
  return (
    <svg
      width="77"
      height="75"
      viewBox="0 0 77 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36910">
        <g id="Group 36909">
          <path
            id="primary"
            d="M48.7505 22.0781H16.5005C13.532 22.0781 11.1255 24.451 11.1255 27.3781V69.7781C11.1255 72.7052 13.532 75.0781 16.5005 75.0781H48.7505C51.719 75.0781 54.1255 72.7052 54.1255 69.7781V27.3781C54.1255 24.451 51.719 22.0781 48.7505 22.0781Z"
            fill="#D4E1E4"
          />
          <path
            id="Vector 868"
            d="M22.1255 40.0781H42.1255"
            stroke="#8DA3B8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            id="Vector 869"
            d="M22.1255 50.0781H42.1255"
            stroke="#8DA3B8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            id="secondary"
            d="M43.1255 22.0781H21.6199V27.3281C21.6199 28.7205 22.1864 30.0559 23.1946 31.0404C24.2029 32.025 25.5704 32.5781 26.9963 32.5781H37.7491C39.175 32.5781 40.5425 32.025 41.5508 31.0404C42.559 30.0559 43.1255 28.7205 43.1255 27.3281V22.0781ZM8.42088 38.5894L26.2167 55.9406C26.708 56.4436 26.9864 57.1093 26.9963 57.8043V61.4531C26.9963 62.1493 26.7131 62.817 26.209 63.3092C25.7048 63.8015 25.0211 64.0781 24.3081 64.0781H20.5715C20.2177 64.0801 19.867 64.0139 19.5395 63.8832C19.212 63.7526 18.9141 63.5601 18.6629 63.3168L0.893928 45.9394C0.401379 45.4487 0.125488 44.789 0.125488 44.1019C0.125488 43.4148 0.401379 42.755 0.893928 42.2644L4.6574 38.5894C5.1599 38.1084 5.8355 37.839 6.53914 37.839C7.24278 37.839 7.91838 38.1084 8.42088 38.5894Z"
            fill="#5996CE"
          />
        </g>
        <path
          id="Star 12"
          d="M61.6876 2.61263C62.0098 1.74201 63.2412 1.74201 63.5633 2.61263L65.572 8.04084C65.6732 8.31456 65.8891 8.53037 66.1628 8.63165L71.591 10.6403C72.4616 10.9624 72.4616 12.1938 71.591 12.516L66.1628 14.5246C65.8891 14.6259 65.6732 14.8417 65.572 15.1154L63.5633 20.5436C63.2412 21.4142 62.0098 21.4142 61.6876 20.5436L59.679 15.1154C59.5777 14.8417 59.3619 14.6259 59.0882 14.5246L53.66 12.516C52.7894 12.1938 52.7894 10.9624 53.66 10.6403L59.0882 8.63165C59.3619 8.53037 59.5777 8.31456 59.679 8.04084L61.6876 2.61263Z"
          fill="#FFF175"
        />
        <path
          id="Star 13"
          d="M69.1876 21.6126C69.5098 20.742 70.7412 20.742 71.0633 21.6126L71.8566 23.7562C71.9578 24.03 72.1736 24.2458 72.4474 24.3471L74.591 25.1403C75.4616 25.4624 75.4616 26.6938 74.591 27.016L72.4474 27.8092C72.1736 27.9105 71.9578 28.1263 71.8566 28.4L71.0633 30.5436C70.7412 31.4142 69.5098 31.4142 69.1876 30.5436L68.3944 28.4C68.2931 28.1263 68.0773 27.9105 67.8036 27.8092L65.66 27.016C64.7894 26.6938 64.7894 25.4624 65.66 25.1403L67.8036 24.3471C68.0773 24.2458 68.2931 24.03 68.3944 23.7562L69.1876 21.6126Z"
          fill="#FFF175"
        />
      </g>
    </svg>
  );
};

export const GreenIcon: React.FC<IconProps> = ({ size = 20, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none">
      <path
        d="M20.835 10.8711C20.835 16.3939 16.3578 20.8711 10.835 20.8711C5.31211 20.8711 0.834961 16.3939 0.834961 10.8711C0.834961 5.34825 5.31211 0.871094 10.835 0.871094C16.3578 0.871094 20.835 5.34825 20.835 10.8711Z"
        fill="#16E7A9"
      />
      <path
        d="M10.7715 15.5293C8.85449 15.5293 7.45801 14.3994 7.41992 12.8125H9.27344C9.31152 13.5361 9.97168 14.0186 10.7715 14.0186C11.7236 14.0186 12.3965 13.3457 12.3965 12.3936C12.3965 11.416 11.7109 10.7432 10.7461 10.7305C10.0605 10.7305 9.57812 10.9844 9.29883 11.5049H7.57227L8.06738 6.21094H13.7295V7.77246H9.6416L9.3877 10.0957H9.46387C9.80664 9.63867 10.4922 9.32129 11.3047 9.32129C12.9932 9.32129 14.25 10.5781 14.25 12.3428C14.25 14.1963 12.8408 15.5293 10.7715 15.5293Z"
        fill="white"
      />
    </svg>
  );
};

export const SequenceIcon: React.FC<IconProps & { number?: number }> = ({
  size = 20,
  className,
  number,
}) => {
  const currentColor = getColor(number || 0);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none">
      <path
        d="M20.2549 10.0508C20.2549 15.5736 15.7777 20.0508 10.2549 20.0508C4.73204 20.0508 0.254883 15.5736 0.254883 10.0508C0.254883 4.52793 4.73204 0.0507812 10.2549 0.0507812C15.7777 0.0507812 20.2549 4.52793 20.2549 10.0508Z"
        fill={currentColor}
      />
      {number !== undefined && (
        <text
          x="48%"
          y="54%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="small"
          fontWeight="bold"
          fill="white">
          {number}
        </text>
      )}
    </svg>
  );
};

export const DragAndDropIcon: React.FC<IconProps> = ({}) => {
  return (
    <svg
      width={19}
      height={15}
      viewBox="0 0 19 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative h-3.5 w-[18px]"
      preserveAspectRatio="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.134766 1.125C0.134766 0.572715 0.582481 0.125 1.13477 0.125H17.1348C17.687 0.125 18.1348 0.572715 18.1348 1.125C18.1348 1.67728 17.687 2.125 17.1348 2.125H1.13477C0.582481 2.125 0.134766 1.67728 0.134766 1.125ZM0.134766 7.125C0.134766 6.57272 0.582481 6.125 1.13477 6.125H17.1348C17.687 6.125 18.1348 6.57272 18.1348 7.125C18.1348 7.67728 17.687 8.125 17.1348 8.125H1.13477C0.582481 8.125 0.134766 7.67728 0.134766 7.125ZM0.134766 13.125C0.134766 12.5727 0.582481 12.125 1.13477 12.125H17.1348C17.687 12.125 18.1348 12.5727 18.1348 13.125C18.1348 13.6773 17.687 14.125 17.1348 14.125H1.13477C0.582481 14.125 0.134766 13.6773 0.134766 13.125Z"
        fill="#D7D7D7"
      />
    </svg>
  );
};

export const PaperIcon: React.FC<IconProps> = ({}) => {
  return (
    <svg
      width={17}
      height={20}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[19px] w-[15.5px]"
      preserveAspectRatio="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.8584 2.00391C3.33962 2.00391 2.1084 3.23512 2.1084 4.75391V15.2539C2.1084 16.7727 3.33962 18.0039 4.8584 18.0039H11.8584C13.3772 18.0039 14.6084 16.7727 14.6084 15.2539V7.13749C14.6084 6.90356 14.5264 6.67702 14.3766 6.49731L10.932 2.36372C10.742 2.13573 10.4605 2.00391 10.1637 2.00391H4.8584ZM0.608398 4.75391C0.608398 2.4067 2.51119 0.503906 4.8584 0.503906H10.1637C10.9057 0.503906 11.6093 0.833464 12.0843 1.40345L15.529 5.53703C15.9034 5.98632 16.1084 6.55265 16.1084 7.13749V15.2539C16.1084 17.6011 14.2056 19.5039 11.8584 19.5039H4.8584C2.51119 19.5039 0.608398 17.6011 0.608398 15.2539V4.75391Z"
        fill="#5E5E5E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9834 0.941406C11.3976 0.941406 11.7334 1.27719 11.7334 1.69141V4.75391C11.7334 5.30619 12.1811 5.75391 12.7334 5.75391H14.9209C15.3351 5.75391 15.6709 6.08969 15.6709 6.50391C15.6709 6.91812 15.3351 7.25391 14.9209 7.25391H12.7334C11.3527 7.25391 10.2334 6.13462 10.2334 4.75391V1.69141C10.2334 1.27719 10.5692 0.941406 10.9834 0.941406Z"
        fill="#5E5E5E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.1084 10.0039C4.1084 9.58969 4.44418 9.25391 4.8584 9.25391H11.8584C12.2726 9.25391 12.6084 9.58969 12.6084 10.0039C12.6084 10.4181 12.2726 10.7539 11.8584 10.7539H4.8584C4.44418 10.7539 4.1084 10.4181 4.1084 10.0039Z"
        fill="#5E5E5E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.1084 14.3789C4.1084 13.9647 4.44418 13.6289 4.8584 13.6289H8.3584C8.77261 13.6289 9.1084 13.9647 9.1084 14.3789C9.1084 14.7931 8.77261 15.1289 8.3584 15.1289H4.8584C4.44418 15.1289 4.1084 14.7931 4.1084 14.3789Z"
        fill="#5E5E5E"
      />
    </svg>
  );
};

export const DropdownIcon: React.FC<IconProps> = ({}) => {
  return (
    <svg
      width={23}
      height={9}
      viewBox="0 0 23 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet">
      <path
        d="M1.03125 1.22656L11.0311 7.60992L21.0313 1.22656"
        stroke="#D7D7D7"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};
