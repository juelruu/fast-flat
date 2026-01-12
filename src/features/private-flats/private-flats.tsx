import { FlatCard, usePrivateFlatsQuery, type TFlat } from '@/entities/flat';
import { MyButton } from '@/shared';

export function PrivateFlatList({
  onUpdateFlat,
}: {
  onUpdateFlat: (flat: TFlat) => void;
}) {
  const { data } = usePrivateFlatsQuery();

  return (
    <>
      {data &&
        data.map((flat, index) => (
          <FlatCard
            key={index}
            flat={flat}
            optionsSlot={
              <>
                <MyButton onClick={() => onUpdateFlat(flat)}>
                  <i className="fa-solid fa-pen"></i>
                </MyButton>
              </>
            }
          />
        ))}
    </>
  );
}
