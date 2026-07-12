import type { LucideIcon } from "lucide-react";
import { useAuth } from "~/contexts/auth-context";

type avatarProps = {
  Icon: LucideIcon;
  label: string;
};

function Avatar({ Icon, label }: avatarProps) {
  const { logout } = useAuth();
  return (
    <div onClick={logout} className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-[hsl(var(--color-secondary))] flex items-center justify-center">
          <Icon className="h-4 w-4 text-[hsl(var(--color-primary))]"></Icon>
        </div>
        <span className="text-sm font-medium hidden md:inline">{label}</span>
      </div>
    </div>
  );
}

export default Avatar;
