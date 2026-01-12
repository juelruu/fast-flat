import { PageTitle } from '@/shared';
import { ShowPrivateFlats } from '@/widgets/show-private-flats';

export function PrivateFlatListPage() {
  return (
    <>
      <PageTitle title="Мои размещенные квартиры" />
      <ShowPrivateFlats />
    </>
  );
}
