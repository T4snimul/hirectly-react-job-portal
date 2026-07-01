import type { ElementType, ReactElement } from "react";

type InputProps = {
  required?: boolean;
  id?: string;
};

type Props = {
  label: string;
  Icon: ElementType;
  children: ReactElement<InputProps>;
};

export default function Field({ label, Icon, children }: Props) {
  const required = children?.props?.required;

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={children?.props?.id} className="label">
          {label} {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        {children}
      </div>
    </div>
  );
}
