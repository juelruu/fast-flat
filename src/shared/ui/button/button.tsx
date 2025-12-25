export const MyButton = ({
  title,
  onClick,
  children,
}: {
  title?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <button title={title} onClick={onClick}>
    {children}
  </button>
)
