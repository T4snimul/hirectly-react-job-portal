import { Building2, User } from "lucide-react";
import { NavLink } from "react-router";

export default function TypeToggle() {
  return (
    <div className="w-full text-center">
      <div className="card p-2 mb-8 inline-flex mx-auto w-full max-w-md">
        <div className="grid grid-cols-2 gap-2 w-full">
          <NavLink
            to="/register"
            end
            className={({ isActive }) =>
              `btn text-center ${isActive ? "btn-primary" : "btn-ghost"}`
            }
          >
            <User className="h-4 w-4 mr-2" />
            Job Seeker
          </NavLink>
          <NavLink
            to="/register/company"
            end
            className={({ isActive }) =>
              `btn text-center ${isActive ? "btn-primary" : "btn-ghost"}`
            }
          >
            <Building2 className="h-4 w-4 mr-2" />
            Employer
          </NavLink>
        </div>
      </div>
    </div>
  );
}
