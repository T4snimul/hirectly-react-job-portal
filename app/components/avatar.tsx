import { useState, useRef, useEffect } from "react";
import { LogOut, type LucideIcon } from "lucide-react";
import { useAuth } from "~/contexts/auth-context";

type avatarProps = {
  Icon: LucideIcon;
  label: string;
};

function Avatar({ Icon, label }: avatarProps) {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className="flex cursor-pointer items-center gap-4"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--color-secondary))]">
            <Icon className="h-4 w-4 text-[hsl(var(--color-primary))]"></Icon>
          </div>
          <span className="hidden text-sm font-medium md:inline">{label}</span>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 rounded-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] shadow-lg">
          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="btn btn-secondary text-sm w-full justify-start"
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span>Log out</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Avatar;
