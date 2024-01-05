import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="mx-auto h-screen max-w-[412px] bg-white">
      <div className="px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
