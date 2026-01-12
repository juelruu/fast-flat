import type { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  required?: boolean;
  register: UseFormRegisterReturn<string>;
};

export function MyDateTime({ label, name, register, required }: Props) {
  return (
    <>
      <label htmlFor={name + '-input'}>{label}</label>
      <input
        id={name + '-input'}
        type="date"
        {...register}
        required={required}
      />
    </>
  );
}
