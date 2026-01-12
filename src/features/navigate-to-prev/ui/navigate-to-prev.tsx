import { MyButton } from '@/shared';
import { useNavigate } from 'react-router';

export function NavigateToPrev() {
  const navigate = useNavigate();
  return (
    <>
      <MyButton onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Вернуться назад
      </MyButton>
    </>
  );
}
