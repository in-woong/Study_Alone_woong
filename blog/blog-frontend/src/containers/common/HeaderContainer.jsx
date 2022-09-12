import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogOut = () => {
    console.log('logout');
    dispatch(logout());
  };
  return <Header user={user} onLogOut={onLogOut} />;
};

export default HeaderContainer;
