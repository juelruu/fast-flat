export const MyCard = ({ children }: { children?: React.ReactNode }) => (
  <div className="card">{children}</div>
);

export const MyCardHeader = ({ children }: { children?: React.ReactNode }) => (
  <div className="header">{children}</div>
);

export const MyCardContent = ({ children }: { children?: React.ReactNode }) => (
  <div className="content">{children}</div>
);
