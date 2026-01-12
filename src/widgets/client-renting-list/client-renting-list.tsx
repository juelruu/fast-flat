import type { TFlat } from '@/entities/flat';
import { ClientRentingList } from '@/features/client-renting-list';

export function ClientRentingListWidget({
  openFlat,
}: {
  openFlat: (id: TFlat) => void;
}) {
  return (
    <>
      <ClientRentingList
        openFlat={(flat) => openFlat(flat)}
        cancelRenting={(flat) => {}}
      />
    </>
  );
}
