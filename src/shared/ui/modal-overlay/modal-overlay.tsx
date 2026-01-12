import { createContext, useRef } from 'react';
import { MyOverlay } from '../overlay';

export const ModalContext =
  createContext<React.RefObject<HTMLDivElement | null> | null>(null);

export const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <ModalContext.Provider value={overlayRef}>
        {children}
      </ModalContext.Provider>
      <MyOverlay ref={overlayRef} name="modals" />
    </>
  );
};
