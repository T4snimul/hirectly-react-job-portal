import type { ElementType } from "react";

type Props = {
  Icon: ElementType;
  title: string;
  subtitle: string;
};
export default function Feature({ Icon, title, subtitle }: Props) {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-muted/50">
      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}
