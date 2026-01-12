export const MyButton = ({
  title,
  submit,
  onClick,
  children,
  disabled
}: {
  title?: string;
  submit?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <button type={submit ? 'submit' : 'button'} title={title} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
