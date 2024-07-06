import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProps from '../../types/user.type';

export default function Home() {
  const [user, setUser] = useState({} as UserProps);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <p>{user.id}</p>
      <Link to='/login'>Sigin</Link>
    </>
  );
}
