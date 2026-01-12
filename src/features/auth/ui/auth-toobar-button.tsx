import { useUserStore } from '@/entities';
import { MyButton } from '@/shared';
import { useNavigate } from 'react-router';
import { UserMenu } from './user-menu';

export function AuthToolbarButton() {
  const authorizedTime = useUserStore((state) => state.authorizedTime);
  const navigate = useNavigate();
  return (
    <>
      {authorizedTime ? (
        <UserMenu />
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
