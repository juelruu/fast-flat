import { useForm } from 'react-hook-form';
import { TextInput } from '@/shared/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form } from 'react-hook-form';
import { useLoginMutation } from '@/entities/user/queries';
import { defaultValues } from '@/../tmp/user';
import { useUserStore } from '@/entities';

type Output = {
  username: string;
  password: string;
};

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export function AuthorizationForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    control,
    register,
    formState: { errors },
  } = useForm<Output>({
    defaultValues: defaultValues ?? {},
    resolver: yupResolver(schema),
  });
  const loginMutation = useLoginMutation();
  const setAuthorizedTime = useUserStore(state => state.setAuth);

  return (
    <Form
      control={control}
      onSubmit={({ formData }) =>
        loginMutation.mutate(formData, {
          onSuccess: (data) => {
            setAuthorizedTime(data.data);
            onSuccess();
          },
        })
      }
    >
      {errors.username && <p>Это обязательное поле</p>}
      <TextInput
        name="username"
        label="Email"
        register={register('username')}
        required
      />
      <TextInput
        name="pswd"
        label="Пароль"
        register={register('password')}
        required
      />
      <input type="submit" value="Войти" />
    </Form>
  );
}
