import type { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
  name: string;
  label: string;
  required?: boolean;
  register: UseFormRegisterReturn<string>;
};

export const CheckboxInput = ({
  name,
  label,
  register,
  required,
}: InputProps) => (
  <div>
    <label htmlFor={name + '-input'}>{label}</label>
    <input
      type="checkbox"
      id={name + '-input'}
      {...register}
      required={required}
    />
  </div>
);
