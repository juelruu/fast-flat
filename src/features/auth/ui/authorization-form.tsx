import { useForm } from 'react-hook-form';
import { TextInput } from '@/shared/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLoginMutation } from '../queries';
import { Form } from 'react-hook-form';
import { setAuth } from '@/shared';
import { useUserStore } from '@/entities';
import { defaultValues } from '../../../../tmp/user';

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
  const setUser = useUserStore((state) => state.setUser);
  const loginMutation = useLoginMutation();

  return (
    <Form
      control={control}
      onSubmit={({ formData }) =>
        loginMutation.mutate(formData, {
          onSuccess: (data) => {
            setAuth(data);
            setUser({ name: 'TEST', img: 'test' });
            
            onSuccess();
          },
        })
      }
    >
      {errors.username && <p>Это обязательное поле</p>}
      <TextInput
        name="username"
        label="лейбл"
        register={register('username')}
        required
      />
      <TextInput
        name="pswd"
        label="лейбл"
        register={register('password')}
        required
      />
      <input type="submit" value="Войти" />
    </Form>
  );
}
