import type { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  required?: boolean;
  register: UseFormRegisterReturn<string>;
};

export const TextNumber = ({ name, label, register, required }: Props) => (
  <div>
    <label htmlFor={name + '-input'}>{label}</label>
    <input
      type="number"
      id={name + '-input'}
      {...register}
      required={required}
    />
  </div>
);
