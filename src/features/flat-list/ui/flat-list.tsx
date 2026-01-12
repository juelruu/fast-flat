import { FlatCard, useFlatsQuery, type TFlat } from '@/entities/flat';
import { MyButton } from '@/shared';

export function FlatList({
  onCreateRenting,
  onUpdateFlat,
  onOpen
}: {
  onOpen: (flat: TFlat) => void;
  onUpdateFlat: (flat: TFlat) => void;
  onCreateRenting: (flat: TFlat) => void;
}) {
  const { data } = useFlatsQuery();
  return (
    <>
      {!!data?.items ? (
        data.items.map((flat, index) => (
          <FlatCard
            key={index}
            flat={flat}
            onOpen={() => onOpen(flat)}
            optionsSlot={
              <>
                <MyButton onClick={() => onUpdateFlat(flat)}>
                  <i className="fa-solid fa-pen"></i>
                </MyButton>
                <MyButton onClick={() => onCreateRenting(flat)}>
                  Забронировать
                </MyButton>
              </>
            }
          />
        ))
      ) : (
        <p>Пусто</p>
      )}
    </>
  );
}
