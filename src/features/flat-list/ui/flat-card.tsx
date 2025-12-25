import type { TFlat } from '@/entities/flat';

export function FlatCard({ flat }: { flat: TFlat }) {
  return (
    <div>
      <h4>{flat.id}</h4>
    </div>
  );
}
