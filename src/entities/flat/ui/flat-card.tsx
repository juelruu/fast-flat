import type { TFlat } from '@/entities/flat';

export function FlatCard({
  flat,
  onOpen,
  optionsSlot,
}: {
  flat: TFlat;
  onOpen: () => void;
  optionsSlot?: React.ReactNode;
}) {
  return (
    <div>
      <h4 onClick={() => onOpen()}>{flat.id}</h4>
      {optionsSlot}
    </div>
  );
}
