import { type ReactNode } from "react";

export default function Centered({ children }: { children: ReactNode }) {
  return <div className="max-w-md mx-auto">{children}</div>;
}
