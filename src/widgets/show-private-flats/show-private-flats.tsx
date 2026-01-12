import { PrivateFlatList } from '@/features';
import { useNavigate } from 'react-router';

export function ShowPrivateFlats() {
  const navigate = useNavigate();
  return (
    <>
      <PrivateFlatList
        onUpdateFlat={(flat) => navigate(`update-flat/${flat.id}`)}
      />
    </>
  );
}
