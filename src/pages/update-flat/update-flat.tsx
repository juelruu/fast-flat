import { NavigateToPrev, PostFlat } from '@/features';
import { PageTitle } from '@/shared';

export function UpdateFlatPage() {
  return (
    <>
      <NavigateToPrev />
      <PageTitle title="Обновить информацию о квартире" />
      <PostFlat />
    </>
  );
}
