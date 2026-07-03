import type { ElementType, ReactElement } from "react";

type InputProps = {
  required?: boolean;
  id?: string;
};

type Props = {
  label: string;
  Icon?: ElementType;
  children: ReactElement<InputProps>;
  error?: string;
  hint?: string;
  optional?: boolean;
};

export default function Field({
  optional,
  label,
  Icon,
  children,
  error,
  hint,
}: Props) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={children?.props?.id} className="label">
          {label} {!optional && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div className="relative mt-2">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        )}
        {children}
      </div>
      {hint && !error && (
        <p className="text-sm text-muted-foreground">{hint}</p>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
