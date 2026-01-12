import { PageTitle } from '@/shared';
import { ClientRentingListWidget } from '@/widgets';

export function ClientRentingListPage() {
  return (
    <>
      <PageTitle title="Мои забронированные квартиры" />
      <ClientRentingListWidget />
    </>
  );
}
