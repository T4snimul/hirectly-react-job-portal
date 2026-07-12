import { NavLink } from "react-router";
import { useAuth } from "~/contexts/auth-context";
import Avatar from "./avatar";
import { Building2, User } from "lucide-react";

type LinkProp = {
  path: string;
  label: string;
};

type Props = {
  primaryLink?: LinkProp;
  secondaryLink?: LinkProp;
  spanText?: string;
};

export default function Header({
  primaryLink,
  secondaryLink,
  spanText,
}: Props) {
  const { user } = useAuth();
  console.log(user?.name);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="flex items-center space-x-2">
            <i data-lucide="briefcase" className="h-8 w-8 text-primary"></i>
            <span className="text-xl font-bold">LWS Job Portal</span>
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          {spanText && (
            <span className="text-sm text-muted-foreground">{spanText}</span>
          )}
          {secondaryLink && (
            <NavLink to={secondaryLink.path} className="btn btn-ghost text-sm">
              {secondaryLink.label}
            </NavLink>
          )}
          {primaryLink && (
            <NavLink to={primaryLink.path} className="btn btn-primary text-sm">
              {primaryLink.label}
            </NavLink>
          )}
        </div>
        {user?.id && (
          <Avatar
            label={user?.name}
            Icon={user.role === "COMPANY" ? Building2 : User}
          />
        )}
      </div>
    </div>
  );
}
