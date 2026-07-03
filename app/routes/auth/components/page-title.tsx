import { type ElementType } from "react";
import { LogIn } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  Icon?: ElementType;
};

export default function PageTitle({ title, subtitle, Icon = LogIn }: Props) {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-3">{title}</h1>
      <p className="text-lg text-muted-foreground">{subtitle}</p>
    </div>
  );
}
