import { isNotNuN, MyChip } from '@/shared';

export function FlatFilters() {
  const quadrature = null;
  const floor = null;
  const is_active = null;
  const cost = null;

  return (
    <>
      <MyChip>Площадь: {isNotNuN(quadrature) ? quadrature : 'Нет'}</MyChip>
      <MyChip>Площадь: {isNotNuN(floor) ? floor : 'Нет'}</MyChip>
      <MyChip>Площадь: {isNotNuN(is_active) ? is_active : 'Нет'}</MyChip>
      <MyChip>Площадь: {isNotNuN(cost) ? cost : 'Нет'}</MyChip>
    </>
  );
}
