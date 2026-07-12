import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router";

type ToggleProps = {
  id?: number;
  link: string;
  label: string;
  Icon: LucideIcon;
};

type TypeToggleProps = {
  types: ToggleProps[];
};

export default function TypeToggle({ types }: TypeToggleProps) {
  return (
    <div className="w-full text-center">
      <div className="card p-2 mb-8 inline-flex mx-auto w-full max-w-md">
        <div className="grid grid-cols-2 gap-2 w-full">
          {types.map(({ id, link, label, Icon }) => (
            <NavLink
              key={id ?? link}
              to={link}
              end
              className={({ isActive }) =>
                `btn text-center ${isActive ? "btn-primary" : "btn-ghost"}`
              }
            >
              <Icon className="h-4 w-4 mr-2" />
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
