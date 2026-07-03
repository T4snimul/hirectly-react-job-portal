import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  maxWidth?: string;
};

export default function Centered({ children, maxWidth }: Props) {
  return <div className={`max-w-${maxWidth || "md"} mx-auto`}>{children}</div>;
}
