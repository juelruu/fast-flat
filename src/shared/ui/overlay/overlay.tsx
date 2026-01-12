import { forwardRef } from 'react';

export const MyOverlay = forwardRef<HTMLDivElement, { name: string }>(
  ({ name }, ref) => {
    return <div className="overlay" id={name} ref={ref}></div>;
  }
);
