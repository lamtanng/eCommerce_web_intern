import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosRefresh from '../../hooks/useAxiosRefresh';
import useRefreshToken from '../../hooks/useRefreshToken';
import UserProps from '../../types/user.type';

export default function Home() {
  const { auth } = useAuth();
  const { accessToken } = auth;
  const refresh = useRefreshToken();
  const axiosRefresh = useAxiosRefresh();
  const [user, setUser] = useState({} as UserProps);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    const handleLoadUser = async () => {
      const res = await axiosRefresh.get<UserProps>('/user', {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      });

      console.log('User >> ', res.data);
      if (!ignore) {
        setUser(res.data);
      }
    };
    handleLoadUser();

    return () => {
      ignore = true;
    };
  }, [loading]);

  return (
    <>
      <p>{auth.accessToken}</p>
      <p>{user.id}</p>
      <Link to='/login'>Sigin</Link>
    </>
  );
}
