import type { JSX } from "react";

export function MyDialog({ children }: { children: JSX.Element[] }) {
  return (
    <div className="dialog">
      {children}
    </div>
  )
}

export function MyDialogTitle({ title }: { title: string }) {
  return (
    <h4>{title}</h4>
  );
}

export function MyDialogContent({ children }: { children: JSX.Element }) {
  return (
    <div>{children}</div>
  );
}

export function MyDialogFooter({ children }: { children: JSX.Element }) {
  return (
    <div>{children}</div>
  );
}