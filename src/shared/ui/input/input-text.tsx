import type { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
  name: string;
  label: string;
  required?: boolean;
  register: UseFormRegisterReturn<string>; // UseFormRegister<Record<string, unknown>>;
};

export const TextInput = ({ name, label, register, required }: InputProps) => (
  <div>
    <label htmlFor={name + '-input'}>{label}</label>
    <input id={name + '-input'} {...register} required={required} />
  </div>
);
