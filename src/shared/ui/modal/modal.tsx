import { MyButton } from '../button';
import './modal.css';

export const MyModal = ({ children }: { children: React.ReactNode }) => (
  <dialog className="modal" open>
    {children}
  </dialog>
);

export const MyModalTitle = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => (
  <div className="title">
    <h4>{title}</h4>
    {children}
  </div>
);

export const MyModalTitleCloseButton = ({
  title,
  onClose,
}: {
  title?: string;
  onClose: () => void;
}) => (
  <MyButton title={title} onClick={() => onClose()}>
    <i className="fa-regular fa-circle-xmark"></i>
  </MyButton>
);

export const MyModalContent = ({ children }: { children: React.ReactNode }) => (
  <div className="content">{children}</div>
);

export const MyModalFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="footer">{children}</div>
);

export const MyModalBackdrop = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="backdrop">{children}</div>;
