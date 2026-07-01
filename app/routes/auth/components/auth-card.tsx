import type { ReactNode } from "react";

export default function AuthCard({ children }: { children: ReactNode }) {
  return <div className="card p-8 md:p-10">{children}</div>;
}
