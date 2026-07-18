import { NavLink } from "react-router";
import { useAuth } from "~/contexts/auth-context";
import Avatar from "./avatar";
import { Briefcase, Building2, User, type LucideIcon } from "lucide-react";

type LinkProp = {
  path: string;
  label: string;
  Icon?: LucideIcon;
};

type Props = {
  primaryLink?: LinkProp;
  secondaryLink?: LinkProp;
  spanText?: string;
};

const companyNavLinks = [
  {
    id: 1,
    label: "Dashboard",
    route: "/",
  },
  {
    id: 2,
    label: "Manage Jobs",
    route: "/jobs",
  },
  { id: 3, label: "Applicants", route: "/applicants" },
];

const userNavLinks = [
  {
    id: 1,
    label: "Dashboard",
    route: "/",
  },
  {
    id: 2,
    label: "Jobs",
    route: "/explore",
  },
  { id: 3, label: "My Applications", route: "/my-applications" },
];

export default function Header({
  primaryLink,
  secondaryLink,
  spanText,
}: Props) {
  const { user } = useAuth();
  console.log(user);
  const navLinks =
    user?.role === "COMPANY"
      ? companyNavLinks
      : user?.role === "USER"
        ? userNavLinks
        : null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))]/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-[hsl(var(--color-primary))]"></Briefcase>
            <span className="text-xl font-bold">LWS Job Portal</span>
          </NavLink>
          {navLinks && (
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((nav) => (
                <NavLink
                  className="text-sm font-medium text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-primary))]"
                  to={nav.route}
                  key={nav.id}
                >
                  {nav.label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
        <div className="flex items-center gap-4">
          {spanText && (
            <span className="text-sm text-[hsl(var(--color-muted-foreground))]">
              {spanText}
            </span>
          )}
          {user?.id && (
            <Avatar
              label={user?.name}
              Icon={user.role === "COMPANY" ? Building2 : User}
            />
          )}
          {secondaryLink && (
            <NavLink to={secondaryLink.path} className="btn btn-ghost text-sm">
              {secondaryLink.Icon && (
                <secondaryLink.Icon className="h-4 w-4 mr-2" />
              )}
              {secondaryLink.label}
            </NavLink>
          )}
          {primaryLink && (
            <NavLink to={primaryLink.path} className="btn btn-primary text-sm">
              {primaryLink.Icon && (
                <primaryLink.Icon className="h-4 w-4 mr-2" />
              )}
              {primaryLink.label}
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}
