import Wish from '@components/Wish/Wish';
import { getItem } from '@utils/localStorageFun';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WishList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      navigate('/signin');
    }
  }, []);

  if (isLoggedIn) {
    return (
      <>
        <Wish />
      </>
    );
  }
};

export default WishList;
