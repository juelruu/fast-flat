import { FlatCard, useRentingListQuery, type TFlat } from '@/entities/flat';
import { MyButton } from '@/shared';

export function ClientRentingList({cancelRenting, openFlat}: {
  openFlat: (flat: TFlat) => void;
  cancelRenting: (flat: TFlat) => void;
}) {
  const { data } = useRentingListQuery();
  return (
    <>
      {data?.map((flat, index) => (
        <FlatCard
          key={index}
          flat={flat}
          onOpen={() => openFlat(flat)}
          optionsSlot={
            <MyButton onClick={() => cancelRenting(flat)}>
              <i className="fa-regular fa-circle-xmark"></i>
            </MyButton>
          }
        ></FlatCard>
      ))}
    </>
  );
}
