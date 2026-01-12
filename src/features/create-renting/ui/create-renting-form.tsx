import { useCreateRentingFlatMutation, type TFlat } from '@/entities/flat';
import { MyButton, MyDateTime, MyInfo, TextNumber } from '@/shared/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { Form, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
  .object({
    lease_range: yup
      .object({
        start: yup.date().required(),
        end: yup.date().min(yup.ref('start')).required(),
      })
      .required(),
    count_guest: yup.number().required(),
    flat_id: yup.string().required(),
  })
  .required();

export function CreateRentingForm({
  flat,
  onSuccess,
}: {
  flat: TFlat;
  onSuccess: () => void;
}) {
  const createRentingFlat = useCreateRentingFlatMutation();
  const {
    control,
    register,
    formState: { isValid },
  } = useForm({
    defaultValues: { flat_id: flat.id },
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (createRentingFlat.isSuccess) onSuccess();
  });
  return (
    <>
      <Form
        control={control}
        onSubmit={async ({ data }) => createRentingFlat.mutate(data)}
        className="form-container column"
      >
        {createRentingFlat.isSuccess && <MyInfo>Забронировано успешно</MyInfo>}
        <MyDateTime
          name="start"
          label="От"
          register={register('lease_range.start')}
        />
        <MyDateTime
          name="end"
          label="До"
          register={register('lease_range.end')}
        />
        <TextNumber
          name="count_guest"
          label="Количество гостей"
          register={register('count_guest')}
        />
        {createRentingFlat.isError && <p>{createRentingFlat.error.message}</p>}
        <MyButton
          disabled={!isValid || createRentingFlat.isPending}
          submit={true}
        >
          Забронировать
        </MyButton>
      </Form>
    </>
  );
}
