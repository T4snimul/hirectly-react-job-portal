import { Link } from "react-router";

type Props = {
  message: string;
  linkLabel: string;
  path: string;
};

export default function FooterLink({ message, linkLabel, path }: Props) {
  return (
    <div className="mt-8 text-center text-sm text-muted-foreground">
      {message + " "}
      <Link to={path} className="text-primary hover:underline font-medium">
        {linkLabel}
      </Link>
    </div>
  );
}
