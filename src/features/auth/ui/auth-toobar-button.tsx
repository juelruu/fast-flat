import { useUserStore } from '@/entities';
import { MyButton } from '@/shared';
import { useNavigate } from 'react-router';
import { UserMenu } from './user-menu';

export function AuthToolbarButton() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();
  return (
    <>
      {user ? (
        <UserMenu user={user}/>
      ) : (
        <MyButton
          onClick={() => {
            navigate('/login');
            console.log('hello');
          }}
        >
          Авторизация
        </MyButton>
      )}
    </>
  );
}
