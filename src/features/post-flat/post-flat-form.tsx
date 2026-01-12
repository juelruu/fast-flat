import { usePostFlatMutation } from '@/entities/flat/queries';
import { CheckboxInput, MyButton, TextInput } from '@/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
  .object({
    cost: yup.number().required(),
    quadrature: yup.number().required(),
    floor: yup.number().required(),
    address: yup.string().required(),
    is_active: yup.bool().default(true),
  })
  .required();

export function PostFlat() {
  const { control, register } = useForm({
    resolver: yupResolver(schema),
  });

  const postFlatMutation = usePostFlatMutation();
  return (
    <>
      <Form
        control={control}
        onSubmit={({ data }) => postFlatMutation.mutate(data)}
        className="form-container column"
      >
        <TextInput name="cost" label="Цена" register={register('cost')} />
        <TextInput
          name="quadrature"
          label="Площадь"
          register={register('quadrature')}
        />
        <TextInput name="floor" label="Этаж" register={register('floor')} />
        <TextInput
          name="address"
          label="Адрес"
          register={register('address')}
        />
        <CheckboxInput
          name="isActive"
          label="лейбл"
          register={register('is_active')}
        />
        <MyButton submit={true}>Выставить</MyButton>
      </Form>
    </>
  );
}
