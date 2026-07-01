import { Building2, User } from "lucide-react";
import { Link } from "react-router";

export default function TypeToggle() {
  return (
    <div className="w-full text-center">
      <div className="card p-2 mb-8 inline-flex mx-auto w-full max-w-md">
        <div className="grid grid-cols-2 gap-2 w-full">
          <button className="btn btn-primary text-center">
            <User className="h-4 w-4 mr-2" />
            Job Seeker
          </button>
          <Link to="register/company" className="btn btn-ghost text-center">
            <Building2 className="h-4 w-4 mr-2" />
            Employer
          </Link>
        </div>
      </div>
    </div>
  );
}
